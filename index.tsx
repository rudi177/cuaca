// app/index.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { getCurrentWeather } from '../services/weather';
import Header from '../components/Header';
import { useRouter } from 'expo-router';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);
  const router = useRouter();

  const fetchWeather = async () => {
    try {
      const data = await getCurrentWeather(city);
      setWeather(data);
    } catch (e) {
      alert('Gagal mengambil data cuaca');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <TextInput
        placeholder="Masukkan nama kota"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <Button title="Cari Cuaca" onPress={fetchWeather} />

      {weather && (
        <View style={styles.result}>
          <Text style={styles.city}>{weather.name}</Text>
          <Text>{weather.weather[0].description}</Text>
          <Text>{weather.main.temp}°C</Text>
          <Text onPress={() => router.push(`/detail?city=${city}`)} style={styles.link}>
            Lihat Detail
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 8 },
  result: { marginTop: 20, alignItems: 'center' },
  city: { fontSize: 22, fontWeight: 'bold' },
  link: { marginTop: 10, color: '#00AEEF', textDecorationLine: 'underline' },
});
