import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import StarWatermark from '../components/StarWatermark';
import { Ionicons } from '@expo/vector-icons';

export default function DetailScreen({ route, navigation }) {
  const { constellation } = route.params;

  return (
    <View style={styles.mainContainer}>
      
      <StarWatermark />

      <ScrollView contentContainerStyle={styles.scrollContent} style={styles.scrollView}>
        
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>

        <Text style={styles.title}>{constellation.name}</Text>
        
        <View style={styles.badgeContainer}>
          <Text style={styles.badge}>Hemisphere: {constellation.hemisphere}</Text>
          <Text style={styles.badge}>Best Season: {constellation.bestSeason}</Text>
        </View>

        {/* Mythology Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>MYTHOLOGY</Text>
          <Text style={styles.sectionText}>{constellation.mythology}</Text>
        </View>

        {/* Main Stars Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>KEY STARS</Text>
          {constellation.mainStars.map((star, index) => (
            <Text key={index} style={styles.starItem}>• {star}</Text>
          ))}
        </View>

        {/* How to Find Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>HOW TO FIND</Text>
          <Text style={styles.sectionText}>{constellation.skyLocation}</Text>
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
  backButton: { marginTop: 40, marginBottom: 10 },
  title: { color: '#38BDF8', fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  badgeContainer: { flexDirection: 'row', marginBottom: 20 },
  badge: { backgroundColor: '#1F2937', color: '#9CA3AF', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 6, fontSize: 12, marginRight: 10 },
  sectionCard: { backgroundColor: '#1F2937', borderRadius: 10, padding: 16, marginBottom: 15 },
  sectionTitle: { color: '#818CF8', fontSize: 14, fontWeight: 'bold', marginBottom: 8, letterSpacing: 1 },
  sectionText: { color: '#FFF', fontSize: 15, lineHeight: 22 },
  starItem: { color: '#FFF', fontSize: 15, marginTop: 4 }
});