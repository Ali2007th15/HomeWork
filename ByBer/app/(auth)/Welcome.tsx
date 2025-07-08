import { router } from 'expo-router';
import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Welcome() {

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/(auth)/Carousel');
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);
  return (
    
    <SafeAreaView style={styles.container}>
     <StatusBar barStyle="dark-content" />
      
      <ImageBackground
        source={require('//Users/ali/Documents/My GitHub/HomeWork/ByBer/assets/foto.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.brandName}>Byber</Text>
            <Text style={styles.welcomeText}>Xoş gəldiniz 👋</Text>
            <Text style={styles.subtitle}>
              Ən yaxşı görünüşünüz üçün peşəkar xidmətlərə bir toxunuşla sahib olun!
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
  },
  overlay: {
    flex: 1,
    
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 80,
  },
  content: {
    alignItems: 'flex-start',
  },
  brandName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FF8C42',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 24,
    opacity: 0.9,
    maxWidth: '90%',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});


