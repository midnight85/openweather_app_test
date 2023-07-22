import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {IIcon} from '../types/icon';

interface ForecastValueProps {
  icon: React.FC<IIcon>;
  value: string;
  description: string;
}

function ForecastValue({icon: Icon, value, description}: ForecastValueProps) {
  return (
    <View style={styles.container}>
      <Icon size={24} color={'#000'} />
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(101,178,231,0.15)',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 2,
  },
  value: {
    color: '#625050',
    fontFamily: 'SchibstedGrotesk-Bold',
    fontSize: 16,
  },
  description: {
    color: '#625050',
    fontFamily: 'SchibstedGrotesk-Regular',
    fontSize: 16,
  },
});

export default ForecastValue;
