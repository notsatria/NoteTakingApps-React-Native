import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../colors';

const SearchBar = ({containerStyle, value, onChangeText, onClear}) => {
  return (
    <View style={[styles.container, {...containerStyle}]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.searchBar}
        placeholder="Cari catatan"
        placeholderTextColor={'grey'}></TextInput>
      <TouchableOpacity style={styles.clear} onPress={onClear}>
        <Text style={{color: 'grey'}}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 0.5,
    borderColor: colors.PRIMARY,
    height: 40,
    borderRadius: 16,
    fontSize: 20,
    paddingLeft: 14,
    color: 'black',
  },
  container: {
    marginVertical: 20,
    justifyContent: 'center',
  },
  clear: {
    position: 'absolute',
    right: 15,
  },
});

export default SearchBar;
