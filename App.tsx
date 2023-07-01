import React, {type PropsWithChildren} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Image
        source={require('./assets/img/cryptomonedas.png')}
        style={styles.img}
      />
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
});

export default App;
