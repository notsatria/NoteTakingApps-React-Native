import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import colors from '../../components/colors';

const Intro = ({onFinish}) => {
  const [name, setName] = useState('');

  const handleOnChangeText = text => {
    setName(text);
  };

  const onPressSubmit = async () => {
    const user = {name: name};
    await AsyncStorage.setItem('user', JSON.stringify(user));
    if (onFinish) onFinish();
  };

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.text}>Enter Your Name to Continue</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter name"
          placeholderTextColor={'grey'}
          value={name}
          onChangeText={handleOnChangeText}
        />
        {name.trim().length >= 3 ? (
          <TouchableOpacity style={styles.button} onPress={onPressSubmit}>
            <Text>Get Started</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
};

const width = Dimensions.get('window').width - 50;
//width: 392.727272727275

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    opacity: 0.5,
  },
  textInput: {
    borderWidth: 2,
    borderColor: colors.PRIMARY,
    width,
    height: 40,
    borderRadius: 10,
    fontSize: 16,
    height: 50,
    color: colors.PRIMARY,
  },
  button: {
    width: 120,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    elevation: 5,
  },
});

export default Intro;
