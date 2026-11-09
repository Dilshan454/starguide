import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import data from '../data/constellations.json';

export default function ExplorerScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHemisphere, setSelectedHemisphere] = useState('All');
  const [selectedSeason, setSelectedSeason] = useState('All');

  
  const filteredData = data.constellations.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesHemisphere = selectedHemisphere === 'All' || item.hemisphere.toLowerCase().includes(selectedHemisphere.toLowerCase());
    const matchesSeason = selectedSeason === 'All' || item.bestSeason === selectedSeason;
    return matchesSearch && matchesHemisphere && matchesSeason;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>EXPLORER</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#9CA3AF" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search Constellations..."
          placeholderTextColor="#9CA3AF"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

     
      <View style={styles.filterRow}>
        {['All', 'Northern', 'Southern'].map(hemis => (
          <TouchableOpacity
            key={hemis}
            style={[styles.filterButton, selectedHemisphere === hemis && styles.activeFilter]}
            onPress={() => setSelectedHemisphere(hemis)}
          >
            <Text style={[styles.filterText, selectedHemisphere === hemis && styles.activeFilterText]}>
              {hemis === 'All' ? 'All Hemispheres' : `${hemis} Hemisphere`}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Season Filters */}
      <View style={styles.filterRow}>
        {['All', 'Winter', 'Spring', 'Summer', 'Autumn'].map(season => (
          <TouchableOpacity
            key={season}
            style={[styles.seasonButton, selectedSeason === season && styles.activeSeasonFilter]}
            onPress={() => setSelectedSeason(season)}
          >
            <Text style={[styles.filterText, selectedSeason === season && styles.activeSeasonFilterText]}>
              {season}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* List */}
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemCard}
            onPress={() => navigation.navigate('Detail', { constellation: item })}
          >
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemSub}>Hemisphere: {item.hemisphere}</Text>
              <Text style={styles.itemSub}>Best Season: {item.bestSeason}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0F19', padding: 20, paddingTop: 50 },
  headerTitle: { color: '#38BDF8', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, letterSpacing: 1 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1F2937', borderRadius: 8, paddingHorizontal: 12, marginBottom: 12 },
  searchIcon: { marginRight: 8 },
  input: { flex: 1, height: 45, color: '#FFF', fontSize: 16 },
  filterRow: { flexDirection: 'row', marginBottom: 10, flexWrap: 'wrap' },
  filterButton: { paddingVertical: 6, paddingHorizontal: 10, backgroundColor: '#1F2937', borderRadius: 15, marginRight: 8, marginBottom: 6 },
  activeFilter: { backgroundColor: '#38BDF8' },
  seasonButton: { paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#1F2937', borderRadius: 15, marginRight: 6, marginBottom: 10 },
  activeSeasonFilter: { backgroundColor: '#818CF8' },
  filterText: { color: '#9CA3AF', fontSize: 11 },
  activeFilterText: { color: '#0B0F19', fontWeight: 'bold' },
  activeSeasonFilterText: { color: '#FFF', fontWeight: 'bold' },
  itemCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1F2937', padding: 16, borderRadius: 10, marginBottom: 12 },
  itemName: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  itemSub: { color: '#9CA3AF', fontSize: 12 }
});