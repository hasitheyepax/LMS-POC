import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Web from '../screens/Web';

const Stack = createNativeStackNavigator();

const PrimaryNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen
      name="web"
      component={Web}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default PrimaryNavigator;
