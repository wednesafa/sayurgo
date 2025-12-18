import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function ProfileScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        {/* BAR ATAS: AKUN + CART */}
        <View style={styles.headerTop}>
          <Text style={styles.account}>Akun</Text>

          <TouchableOpacity
            onPress={() => router.push('/cart')}
            style={styles.headerIcon}
          >
            <Text style={styles.headerIconText}>🛒</Text>
          </TouchableOpacity>
        </View>

        {/* INFO USER */}
        {/* INFO USER + ARROW */}
        <View style={styles.userInfoRow}>

          <View style={styles.userInfo}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png' }}
              style={styles.avatar}
            />

            <View>
              <Text style={styles.name}>Anisa Nur</Text>
              <Text style={styles.phone}>09867869340</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              try {
                console.log('attempting router.push with pathname /detailprofile');
                router.push({ pathname: '/detailprofile' });
              } catch (err) {
                console.warn('router.push failed', err);
                // Fallback: navigate by setting window.location (web only)
                if (typeof window !== 'undefined') {
                  console.log('fallback: window.location -> /detailprofile');
                  window.location.href = '/detailprofile';
                }
              }
            }}
          >
            <Ionicons name="chevron-forward" size={26} color="#fff" />
          </TouchableOpacity>
        </View>

      </View>


      {/* SECTION */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Produk Favorit</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  header: {
    backgroundColor: '#2E7D32',
    padding: 20,
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 9,
  },

  account: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
    marginTop: -15,
  },
  headerIcon: {

    marginTop: -10,
  },


  headerIconText: {
    fontSize: 22,
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  userLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: '#FFF',
  },

  name: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '500',
  },

  phone: {
    color: '#E0E0E0',
    fontSize: 12,
  },

  section: {
    backgroundColor: '#FFF',
    margin: 16,
    padding: 14,
    borderRadius: 12,
  },

  sectionTitle: {
    fontWeight: '600',
    fontSize: 14,
  },
});

