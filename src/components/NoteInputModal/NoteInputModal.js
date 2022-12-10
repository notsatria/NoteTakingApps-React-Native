import {
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../colors';

const NoteInputModal = ({visible, onClose, onSubmit, isEdit, note}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (isEdit) {
      setTitle(note.title);
      setDesc(note.desc);
    }
  }, [isEdit]);

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === 'title') setTitle(text);
    if (valueFor === 'desc') setDesc(text);
  };

  const handleSubmit = () => {
    if (!title.trim() && !desc.trim()) onClose();
    onSubmit(title, desc);
    if (isEdit) {
      onSubmit(title, desc, Date.now());
    } else {
      setTitle('');
      setDesc('');
    }
    onClose();
  };

  const closeModal = () => {
    if (!isEdit) {
      setTitle('');
      setDesc('');
    }
    onClose();
  };

  return (
    <>
      <StatusBar hidden></StatusBar>
      <Modal visible={visible} animationType="fade">
        <View style={styles.container}>
          <TextInput
            value={title}
            onChangeText={text => handleOnChangeText(text, 'title')}
            placeholder="Judul"
            placeholderTextColor={'grey'}
            style={[styles.input, styles.title]}></TextInput>
          <TextInput
            value={desc}
            onChangeText={text => handleOnChangeText(text, 'desc')}
            multiline
            placeholder="Catatan"
            placeholderTextColor={'grey'}
            style={[styles.input, styles.desc]}></TextInput>
          <View style={styles.buttonContainer}>
            {title.trim() || desc.trim() ? (
              <TouchableOpacity
                onPress={handleSubmit}
                style={[styles.button, styles.submit]}>
                <Text style={styles.textButtonSubmit}>Submit</Text>
              </TouchableOpacity>
            ) : null}

            <TouchableOpacity
              onPress={closeModal}
              style={[styles.button, styles.cancel]}>
              <Text style={styles.textButtonCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]}></View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default NoteInputModal;

const styles = StyleSheet.create({
  input: {
    borderColor: colors.PRIMARY,
    fontSize: 20,
    color: colors.DARK,
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    marginBottom: 15,
    height: 60,
    fontWeight: 'bold',
  },
  desc: {
    height: 200,
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  button: {
    width: 80,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    backgroundColor: colors.PRIMARY,
  },
  cancel: {
    borderColor: colors.PRIMARY,
    borderWidth: 2,
    marginLeft: 15,
  },
  textButtonCancel: {
    color: colors.PRIMARY,
    fontSize: 16,
  },
  textButtonSubmit: {
    fontSize: 16,
    color: colors.LIGHT,
  },
});
