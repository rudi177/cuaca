// components/WeatherCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WeatherCard({ city, temp, desc }: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.temp}>{temp}°C</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  city: { fontSize: 18, fontWeight: 'bold' },
  temp: { fontSize: 16 },
  desc: { color: '#555' },
});
