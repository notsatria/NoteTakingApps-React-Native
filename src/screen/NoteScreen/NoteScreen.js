import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import colors from '../../components/colors';
import SearchBar from '../../components/SearchBar/SearchBar';
import NoteInputModal from '../../components/NoteInputModal/NoteInputModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Note from '../../components/Note';
import {useNotes} from '../../Context/NoteProvider';

const NoteScreen = ({user, navigation}) => {
  const [greet, setGreet] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const {notes, setNotes} = useNotes();

  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12) return setGreet('Pagi');
    if (hrs === 1 || hrs < 17) return setGreet('Siang');
    setGreet('Malam');
  };

  useEffect(() => {
    findGreet();
  }, []);

  const handleOnSubmit = async (title, desc) => {
    const note = {id: Date.now(), title, desc, time: Date.now()};
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const openNote = note => {
    navigation.navigate('NoteDetail', {note});
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.LIGHT} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
        <View style={styles.container}>
          <Text style={styles.header}>{`Selamat ${greet}, ${user.name}`}</Text>
          {notes.length ? <SearchBar /> : null}
          <FlatList
            numColumns={2}
            data={notes}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginBottom: 15,
            }}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <Note item={item} onPressNote={() => openNote(item)}></Note>
            )}></FlatList>
          {!notes.length ? (
            <View
              style={[StyleSheet.absoluteFill, styles.emptyHeaderContainer]}>
              <Text style={styles.emptyHeader}>Add Notes</Text>
            </View>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity
        style={styles.plusIconBackground}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.plusIcon}>+</Text>
      </TouchableOpacity>
      <NoteInputModal
        onSubmit={handleOnSubmit}
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}></NoteInputModal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  header: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  emptyHeader: {
    fontSize: 30,
    color: colors.DARK,
    textTransform: 'uppercase',
    opacity: 0.2,
  },
  emptyHeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    zIndex: -1,
  },
  plusIcon: {
    color: colors.LIGHT,
    fontSize: 40,
    alignItems: 'center',
  },
  plusIconBackground: {
    backgroundColor: colors.PRIMARY,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    position: 'absolute',
    right: 25,
    bottom: 50,
    elevation: 5,
    zIndex: 1,
  },
});

export default NoteScreen;
