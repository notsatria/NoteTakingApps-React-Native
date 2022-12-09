import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from './colors';

const Note = ({item, onPressNote}) => {
  const {title, desc} = item;
  return (
    <TouchableOpacity onPress={onPressNote} style={styles.container}>
      <Text numberOfLines={2} style={styles.titleText}>
        {title}
      </Text>
      <Text numberOfLines={3} style={styles.descText}>
        {desc}
      </Text>
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width - 40;

export default Note;

const styles = StyleSheet.create({
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.LIGHT,
  },
  descText: {
    color: 'black',
    fontSize: 16,
  },
  container: {
    backgroundColor: colors.PRIMARY,
    width: width / 2 - 10,
    padding: 8,
    borderRadius: 10,
  },
});
