import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MinMaxTextInput from './components/MinMaxTextInput';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 50 }} />
      <MinMaxTextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});
