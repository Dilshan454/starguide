import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../data/constellations.json';

export default function LogScreen() {
  const [logs, setLogs] = useState({});
  const [noteInput, setNoteInput] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  
  useEffect(() => {
    loadLogs();
  }, []);

  const loadLogs = async () => {
    try {
      const savedLogs = await AsyncStorage.getItem('@stargazing_logs');
      if (savedLogs) {
        setLogs(JSON.parse(savedLogs));
      }
    } catch (e) {
      console.error('Failed to load logs', e);
    }
  };

  const toggleSeen = async (id) => {
    const updatedLogs = {
      ...logs,
      [id]: {
        ...logs[id],
        seen: !logs[id]?.seen,
        note: logs[id]?.note || ''
      }
    };
    setLogs(updatedLogs);
    await AsyncStorage.setItem('@stargazing_logs', JSON.stringify(updatedLogs));
  };

  const saveNote = async (id) => {
    const updatedLogs = {
      ...logs,
      [id]: {
        ...logs[id],
        note: noteInput
      }
    };
    setLogs(updatedLogs);
    await AsyncStorage.setItem('@stargazing_logs', JSON.stringify(updatedLogs));
    setNoteInput('');
    setSelectedId(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>MY STARGAZING LOG</Text>
      <Text style={styles.subtitle}>Check-off and record your observations (Offline Storage)</Text>

      <FlatList
        data={data.constellations}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const isSeen = logs[item.id]?.seen || false;
          const currentNote = logs[item.id]?.note || '';
          const isEditing = selectedId === item.id;

          return (
            <View style={styles.logCard}>
              <View style={styles.cardHeader}>
                <TouchableOpacity style={styles.checkboxRow} onPress={() => toggleSeen(item.id)}>
                  <Ionicons 
                    name={isSeen ? "checkbox" : "square-outline"} 
                    size={24} 
                    color={isSeen ? "#38BDF8" : "#9CA3AF"} 
                  />
                  <Text style={[styles.itemName, isSeen && styles.seenText]}>{item.name}</Text>
                </TouchableOpacity>
              </View>

              {isSeen && (
                <View style={styles.noteSection}>
                  <Text style={styles.noteDisplay}>Note: {currentNote || 'No notes added yet.'}</Text>
                  
                  {isEditing ? (
                    <View style={styles.editBox}>
                      <TextInput
                        style={styles.input}
                        placeholder="Add observation note..."
                        placeholderTextColor="#9CA3AF"
                        value={noteInput}
                        onChangeText={setNoteInput}
                      />
                      <TouchableOpacity style={styles.saveButton} onPress={() => saveNote(item.id)}>
                        <Text style={styles.saveButtonText}>Save</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <TouchableOpacity onPress={() => { setSelectedId(item.id); setNoteInput(currentNote); }}>
                      <Text style={styles.addNoteText}>{currentNote ? 'Edit Note' : '+ Add Notes'}</Text>
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0F19', padding: 20, paddingTop: 50 },
  headerTitle: { color: '#38BDF8', fontSize: 18, fontWeight: 'bold', textAlign: 'center', letterSpacing: 1 },
  subtitle: { color: '#9CA3AF', fontSize: 12, textAlign: 'center', marginBottom: 20, marginTop: 4 },
  logCard: { backgroundColor: '#1F2937', borderRadius: 12, padding: 16, marginBottom: 12 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  checkboxRow: { flexDirection: 'row', alignItems: 'center' },
  itemName: { color: '#FFF', fontSize: 16, fontWeight: 'bold', marginLeft: 10 },
  seenText: { textDecorationLine: 'line-through', color: '#9CA3AF' },
  noteSection: { marginTop: 12, borderTopWidth: 1, borderTopColor: '#374151', paddingTop: 10 },
  noteDisplay: { color: '#D1D5DB', fontSize: 13, marginBottom: 6 },
  addNoteText: { color: '#38BDF8', fontSize: 12, fontWeight: 'bold' },
  editBox: { flexDirection: 'row', marginTop: 5 },
  input: { flex: 1, backgroundColor: '#111827', color: '#FFF', paddingHorizontal: 10, height: 35, borderRadius: 6, fontSize: 13 },
  saveButton: { backgroundColor: '#38BDF8', justifyContent: 'center', paddingHorizontal: 12, borderRadius: 6, marginLeft: 8 },
  saveButtonText: { color: '#0B0F19', fontWeight: 'bold', fontSize: 12 }
});