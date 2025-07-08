import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const { width, height } = Dimensions.get('window');

export default function Success() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Yeni Şifrə Əlavə Et</Text>
      </View>
     
      <View style={styles.mainContent}>
        
        <View style={styles.successCard}>
            
          <View style={styles.mainCircle}>
            <View style={styles.checkmarkContainer}>
              <Ionicons name="checkmark" size={40} color="#FF8C00" />
            </View>
          </View>

          
          <Text style={styles.successTitle}>Təbriklər!</Text>
          <Text style={styles.successSubtitle}>
            Hesabınız istifadəyə hazırdır. Bir neçə saniyədən sonra əsas səhifəyə yönləndiriləcəksiniz..
          </Text>

         
          <View style={styles.loadingContainer}>
            <View style={[styles.loadingDot, styles.loadingDot1]} />
            <View style={[styles.loadingDot, styles.loadingDot2]} />
            <View style={[styles.loadingDot, styles.loadingDot3]} />
            <View style={[styles.loadingDot, styles.loadingDot4]} />
            <View style={[styles.loadingDot, styles.loadingDot5]} />
          </View>
        </View>

        
        <View style={styles.bottomSection}>
          

          <TouchableOpacity style={styles.continueButton} onPress={() => {
           
            router.push("/(auth)/MainLogin"); 
          }}>
            <Text style={styles.continueButtonText}>Davam et</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  successCard: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 40,
    alignItems: 'center',
    width: width * 0.9,
    minHeight: height * 0.6,
    justifyContent: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  decorativeDotsTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
  },
  decorativeDotsBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
  },
  dot: {
    backgroundColor: '#FF8C00',
    borderRadius: 50,
    position: 'absolute',
    opacity: 0.7,
  },
  dotSmall: {
    width: 12,
    height: 12,
  },
  dotMedium: {
    width: 8,
    height: 8,
  },
  dotTiny: {
    width: 6,
    height: 6,
  },
  mainCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FF8C00',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  checkmarkContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FF8C00',
    marginBottom: 16,
    textAlign: 'center',
  },
  successSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 20,
  },
  loadingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF8C00',
  },
  loadingDot1: {
    opacity: 1,
  },
  loadingDot2: {
    opacity: 0.8,
  },
  loadingDot3: {
    opacity: 0.6,
  },
  loadingDot4: {
    opacity: 0.4,
  },
  loadingDot5: {
    opacity: 0.2,
  },
  bottomSection: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  checkmarkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
    paddingLeft: 10,
  },
  smallCheckmark: {
    width: 24,
    height: 24,
    borderRadius: 6,
    backgroundColor: '#FFF3E0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkmarkText: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },
  continueButton: {
    backgroundColor: '#FF8C00',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#FF8C00',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});