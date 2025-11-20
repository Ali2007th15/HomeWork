import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';


export default function ForgotPass({  }) {
  const [email, setEmail] = useState('dan***in@yourdomain.com');

  const handleContinue = () => {
    Alert.alert(
      'Kod göndərildi',
      'E-mail ünvanınıza təsdiq kodu göndərildi',
      [{ text: 'OK', onPress: () => console.log('Code sent') }]
    );
  };

 

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
   
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Şifrəni Yenilə</Text>
      </View>

      
      <View style={styles.content}>
    
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/foto6.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

  
        <Text style={styles.description}>
          Parolunuzu sıfırlamaq üçün qeyd etdiyiniz email ünvanına kod göndəriləcək
        </Text>

        
        <View style={styles.emailContainer}>
          <View style={styles.emailIcon}>
            <Ionicons name="mail" size={24} color="#FF8C00" />
          </View>
          <View style={styles.emailInfo}>
            <Text style={styles.emailLabel}>Email vasitəsi ilə</Text>
            <Text style={styles.emailAddress}>{email}</Text>
          </View>
        </View>
      </View>

     
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.continueButton} onPress={() => {
                        router.push("/(auth)/Otp"); }}>
          <Text style={styles.continueButtonText}>Davam et</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
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
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  image: {
    width: 200,
    height: 200,
  },
  description: {
    fontSize: 25,
    lineHeight: 24, 
    textAlign: 'left',
    marginBottom: 40,
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 30,
    borderRadius: 12,
    marginBottom: 40,
  },
  emailIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFE0B2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  emailInfo: {
    flex: 1,
  },
  emailLabel: {
    
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  emailAddress: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  continueButton: {
    backgroundColor: '#FF8C00',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});