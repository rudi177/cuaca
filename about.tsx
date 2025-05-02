// app/about.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi</Text>
      <Text>
        InfoCuaca adalah aplikasi sederhana untuk menampilkan informasi cuaca menggunakan API
        dari OpenWeatherMap. Dibuat dengan Expo & React Native.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});
