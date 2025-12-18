import React, { useState } from 'react';
import {
  FlatList,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import ProductCard from '../component/ProductCard';
import { BUAH_DATA } from '../data/BuahData';
import styles from '../../src/styles/homeStyles'; // ⬅️ PENTING
export default function BuahScreen() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FAFAFA' }} edges={['top']}>

      {/* ===== TOP SEARCH BAR (SAMA KAYA HOME) ===== */}
      <View style={styles.topSearchBar}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari produk disini..."
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
          />
        
        </View>

        <TouchableOpacity
          onPress={() => router.push('/cart')}
          style={styles.headerIcon}
        >
          <Text style={styles.headerIconText}>🛒</Text>
        </TouchableOpacity>

      
      </View>

      {/* TITLE */}
      <Text style={{
        fontSize: 18,
        fontWeight: '700',
        color: '#555',
        marginTop: 16,
        marginLeft: 16,
      }}>
        Kategori <Text style={{ color: '#2E7D32' }}>Buah</Text> ...
      </Text>

      {/* PRODUCT GRID */}
      <FlatList
        contentContainerStyle={{ padding: 15 }}
        data={BUAH_DATA.filter(item =>
          item.nama.toLowerCase().includes(search.toLowerCase())
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => <ProductCard item={item} />}
        showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>
  );
}
