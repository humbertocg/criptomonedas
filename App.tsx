import React, {useState, type PropsWithChildren, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';
import {
  fromCurrencyParam,
  getConversionPath,
  intoCurrencyParam,
} from './api/pathApi';
import api from './api/api';
import {
  IConversionCurrency,
  detailsDisplay,
} from './models/IConversionCurrency';
import Cotizacion from './components/Cotizacion';
import {initDetailsDisplay} from './models/initDetailsDisplay';

const App = () => {
  const [currentCurrency, setCurrentCurrency] = useState('');
  const [currentCryptoCurrency, setCurrentCryptoCurrency] = useState('');
  const [isEnablebAPIConversion, setIsEnablebAPIConversion] = useState(false);
  const [currentConversion, setCurrentConversion] =
    useState<detailsDisplay>(initDetailsDisplay);
  const [isLoading, setIsloading] = useState(false);

  const getConversionCurrencies = async () => {
    if (currentCurrency === '' || currentCryptoCurrency === '') {
      return;
    }
    setIsloading(true);
    try {
      const response = await api.get(getConversionPath, {
        params: {
          [fromCurrencyParam]: currentCryptoCurrency,
          [intoCurrencyParam]: currentCurrency,
        },
      });
      if (response.status === 200) {
        const result = response.data as IConversionCurrency; //{[key: string]: string};
        const conversion = result.DISPLAY[currentCryptoCurrency][
          currentCurrency
        ] as detailsDisplay;
        setCurrentConversion(conversion);
      }
    } catch (ex) {
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    if (isEnablebAPIConversion) {
      getConversionCurrencies();
      setIsEnablebAPIConversion(!isEnablebAPIConversion);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEnablebAPIConversion]);

  return (
    <>
      <ScrollView>
        <Header />
        <Image
          source={require('./assets/img/cryptomonedas.png')}
          style={styles.image}
        />
        <View style={styles.contenedor}>
          <Formulario
            currentCurrency={currentCurrency}
            currentCryptoCurrency={currentCryptoCurrency}
            setCurrentCurrency={setCurrentCurrency}
            setCurrentCryptoCurrency={setCurrentCryptoCurrency}
            isEnablebAPIConversion={isEnablebAPIConversion}
            setIsEnablebAPIConversion={setIsEnablebAPIConversion}
          />
        </View>
        {isLoading ? (
          <View style={{marginTop: 20}}>
            <ActivityIndicator size={'large'} color={'#5E49E2'} />
          </View>
        ) : (
          currentConversion.PRICE !== '' && (
            <Cotizacion {...currentConversion} />
          )
        )}
      </ScrollView>
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
