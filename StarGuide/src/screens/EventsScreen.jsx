import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StarWatermark from '../components/StarWatermark';
import data from '../data/constellations.json';

export default function EventsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>CELESTIAL EVENTS</Text>
      <Text style={styles.subtitle}>Upcoming Meteor Showers & Eclipses (Offline Data)</Text>

      <FlatList
        data={data.celestialEvents}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
            <View style={styles.iconContainer}>
              <Ionicons name="calendar-outline" size={28} color="#38BDF8" />
            </View>
            <View style={styles.eventDetails}>
              <Text style={styles.eventName}>{item.eventName}</Text>
              <Text style={styles.eventDate}>Date: {item.date}</Text>
              <Text style={styles.eventDesc}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0F19', padding: 20, paddingTop: 50 },
  headerTitle: { color: '#38BDF8', fontSize: 18, fontWeight: 'bold', textAlign: 'center', letterSpacing: 1 },
  subtitle: { color: '#9CA3AF', fontSize: 12, textAlign: 'center', marginBottom: 20, marginTop: 4 },
  eventCard: { flexDirection: 'row', backgroundColor: '#1F2937', borderRadius: 12, padding: 16, marginBottom: 15, alignItems: 'center' },
  iconContainer: { marginRight: 15, backgroundColor: '#111827', padding: 12, borderRadius: 8 },
  eventDetails: { flex: 1 },
  eventName: { color: '#FFF', fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  eventDate: { color: '#818CF8', fontSize: 13, fontWeight: 'bold', marginBottom: 6 },
  eventDesc: { color: '#9CA3AF', fontSize: 12, lineHeight: 18 }
});