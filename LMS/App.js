import {Text, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import PrimaryNavigator from './src/navigation/PrimaryNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <PrimaryNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
