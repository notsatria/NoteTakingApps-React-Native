import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../colors';

const SearchBar = ({containerStyle}) => {
  return (
    <View style={[styles.container, {containerStyle}]}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search here"
        placeholderTextColor={'grey'}></TextInput>
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
  },
});

export default SearchBar;
