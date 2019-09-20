import React from 'react';
import PropTypes from 'prop-types';
import Deck from '../Deck/Deck.jsx';

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.props.content,
    };
  }

  render() {
    console.log('hello', this.state);
    return (
        <>
          {this.state.content.map((deck, i) => (
            <Deck key={i} deckData = {deck} />
          ))}
        </>
    );
  }
}


Page.propTypes = {
  content: PropTypes.array,
};


export default Page;
