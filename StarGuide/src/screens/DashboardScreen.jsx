import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StarWatermark from '../components/StarWatermark';
import data from '../data/constellations.json';

export default function DashboardScreen() {
  const visibleTonight = data.constellations.filter(item => item.visibleTonight);

  return (
    <View style={styles.mainContainer}>
      
      <StarWatermark />

     
      <ScrollView contentContainerStyle={styles.scrollContent} style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>STARGUIDE DASHBOARD</Text>
        </View>

        {/* Visible Tonight Card */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>VISIBLE TONIGHT:</Text>
          <Text style={styles.visibleText}>
            {visibleTonight.map(item => item.name).join(', ')}
          </Text>
          <View style={styles.skyVisualBox}>
            <Ionicons name="planet" size={60} color="#38BDF8" />
            <Text style={styles.subSkyText}>Offline Constellation Field Guide</Text>
          </View>
        </View>

        {/* Featured Event Card */}
        <View style={styles.eventCard}>
          <Text style={styles.cardLabel}>FEATURED EVENT</Text>
          <Text style={styles.eventTitle}>{data.celestialEvents[0].eventName}</Text>
          <Text style={styles.eventDate}>{data.celestialEvents[0].date}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { 
    flex: 1, 
    backgroundColor: '#0B0F19' 
  },
  scrollView: { 
    flex: 1, 
    zIndex: 1  
  },
  scrollContent: { 
    padding: 20,
    paddingBottom: 40 
  },
  header: { marginTop: 50, marginBottom: 20, alignItems: 'center' },
  headerTitle: { color: '#38BDF8', fontSize: 18, fontWeight: 'bold', letterSpacing: 1 },
  card: { backgroundColor: '#1F2937', borderRadius: 12, padding: 20, marginBottom: 20 },
  cardLabel: { color: '#9CA3AF', fontSize: 12, fontWeight: 'bold', marginBottom: 5 },
  visibleText: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  skyVisualBox: { height: 150, backgroundColor: '#111827', borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  subSkyText: { color: '#6B7280', fontSize: 12, marginTop: 10 },
  eventCard: { backgroundColor: '#1E1B4B', borderRadius: 12, padding: 20, borderLeftWidth: 4, borderLeftColor: '#818CF8' },
  eventTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  eventDate: { color: '#C7D2FE', fontSize: 14, marginTop: 2 }
});