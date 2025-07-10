import { router } from 'expo-router';
import React from 'react';
import { useEffect } from 'react';
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

export default function Welcome () {

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/(auth)/Carousel');
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <ImageBackground
        source={require('/Users/ali/Documents/My GitHub/HomeWork/ByBer/assets/foto9.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.statusBarSpace} />

          <View style={styles.content}>
            <Text style={styles.brandName}>Byber</Text>

            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Xoş gəldiniz </Text>
              <Text style={styles.waveEmoji}>👋</Text>
            </View>

            <Text style={styles.subtitle}>
              Ən yaxşı görünüşünüz üçün peşəkar{'\n'}xidmətlərə bir toxunuşla sahib olun!
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  statusBarSpace: {
    height: 50,
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 60,
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  brandName: {
    fontSize: 80,
    fontWeight: '800',
    color: '#FF9500',
    letterSpacing: -1,

  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 50,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  waveEmoji: {
    fontSize: 50,
    marginLeft: 4,
  },
  subtitle: {
    fontSize: 21,
    color: '#FFFFFF',
    lineHeight: 28,
    opacity: 0.95,
    fontWeight: '400',
  },
});


