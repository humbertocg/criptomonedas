import React, {type PropsWithChildren} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';

const App = () => {
  return (
    <>
      <Header />
      <Image
        source={require('./assets/img/cryptomonedas.png')}
        style={styles.image}
      />
      <View style={styles.contenedor}>
        <Formulario />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {marginHorizontal: 15},
  image: {
    width: '100%',
    height: 150,
    marginHorizontal: '0%',
  },
});

export default App;
