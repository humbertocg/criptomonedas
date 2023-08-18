import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {detailsDisplay} from '../models/IConversionCurrency';

const Cotizacion = (props: detailsDisplay) => {
  return (
    <View style={styles.resultado}>
      <Text style={[styles.texto, styles.precio]}>
        <Text style={styles.span}>{props.PRICE}</Text>
      </Text>

      <Text style={styles.texto}>
        Precio mas alto del dia:{' '}
        <Text style={styles.span}>{props.HIGHDAY}</Text>
      </Text>

      <Text style={styles.texto}>
        Precio mas bajo del dia: <Text style={styles.span}>{props.LOWDAY}</Text>
      </Text>

      <Text style={styles.texto}>
        Variacion de las ultimas 24 horas:{' '}
        <Text style={styles.span}>{props.CHANGEPCT24HOUR} %</Text>
      </Text>

      <Text style={styles.texto}>
        Ultima actualizacion:{' '}
        <Text style={styles.span}>{props.LASTUPDATE}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultado: {
    backgroundColor: '#5E49E2',
    padding: 20,
    marginTop: 15,
  },
  texto: {
    color: '#FFF',
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginBottom: 10,
  },
  precio: {
    fontSize: 38,
  },
  span: {
    fontFamily: 'Lato-Black',
  },
});

export default Cotizacion;
