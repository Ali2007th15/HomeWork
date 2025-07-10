import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';

import { router } from 'expo-router';

export default function Splash() {

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/Welcome");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('/Users/ali/Documents/My GitHub/HomeWork/ByBer/assets/image.png')} style={styles.logo} />
      <ActivityIndicator size="large" color="#FFFFFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5A623',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginBottom: 100,
    resizeMode: 'contain',
  },
});

