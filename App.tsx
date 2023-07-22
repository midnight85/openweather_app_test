import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Details} from './screens';
import {RootStackParams} from './screens/RootStackPrams';
import moment from 'moment/moment';

const Stack = createNativeStackNavigator<RootStackParams>();

function App() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="white"
        barStyle={'dark-content'}
      />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Details"
              component={Details}
              options={({route}) => ({
                headerTitle: moment(route.params.date).format('LL'),
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
