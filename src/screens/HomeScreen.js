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
import styles from '../../src/styles/homeStyles';

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const { width } = Dimensions.get('window');
  const router = useRouter();

  const categories = [
    { id: 1, name: 'Sayuran', icon: 'https://cdn-icons-png.flaticon.com/512/706/706164.png' },
    { id: 2, name: 'Buah', icon: 'https://cdn-icons-png.flaticon.com/512/415/415733.png' },
    { id: 3, name: 'Bumbu', icon: 'https://cdn-icons-png.flaticon.com/512/2747/2747737.png' },
  ];

  const products = [
    {
      id: 1,
      name: 'Brokoli Segar',
      price: 'Rp5.500',
      weight: '1 Kg',
      image: require('../../assets/images/brokoli.png'),
      rating: 4.5,
      isFavorite: false
    },
    {
      id: 2,
      name: 'Tomat Ceri',
      price: 'Rp8.000',
      weight: '250 g',
      image: require('../../assets/images/Tomat.png'),
      rating: 4.8,
      isFavorite: false
    },
    {
      id: 3,
      name: 'Daging Sapi',
      price: 'Rp4.500',
      weight: '1 pcs',
      image: require('../../assets/images/sapi.png'),
      rating: 4.2,
      isFavorite: false
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* ===== Top Search Bar (White) ===== */}
      <View style={styles.topSearchBar}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari produk disini..."
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
          />
          <Text style={styles.searchIconText}></Text>
        </View>

        <TouchableOpacity onPress={() => router.push('/cart')} style={styles.headerIcon}>
          <Ionicons name="cart-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>


      </View>

      {/* ===== Hero Image (Full Width) ===== */}
      <View style={styles.heroSection}>
        <Image
          source={require('../../assets/images/pedagang.png')}
          style={styles.heroImage}
          resizeMode="cover"
        />
      </View>

      {/* ===== Category Section ===== */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          Cari Berdasarkan <Text style={styles.boldGreen}>Kategori</Text> ...
        </Text>

        <View style={styles.categoryRow}>
          {categories.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.categoryBox}
              onPress={() => {
                const key = item.name.toLowerCase();
                if (key === 'sayuran') router.push('/sayur');
                else if (key === 'buah') router.push('/buah');
                else if (key === 'bumbu') router.push('/bumbu');
              }}
            >
              <Image source={{ uri: item.icon }} style={styles.categoryImage} />
              <Text style={styles.categoryLabel}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* ===== Product Section ===== */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          Produk <Text style={styles.boldGreen}>Populer</Text>...
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products
            .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
            .map((item) => (
              <View key={item.id} style={styles.productBox}>

                {/* IMAGE */}
                <View style={styles.productImageContainer}>
                  <Image
                    source={item.image}
                    style={styles.productImage}
                    resizeMode="contain"
                  />

                  <TouchableOpacity style={styles.heartIcon}>
                    <Text style={styles.heartIconText}>♡</Text>
                  </TouchableOpacity>

                  <View style={styles.ratingBox}>
                    <Text style={styles.ratingText}>⭐ {item.rating}</Text>
                  </View>
                </View>

                {/* INFO */}
                <View style={styles.productInfo}>
                  <Text style={styles.productName} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text style={styles.productWeight}>
                    {item.weight}
                  </Text>
                </View>

                {/* PRICE + ADD */}
                <View style={styles.priceRow}>
                  <Text style={styles.productPrice}>
                    {item.price}
                  </Text>

                  <TouchableOpacity style={styles.cartButton}>
                    <Image
                      source={require('../../assets/images/carticons.png')} // ⬅️ ganti sesuai path icon kamu
                      style={styles.cartIcon}
                    />
                    <Text style={styles.cartButtonText}>tambah</Text>
                  </TouchableOpacity>

                </View>

              </View>
            ))}
        </ScrollView>
      </View>


      <View style={styles.section}>
        <View style={styles.promoRow}>

          {/* ===== BANNER 1 (LEBAR) ===== */}
          <View style={styles.promoBanner}>
            <View style={styles.promoLeftContent}>
              <View style={styles.promoTag}>
                <Text style={styles.promoTagText}>PROMO 15%</Text>
              </View>

              <Text style={styles.promoTitle}>
                Buah Segar,{'\n'}Berkualitas Tinggi
              </Text>

              <Text style={styles.promoSubtitle}>
                Dapatkan buah berkualitas, tinggi vitamin dari tangan pertama.
              </Text>

              <TouchableOpacity style={styles.promoBtn}>
                <Text style={styles.promoBtnText}>Belanja Sekarang→</Text>
              </TouchableOpacity>
            </View>

            <Image
              source={require('../../assets/images/buahpot.png')}
              style={styles.promoRightImage}
            />
          </View>

          {/* ===== BANNER 2 (KECIL) ===== */}
          <View style={styles.promoBannerYellow}>

            {/* GAMBAR DI ATAS */}
            <Image
              source={require('../../assets/images/ojek.png')}
              style={styles.promoImageTop}
            />

            {/* KONTEN DI BAWAH */}
            <View>
              <Text style={styles.promoTitleYellow}>
                Segarnya,{'\n'}sampai rumah
              </Text>

              <Text style={styles.promoSubtitleYellow}>
                Gratis ongkir 10km!
              </Text>

              <TouchableOpacity style={styles.promoBtnYellow}>
                <Text style={styles.promoBtnTextYellow}>
                  Pesan Sekarang→
                </Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </View>


      <View style={{ height: 40 }} />
    </ScrollView>
  );
}