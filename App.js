import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contador from './ContadorHook'
import LabelCronometro from './LabelCronometro'

export default function App() {
  return (
    <View style={styles.container}>
      <LabelCronometro name="Cronometro"/>
      <Contador />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
