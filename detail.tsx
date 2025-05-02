// app/detail.tsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { getCurrentWeather } from '../services/weather';

export default function Detail() {
  const { city } = useSearchParams();
  const [detail, setDetail] = useState<any>(null);

  useEffect(() => {
    if (city) {
      getCurrentWeather(city as string).then(setDetail);
    }
  }, [city]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Cuaca: {city}</Text>
      {detail && (
        <>
          <Text>Tekanan: {detail.main.pressure} hPa</Text>
          <Text>Kelembapan: {detail.main.humidity}%</Text>
          <Text>Angin: {detail.wind.speed} m/s</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});
