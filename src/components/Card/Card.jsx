import React from 'react';
import PropTypes from 'prop-types';


const Card = (props) => {
  return (
       <>
         <div className="card">
         <header><h2>{props.cardData.title}</h2></header>
           <div className="content">{props.cardData.copy}</div>
           <figure>
             <img src={props.cardData.media.href} alt={props.cardData.media.alt} />
             <figcaption>{props.cardData.media.title}</figcaption>
           </figure>
           <nav className="links">
               <ul>
                 {props.cardData.links.map((link, i) => (
                 <li key={i}><a
                     className={link.type}
                     href={link.href}
                     title={link.title}>{link.title}</a></li>
                 ))}
               </ul>
           </nav>
         </div>

       </>
  );
};


Card.propTypes = {
  cardData: PropTypes.object,
};

export default Card;
