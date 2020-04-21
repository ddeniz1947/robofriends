import React from 'react';

const Card = ({ name , email , id}) => {
  /*  const { name , email , id} = props; /* bu şekilde tanımlandığında , html taglari içinde kullanırken
                                         {props.name} dememize gerek kalmaz. 
                                          sadece   {name} demek yeterlidir. bu yapıyı direk (props) yerine ({ name , email , id}) 
                                          şeklinde de kullanabiliriz. */
    return (
     <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
         <img alt='robots' src={`https://robohash.org/${id}?200x200`}/> 
         <div>
             <h2>{name}</h2>
             <p>{email}</p>
         </div>
     </div>
    );
}


export default Card;