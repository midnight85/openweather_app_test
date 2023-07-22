import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={'#1591f5'} />
    </View>
  );
};
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
export default Loader;
