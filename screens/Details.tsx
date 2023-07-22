import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {DayDetailsItem} from '../components';
import {useTypedSelector} from '../redux/hooks';
import {useRoute} from '@react-navigation/native';
import type {RouteProp} from '@react-navigation/native';
import {RootStackParams} from './RootStackPrams';

type DetailsScreenRouteProp = RouteProp<RootStackParams, 'Details'>;

function Details() {
  const route = useRoute<DetailsScreenRouteProp>();
  const {forecast} = useTypedSelector(store => store.forecast);
  const {date} = route.params;
  const dayDetails = forecast[date];
  return (
    <ScrollView style={styles.container}>
      {dayDetails.map(item => {
        return <DayDetailsItem key={item.dt_txt} {...item} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Details;
