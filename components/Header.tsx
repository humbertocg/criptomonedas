import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={styles.encabezado}>Criptomonedas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    fontFamily: 'Lato-Black',
    backgroundColor: '#FCA503',
    paddingBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#FFF',
    marginBottom: 30,
  },
});

export default Header;
