import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles';
import NameCard from './components/NameCard.jsx';

class App extends React.Component {

  render () {
    return (
      <div id='appWrapper'>
        <NameCard />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));