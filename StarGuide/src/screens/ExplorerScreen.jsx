import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExplorerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Constellation Explorer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0B0F19' },
  title: { color: '#FFF', fontSize: 20, fontWeight: 'bold' }
});