import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import content from './content.json';

// eslint-disable-next-line import/extensions
import Page from './components/Page/Page.jsx';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import If from './If/If.jsx';


const App = (props) => {
  return (
        <>
        <Header/>
        <Switch>
          <Route exact path="/about" component={About}/>
          <Route exact path="/page" render={props => <Page  content={content}Josh="hello" />}
          />
        </Switch>
        </>
  );
};

App.propTypes = {
  children: PropTypes.object,
};

const rootElement = document.getElementById('root');

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, rootElement);
export default App;
