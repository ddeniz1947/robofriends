import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';
import { setSearchField , requestRobots } from '../actions'
//Connect method projeyle reducerları bağlamak için kullanılır
const mapStateToProps = state => { //Hangi property App classın içinden gelirse o propertynin stateine gider
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {//Action u tetikler
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    // constructor() { // Buralar artık propsta döndüğü için ihtiyacımız yok
    //     super()
    //     this.state = {
    //         robots: []
    //     }
    // }

    componentDidMount(){
        this.props.onRequestRobots();
    }
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(users => {
    //             this.setState({
    //                 robots: users
    //             });
    //         });

    // }
    // onSearchChange =  (event) =>{
    //     this.setState({searchField:event.target.value});

    // }
    render() {
        const { searchField, onSearchChange ,robots,isPending} = this.props;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending ?
            <h1 className="tc">Loading</h1> :

            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <CardList robots={filterRobots} />
                    </Scroll>

                </div>

            );

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App); // İlk state i dinliyor sonra ikinciyi actionlıyor
