import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import ForecastValue from './ForecastValue';
import {Celsius, Precipitation, Pressure, Wind} from './Icons';
import {openweatherIcons} from '../assets/openweather_icons';
import {ForecastListItem} from '../types/forecast';

function DayDetailsItem({dt_txt, main, weather, wind, pop}: ForecastListItem) {
  const {temp, pressure} = main;
  const {main: status, icon} = weather[0];
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{dt_txt.split(' ')[1].slice(0, 5)}</Text>
      <View style={styles.topContainer}>
        <View style={styles.alignCenter}>
          <Celsius size={24} color={'#000'} />
          <Text style={styles.temp}>{Math.round(temp)}°</Text>
        </View>
        <View style={styles.alignCenter}>
          <View style={styles.iconContainer}>
            <Image
              source={openweatherIcons[icon]}
              style={{height: '100%', resizeMode: 'contain'}}
            />
          </View>
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <ForecastValue
          icon={Wind}
          value={`${wind.speed} m/s`}
          description="Wind"
        />
        <ForecastValue
          icon={Precipitation}
          value={`${pop * 100}%`}
          description="Precipitation"
        />
        <ForecastValue
          icon={Pressure}
          value={`${pressure} mb`}
          description="Pressure"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    gap: 10,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(101,178,231,0.15)',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 24,
    alignSelf: 'center',
  },
  alignCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    textAlign: 'center',
    fontFamily: 'SchibstedGrotesk-Medium',
    fontSize: 26,
    borderBottomWidth: 1,
    marginHorizontal: '20%',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  iconContainer: {
    alignItems: 'center',
    height: 56,
    marginVertical: -12,
  },
  status: {
    color: '#625050',
    fontFamily: 'SchibstedGrotesk-Medium',
    fontSize: 16,
    textAlign: 'center',
  },
  temp: {
    color: '#524b4b',
    fontFamily: 'SchibstedGrotesk-Medium',
    fontSize: 26,
    textAlign: 'center',
  },
});

export default DayDetailsItem;
