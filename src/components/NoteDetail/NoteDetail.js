import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNotes} from '../../Context/NoteProvider';
import NoteInputModal from '../NoteInputModal/NoteInputModal';

const formatDate = ms => {
  const date = new Date(ms);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const sec = date.getSeconds();

  return `${day}/${month}/${year} - ${hours}:${minutes}:${sec}`;
};

const NoteDetail = props => {
  const [note, setNote] = useState(props.route.params.note);
  const {setNotes} = useNotes();
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const deleteNote = async () => {
    const result = await AsyncStorage.getItem('notes');
    let notes = [];
    if (result !== null) notes = JSON.parse(result);

    const newNotes = notes.filter(n => n.id !== note.id);
    setNotes(newNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(newNotes));

    props.navigation.goBack();
  };

  const displayDeleteAlert = () => {
    Alert.alert(
      'Apakah kamu yakin?',
      'Catatan akan terhapus selamanya',
      [
        {
          text: 'Delete',
          onPress: deleteNote,
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel'),
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const handleOnClose = () => {
    setShowModal(false);
  };
  const handleUpdate = async (title, desc, time) => {
    const result = await AsyncStorage.getItem('notes');
    let notes = [];
    if (result !== null) notes = JSON.parse(result);

    const newNotes = notes.filter(n => {
      if (n.id === note.id) {
        n.title = title;
        n.desc = desc;
        n.isUpdated = true;
        n.time = time;

        setNote(n);
      }
      return n;
    });

    setNotes(newNotes);

    await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
  };

  const openEditModal = () => {
    setIsEdit(true);
    setShowModal(true);
  };

  return (
    <>
      <ScrollView contentContainerStyle={[styles.container, {paddingTop: 60}]}>
        <Text style={styles.date}>
          {note.isUpdated
            ? `Updated at ${formatDate(note.time)}`
            : `Created at ${formatDate(note.time)}`}
        </Text>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.desc}>{note.desc}</Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.delButton} onPress={displayDeleteAlert}>
          <Text style={{color: colors.LIGHT, fontWeight: 'bold', fontSize: 16}}>
            Del
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton} onPress={openEditModal}>
          <Text style={{color: colors.LIGHT, fontWeight: 'bold', fontSize: 16}}>
            Edit
          </Text>
        </TouchableOpacity>
        <NoteInputModal
          isEdit={isEdit}
          note={note}
          onClose={handleOnClose}
          onSubmit={handleUpdate}
          visible={showModal}></NoteInputModal>
      </View>
    </>
  );
};

export default NoteDetail;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    color: colors.PRIMARY,
    fontSize: 30,
    fontWeight: 'bold',
  },
  desc: {
    color: colors.DARK,
    fontSize: 20,
    opacity: 0.6,
  },
  date: {
    color: colors.DARK,
    textAlign: 'right',
    fontSize: 16,
    opacity: 0.5,
  },
  delButton: {
    backgroundColor: colors.ERROR,
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 5,
  },
  editButton: {
    backgroundColor: colors.PRIMARY,
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonContainer: {
    position: 'absolute',
    right: 20,
    bottom: 40,
  },
});
