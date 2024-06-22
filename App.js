import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
// import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>App</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
