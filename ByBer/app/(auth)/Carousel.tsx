import React from 'react';
import { router } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Carousel() {
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          }}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.imageOverlay} />
        </ImageBackground>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.mainText}>
          Bərbər və salonları əlinizin altında tapın
        </Text>
        
        <View style={styles.paginationContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={() => {
            router.push("/(auth)/Carousel2");
          }}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    flex: 0.7,
    width: width,
    overflow: 'hidden',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentContainer: {
    flex: 0.3,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    lineHeight: 36,
    marginBottom: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FF8C42',
    width: 24,
    borderRadius: 12,
  },
  nextButton: {
    backgroundColor: '#FF8C42',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#FF8C42',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

