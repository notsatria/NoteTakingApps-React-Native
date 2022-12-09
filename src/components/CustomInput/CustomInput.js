import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholderTextColor={'grey'}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 300,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 14,
    marginVertical: 5,
  },
  input: {
    color: 'black',
  },
});

export default CustomInput;
