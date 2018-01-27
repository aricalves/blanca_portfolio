import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles';
import NameCard from './components/NameCard.jsx';
import PhotoCard from './components/PhotoCard.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component {

  render () {
    return (
      <div id='appWrapper'>
        <NameCard />
        <PhotoCard />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));