// import React from 'react';
// import {Image, TouchableOpacity} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

// // screens
// import {Home} from './screens/';

// import {images, icons, COLORS, FONTS, SIZES} from './constants';

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     border: 'transparent',
//   },
// };

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer theme={theme}>
//       <Stack.Navigator initialRouteName={'Home'}>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{
//             title: 'SHOE SELECTOR',
//             headerStyle: {
//               //backgroundColor: '#f4511e',
//             },
//             headerTintColor: COLORS.lightGray,
//             headerTitleStyle: {
//               ...FONTS.navTitle,
//             },
//             headerLeft: ({onPress}) => (
//               <TouchableOpacity
//                 style={{marginLeft: SIZES.padding}}
//                 onPress={onPress}>
//                 <Image
//                   source={icons.menu}
//                   resizeMode="contain"
//                   style={{
//                     width: 25,
//                     height: 25,
//                   }}
//                 />
//               </TouchableOpacity>
//             ),
//             headerRight: () => (
//               <TouchableOpacity
//                 style={{marginRight: SIZES.padding}}
//                 onPress={() => console.log('Pressed')}>
//                 <Image
//                   source={icons.search}
//                   resizeMode="contain"
//                   style={{
//                     width: 30,
//                     height: 30,
//                   }}
//                 />
//               </TouchableOpacity>
//             ),
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default () => {
//   return <App />;
// };

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
