import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const MinMaxTextInput = () => {
  const [minLength, setMinLength] = useState(3);
  const [maxLength, setMaxLength] = useState(15);
  const [inputValue, setInputValue] = useState('');

  const handleTextChange = textInput => {
    setInputValue(textInput);
  };

  // Get character or characters
  const getCharacter = numCharacters => {
    return numCharacters === 1 ? 'character' : 'characters';
  };

  // x character needed
  const getCharacterMessage = numCharacters => {
    return `${numCharacters} ${getCharacter(numCharacters)} needed`;
  };

  // x more character needed
  const getMoreCharacterMessage = numCharacters => {
    return `${numCharacters} more ${getCharacter(numCharacters)} needed`;
  };

  // x character remaining
  const getRemainingCharacterMessage = numCharacters => {
    return `${numCharacters} ${getCharacter(numCharacters)} remaining`;
  };

  const renderMessage = () => {
    let len = inputValue ? inputValue.length : 0;
    let msg = '';

    // user hasn't started typing
    if (len === 0 && len < minLength) {
      msg = getCharacterMessage(minLength);
      return <Text style={styles.neutralText}>{msg}</Text>;
    }

    // user has max # of characters
    if (len === maxLength) return <View />;

    // user has remaining character
    if (len >= minLength) {
      msg = getRemainingCharacterMessage(maxLength - len);
      return <Text style={styles.neutralText}>{msg}</Text>;
    }

    // user need more character and just started typing
    if (len < minLength && len > 0) {
      msg = getMoreCharacterMessage(minLength - len);
      return <Text style={styles.remainingText}>{msg}</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        minLength={minLength}
        maxLength={maxLength}
        value={inputValue}
        onChangeText={textInput => handleTextChange(textInput)}
      />
      {renderMessage()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputStyle: {
    height: 200,
    width: '90%',
    borderWidth: 1,
    textAlignVertical: 'top'
  },
  neutralText: {
    paddingTop: 5,
    paddingLeft: 17,
    alignSelf: 'flex-start',
    color: '#000'
  },
  remainingText: {
    paddingTop: 5,
    paddingLeft: 17,
    alignSelf: 'flex-start',
    color: 'orange'
  }
});

export default MinMaxTextInput;
