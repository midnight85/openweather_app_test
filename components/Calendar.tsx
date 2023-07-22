import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import CalendarItem from './CalendarItem';
import {useTypedSelector} from '../redux/hooks';

interface CalendarProps {
  style?: StyleProp<ViewStyle>;
}

function Calendar({style}: CalendarProps) {
  const {forecast} = useTypedSelector(store => store.forecast);
  return (
    <View style={[styles.container, style && style]}>
      {Object.keys(forecast).map(date => {
        return <CalendarItem key={date} date={date} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 6,
    justifyContent: 'space-between',
  },
});

export default Calendar;
