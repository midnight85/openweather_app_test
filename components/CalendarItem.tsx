import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../screens/RootStackPrams';
import moment from 'moment/moment';

interface CalendarItemProps {
  date: string;
}

function CalendarItem({date}: CalendarItemProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const formattedDate = moment(date).format('MMM DD');
  const handleItemPress = () => {
    navigation.navigate('Details', {date});
  };
  return (
    <Pressable
      style={({pressed}) => [styles.itemContainer, pressed && styles.pressed]}
      onPress={handleItemPress}>
      <Text numberOfLines={2} ellipsizeMode={'middle'} style={styles.text}>
        {formattedDate}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 16,
    backgroundColor: 'rgba(133,246,246,0.47)',
    alignItems: 'center',
  },
  text: {
    color: '#1c1b1b',
    fontFamily: 'SchibstedGrotesk-Medium',
    fontSize: 20,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.6,
  },
});

export default CalendarItem;
