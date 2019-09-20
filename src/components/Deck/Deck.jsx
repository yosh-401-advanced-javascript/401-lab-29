import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.jsx';


const Deck = (props) => {
  return (
      <>
        <section className="deck">
          <header><h2>{props.deckData.title}</h2></header>
          {props.deckData.records.map((card, i) => (
              <Card key={i} cardData = {card} />
          ))}

        </section>

      </>

  );
};

Deck.propTypes = {
  deckData: PropTypes.object,
};

export default Deck;
