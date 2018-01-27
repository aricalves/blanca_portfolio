import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../styles';

const photoURL = 'https://images.unsplash.com/photo-1498334906313-6e099a1bd87b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb13defcf2943620768a4ed175f6fb07&auto=format&fit=crop&w=1950&q=80';
const sampleText = 'Spicy jalapeno bacon ipsum dolor amet shoulder picanha biltong chuck cow turducken pork loin. Ribeye picanha pork alcatra, chuck jowl pig kielbasa. Prosciutto andouille beef ribs, hamburger spare ribs cupim frankfurter filet mignon doner. Pig tri-tip swine doner, shankle pancetta turkey. Short ribs frankfurter drumstick shankle salami flank pork loin cupim pork belly doner sirloin. Chuck jowl prosciutto spare ribs. Pork loin flank porchetta biltong meatloaf ball tip prosciutto tenderloin swine chuck spare ribs filet mignon tongue meatball.'

const PhotoCard = () => (
  <div style={styles.photoCard}>
    <img style={styles.image} src={photoURL} alt='moose'/>
    <div style={styles.photoCardText}>
      {sampleText}
    </div>
  </div>
);

export default PhotoCard;