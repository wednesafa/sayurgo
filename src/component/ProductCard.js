import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../../src/styles/ProductCardStyles';


export default function ProductCard({ item }) {
  return (
    <View style={styles.card}>

      {/* FAVORITE */}
      <TouchableOpacity style={styles.heartIcon}>
        <Text>♡</Text>
      </TouchableOpacity>

      {/* IMAGE */}
      <Image source={item.image} style={styles.image} resizeMode="contain" />

      {/* INFO */}
      <Text style={styles.name} numberOfLines={1}>{item.nama}</Text>
      <Text style={styles.weight}>{item.berat}</Text>

      <View style={styles.bottomRow}>
  <Text style={styles.price}>Rp.{item.harga}
  </Text>

  <TouchableOpacity style={styles.cartButton}>
    <Image
      source={require('../../assets/images/carticons.png')}
      style={styles.cartIcon}
    />
    <Text style={styles.cartButtonText}>tambah</Text>
  </TouchableOpacity>
</View>

    </View>
  );
}
