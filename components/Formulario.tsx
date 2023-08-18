import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {ICryptoCurrency} from '../models/ICryptoCurrency';
import {ICurrency} from '../models/ICurrency';
import api from '../api/api';
import {getCryptoCurenciesPath} from '../api/pathApi';
import {TouchableHighlight} from 'react-native';

type FomularioType = {
  currentCurrency: string;
  currentCryptoCurrency: string;
  setCurrentCurrency: React.Dispatch<React.SetStateAction<string>>;
  setCurrentCryptoCurrency: React.Dispatch<React.SetStateAction<string>>;
  isEnablebAPIConversion: boolean;
  setIsEnablebAPIConversion: React.Dispatch<React.SetStateAction<boolean>>;
};

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

const Formulario = (props: FomularioType) => {
  const {
    currentCurrency,
    currentCryptoCurrency,
    setCurrentCurrency,
    setCurrentCryptoCurrency,
    isEnablebAPIConversion,
    setIsEnablebAPIConversion,
  } = props;
  const [cryptoCurrencies, setCryptoCurrencies] = useState<ICurrency[]>([]);
  const [isEnabledBtnCotizar, setIsEnabledBtnCotizar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCryptoCurrencies = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(getCryptoCurenciesPath);
      if (response.status === 200) {
        const cryptoResponse = response.data as ICryptoCurrency;
        const defaultValue: ICurrency[] = [
          {label: '- Seleccione -', value: ''},
        ];
        const resultMapped = cryptoResponse.Data.map(item => {
          const currency: ICurrency = {
            label: item.CoinInfo.FullName,
            value: item.CoinInfo.Name,
          };
          return currency;
        });
        setCryptoCurrencies([...defaultValue, ...resultMapped]);
      }
    } catch (ex) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoCurrencies();
  }, []);

  useEffect(() => {
    setIsEnabledBtnCotizar(
      currentCurrency !== '' && currentCryptoCurrency !== '',
    );
  }, [currentCurrency, currentCryptoCurrency]);

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={currentCurrency}
        onValueChange={(itemValue, itemIndex) => {
          setCurrentCurrency(itemValue);
          setIsEnabledBtnCotizar(
            itemValue !== '' && currentCryptoCurrency !== '',
          );
        }}>
        {currencies.map((item, index) => {
          return (
            <Picker.Item
              key={`coin_${index}`}
              label={item.label}
              value={item.value}
            />
          );
        })}
      </Picker>

      <Text style={styles.label}>Criptomoneda</Text>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={'#5E49E2'} />
      ) : (
        <Picker
          selectedValue={currentCryptoCurrency}
          onValueChange={(itemValue, itemIndex) => {
            setCurrentCryptoCurrency(itemValue);
            setIsEnabledBtnCotizar(currentCurrency !== '' && itemValue !== '');
          }}>
          {cryptoCurrencies.map((item, index) => {
            return (
              <Picker.Item
                key={`crypto_${index}`}
                label={item.label}
                value={item.value}
              />
            );
          })}
        </Picker>
      )}
      <TouchableHighlight
        style={
          isEnabledBtnCotizar
            ? styles.btnCotizarEnabled
            : styles.btnCotizarDisabled
        }
        disabled={!isEnabledBtnCotizar}
        onPress={() => {
          setIsEnablebAPIConversion(true);
          setIsEnabledBtnCotizar(false);
        }}>
        <Text style={styles.btnTextoCotizar}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontSize: 22,
  },
  btnCotizarEnabled: {
    backgroundColor: '#5E49E2',
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  btnCotizarDisabled: {
    backgroundColor: 'gray',
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  btnTextoCotizar: {
    fontFamily: 'Lato-Black',
    color: '#FFF',
    textTransform: 'uppercase',
  },
});

export default Formulario;
