import {View, Text, StyleSheet, Pressable} from 'react-native';

export default function Home({navigation}) {
  const onPress = () => {
    navigation.navigate('web');
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>Go To Web</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'dodgerblue',
    padding: 20,
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
});
