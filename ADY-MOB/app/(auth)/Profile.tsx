import React, { useState } from 'react';
import { router } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function PersonInform() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    birthDate: '',
    email: '',
  });


  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      Alert.alert('Xəta', 'Ad sahəsini doldurun');
      return false;
    }
    
    if (!formData.lastName.trim()) {
      Alert.alert('Xəta', 'Soyad sahəsini doldurun');
      return false;
    }

    if (!formData.email.trim()) {
      Alert.alert('Xəta', 'Email daxil edin');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert('Xəta', 'Düzgün email daxil edin');
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

   

    
  };

  const selectProfileImage = () => {
    Alert.alert('Şəkil seçin', 'Profil şəkli seçin', [
      { text: 'Kamera', onPress: () => console.log('Kamera seçildi') },
      { text: 'Qalereya', onPress: () => console.log('Qalereya seçildi') },
      { text: 'Ləğv et', style: 'cancel' }
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => {
          router.push("/(program)/Settings");
        }}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
     
        <Text style={styles.headerTitle}>Profiliniz</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImagePlaceholder}>
              <Ionicons name="person" size={60} color="#ccc" />
            </View>
            <TouchableOpacity 
              style={styles.editButton} 
              onPress={selectProfileImage}
             
            >
              <Ionicons name="pencil" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#666" style={styles.inputIcon} />
              <Text
                style={styles.textInput}
                
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#666" style={styles.inputIcon} />
              <Text
                style={styles.textInput}
               
              />
            </View>
          </View>

          

          <View style={styles.inputGroup}>
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color="#666" style={styles.inputIcon} />
              <Text
                style={styles.textInput}
                
                
              />
            </View>
          </View>
        </View>

        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 5, paddingVertical: 15,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1, borderBottomColor: '#e9ecef',
  },
   backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: { fontSize: 20, fontWeight: '600', color: '#333' },
  scrollView: { flex: 1 },
  scrollContent: { paddingBottom: 30 },
  profileSection: { alignItems: 'center', paddingVertical: 30 },
  profileImageContainer: { position: 'relative' },
  profileImagePlaceholder: {
    width: 150, height: 150, borderRadius: 75,
    backgroundColor: '#e9ecef', alignItems: 'center', justifyContent: 'center',
  },
  editButton: {
    position: 'absolute', bottom: 0, right: 0,
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: '#153f5c', alignItems: 'center', justifyContent: 'center',
  },
  formContainer: { marginTop: 20, paddingHorizontal: 20 },
  inputGroup: { marginBottom: 30 },
  inputContainer: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: 'white', borderRadius: 12,
    paddingHorizontal: 20, paddingVertical: 20,
    borderWidth: 1, borderColor: '#e9ecef',
  },
  inputIcon: { marginRight: 10 },
  textInput: { flex: 1, fontSize: 16, color: '#333' },
  
  
});
