import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICryptoCurrency} from '../models/ICryptoCurrency';
import {ICurrency} from '../models/ICurrency';
import api from '../api/api';

const getCryptoCurenciesPath = '/data/top/mktcapfull?limit=10&tsym=USD';

const getConversionPath = '/data/price';
const fromCurrencyParam = 'fsym';
const intoCurrencyParam = 'tsyms';

const currencies: ICurrency[] = [
  {
    label: '- Seleccione -',
    value: '',
  },
  {
    label: 'Dolar de Estados Unidos',
    value: 'USD',
  },
  {
    label: 'Peso Mexicano',
    value: 'MXN',
  },
  {
    label: 'Euro',
    value: 'EUR',
  },
  {
    label: 'Libra Esterlina',
    value: 'GBP',
  },
];

const Formulario = () => {
  const [currentCurrency, setCurrentCurrency] = useState('');
  const [cryptoCurrencies, setCryptoCurrencies] = useState<ICurrency[]>([]);
  const [currentCryptoCurrency, setCurrentCryptoCurrency] = useState('');

  const fetchCryptoCurrencies = async () => {
    const response = await api.get(getCryptoCurenciesPath);
    if (response.status === 200) {
      const cryptoResponse = response.data as ICryptoCurrency;
      const defaultValue: ICurrency[] = [{label: '- Seleccione -', value: ''}];
      const resultMapped = cryptoResponse.Data.map(item => {
        const currency: ICurrency = {
          label: item.CoinInfo.FullName,
          value: item.CoinInfo.Name,
        };
        return currency;
      });
      setCryptoCurrencies([...defaultValue, ...resultMapped]);
    }
  };

  const getConversionCurrencies = async () => {
    const response = await api.get(getConversionPath, {
      params: {
        [fromCurrencyParam]: currentCurrency,
        [intoCurrencyParam]: currentCryptoCurrency,
      },
    });
    if (response.status === 200) {
      const result = response.data as {[key: string]: string};
      console.log(result[currentCryptoCurrency]);
    }
  };

  useEffect(() => {
    if (currentCurrency !== '' && currentCryptoCurrency !== '') {
      getConversionCurrencies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCurrency, currentCryptoCurrency]);

  useEffect(() => {
    fetchCryptoCurrencies();
  }, []);

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={currentCurrency}
        onValueChange={(itemValue, itemIndex) => {
          setCurrentCurrency(itemValue);
        }}>
        {currencies.map((item, index) => {
          return (
            <Picker.Item key={index} label={item.label} value={item.value} />
          );
        })}
      </Picker>

      <Text style={styles.label}>Criptomoneda</Text>
      <Picker
        selectedValue={currentCryptoCurrency}
        onValueChange={(itemValue, itemIndex) => {
          setCurrentCryptoCurrency(itemValue);
        }}>
        {cryptoCurrencies.map((item, index) => {
          return (
            <Picker.Item key={index} label={item.label} value={item.value} />
          );
        })}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    fontTransform: 'uppercase',
    fontSize: 22,
  },
});

export default Formulario;
