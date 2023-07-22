import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {openweatherIcons} from '../assets/openweather_icons';
import {useTypedDispatch, useTypedSelector} from '../redux/hooks';
import {Reload, Sunrise, Sunset} from './Icons';
import moment from 'moment';
import {fetchDataAction} from '../redux/actions';
import IconButton from './UI/IconButton';

function CurrentWeather() {
  const dispatch = useTypedDispatch();
  const {weather: currentWeatherData} = useTypedSelector(
    store => store.weather,
  );
  const {dt, weather, name, main, sys} = currentWeatherData;
  const icon = openweatherIcons[currentWeatherData.weather[0].icon];
  const handleFetchOnSwipe = () => {
    dispatch(fetchDataAction());
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'SchibstedGrotesk-Regular',
            color: 'black',
          }}>
          Last update of data: {moment.unix(dt).format('DD MMMM HH:MM')}
        </Text>
        <IconButton
          icon={Reload}
          onPress={handleFetchOnSwipe}
          size={24}
          color={'#000000'}
        />
      </View>
      <View style={styles.iconContainer}>
        <Image source={icon} style={{height: '100%', resizeMode: 'contain'}} />
      </View>
      <Text style={styles.status}>{weather[0].main}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.temp}>{Math.round(main.temp)}°</Text>
      <View style={styles.sunDetailsContainer}>
        <View style={{alignItems: 'center'}}>
          <Sunrise size={32} color={'#625050'} />
          <Text style={styles.status}>
            {moment.unix(sys.sunrise).format('HH:MM')}
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Sunset size={32} color={'#625050'} />
          <Text style={styles.status}>
            {moment.unix(sys.sunset).format('HH:MM')}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  iconContainer: {
    alignItems: 'center',
    height: 56,
  },
  name: {
    color: '#1c1b1b',
    fontFamily: 'SchibstedGrotesk-Bold',
    fontSize: 40,
    textAlign: 'center',
  },
  status: {
    color: '#625050',
    fontFamily: 'SchibstedGrotesk-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  temp: {
    color: '#524b4b',
    fontFamily: 'SchibstedGrotesk-Medium',
    fontSize: 40,
    textAlign: 'center',
  },
  sunDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default CurrentWeather;
