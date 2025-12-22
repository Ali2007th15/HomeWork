import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';

import { router } from 'expo-router';

export default function Splash() {

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/MainLogin");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/ADY5.png')} style={styles.logo} />
      <ActivityIndicator size="large" color="#FFFFFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#153f5c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginBottom: 100,
    resizeMode: 'contain',
  },
});