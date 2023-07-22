import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  CurrentWeather,
  Calendar,
  ForecastSectionList,
  Loader,
} from '../components';
import {useTypedSelector} from '../redux/hooks';

function Home() {
  const {isLoading: isWeatherLoading, error: weatherError} = useTypedSelector(
    store => store.weather,
  );
  const {isLoading: isForecastLoading, error: forecastError} = useTypedSelector(
    store => store.forecast,
  );
  if (isWeatherLoading || isForecastLoading) {
    return <Loader />;
  }
  if (weatherError || forecastError) {
    return (
      <Text
        style={{
          padding: 40,
          textAlign: 'center',
          fontSize: 32,
          fontFamily: 'SchibstedGrotesk-Regular',
          color: 'black',
        }}>
        {weatherError && weatherError}
        {'\n'}
        {forecastError && forecastError}
      </Text>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <CurrentWeather />
      <Calendar style={{marginVertical: 20}} />
      <Text style={styles.text}>5 day forecast</Text>
      <ForecastSectionList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 14,
  },
  text: {
    color: '#02273b',
    fontFamily: 'SchibstedGrotesk-Medium',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
  },
});
export default Home;
