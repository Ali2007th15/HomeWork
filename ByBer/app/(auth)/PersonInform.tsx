import React, { useState, useEffect } from 'react';
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
import { useAuthStore } from '../../stores/AuthStore';

export default function PersonInform() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    birthDate: '',
    phoneNumber: '',
    country: '',
    gender: '',
  });

  const [selectedGender, setSelectedGender] = useState('');
  const [countryCode, setCountryCode] = useState('🇺🇸');

  const { updateProfile, isLoading, user, isAuthenticated } = useAuthStore();

  

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
    
    if (!formData.phoneNumber.trim()) {
      Alert.alert('Xəta', 'Telefon nömrəsini daxil edin');
      return false;
    }
    
    if (!selectedGender) {
      Alert.alert('Xəta', 'Cinsi seçin');
      return false;
    }

 
    const phoneRegex = /^\+?[\d\s-()]{10,}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      Alert.alert('Xəta', 'Düzgün telefon nömrəsi daxil edin');
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    const profileData = {
      ...formData,
      gender: selectedGender,
      country: countryCode,
    };

    const result = await updateProfile(profileData);
    
    if (result.success) {
      Alert.alert('Uğurlu', 'Profil uğurla yaradildi!', [
        {
          text: 'OK',
          onPress: () => router.push("/(program)/Home")
        }
      ]);
    } else {
      Alert.alert('Xəta', result.message || 'Profil yenilənməsi zamanı xəta baş verdi');
    }
  };

  const selectGender = () => {
    Alert.alert('Cinsi seçin', 'Cinsiyyətinizi seçin', [
      { 
        text: 'Kişi', 
        onPress: () => {
          setSelectedGender('Kişi');
          setFormData(prev => ({ ...prev, gender: 'Kişi' }));
        }
      },
      { 
        text: 'Qadın', 
        onPress: () => {
          setSelectedGender('Qadın');
          setFormData(prev => ({ ...prev, gender: 'Qadın' }));
        }
      },
      { text: 'Ləğv et', style: 'cancel' }
    ]);
  };

  const selectCountry = () => {
    Alert.alert('Ölkə seçin', 'Ölkənizi seçin', [
      { 
        text: 'Amerika Birləşmiş Ştatları', 
        onPress: () => {
          setCountryCode('🇺🇸');
          setFormData(prev => ({ ...prev, country: '🇺🇸' }));
        }
      },
      { 
        text: 'Azərbaycan', 
        onPress: () => {
          setCountryCode('🇦🇿');
          setFormData(prev => ({ ...prev, country: '🇦🇿' }));
        }
      },
      { 
        text: 'Türkiyə', 
        onPress: () => {
          setCountryCode('🇹🇷');
          setFormData(prev => ({ ...prev, country: '🇹🇷' }));
        }
      },
      { text: 'Ləğv et', style: 'cancel' }
    ]);
  };

  const selectProfileImage = () => {
    Alert.alert('Şəkil seçin', 'Profil şəkli seçin', [
      { text: 'Kamera', onPress: () => console.log('Kamera seçildi') },
      { text: 'Qalereya', onPress: () => console.log('Qalereya seçildi') },
      { text: 'Ləğv et', style: 'cancel' }
    ]);
  };

  if (!isAuthenticated) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Yüklənir...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
       
        <Text style={styles.headerTitle}>Profilinizi Doldurun</Text>
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
              disabled={isLoading}
            >
              <Ionicons name="pencil" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="Ad"
                value={formData.name}
                onChangeText={(text) => handleInputChange('name', text)}
                placeholderTextColor="#999"
                editable={!isLoading}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="Soyad"
                value={formData.lastName}
                onChangeText={(text) => handleInputChange('lastName', text)}
                placeholderTextColor="#999"
                editable={!isLoading}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.inputContainer}>
              <Ionicons name="calendar-outline" size={20} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="Doğum tarixi (YYYY-MM-DD)"
                value={formData.birthDate}
                onChangeText={(text) => handleInputChange('birthDate', text)}
                placeholderTextColor="#999"
                editable={!isLoading}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.phoneContainer}>
              <TouchableOpacity 
                style={styles.countryCode} 
                onPress={selectCountry}
                disabled={isLoading}
              >
                <Text style={styles.selectValue}>
                  {countryCode}
                </Text>
                <Ionicons name="chevron-down" size={16} color="#666" />
              </TouchableOpacity>
              <TextInput
                style={styles.phoneInput}
                placeholder="Telefon nömrəsi"
                value={formData.phoneNumber}
                onChangeText={(text) => handleInputChange('phoneNumber', text)}
                placeholderTextColor="#999"
                keyboardType="phone-pad"
                editable={!isLoading}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <TouchableOpacity 
              style={styles.selectContainer} 
              onPress={selectGender}
              disabled={isLoading}
            >
              <Text
                style={[
                  styles.selectLabel,
                  selectedGender ? { color: '#333' } : { color: '#999' }
                ]}
              >
                {selectedGender || 'Cins'}
              </Text>
              <View style={styles.selectRight}>
                <Ionicons name="chevron-down" size={16} color="#666" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity 
          style={[styles.submitButton]} 
          onPress={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.submitButtonText}>Davam et</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e9ecef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ff9500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  phoneContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e9ecef',
    overflow: 'hidden',
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRightWidth: 1,
    borderRightColor: '#e9ecef',
  },
  flag: {
    fontSize: 20,
    marginRight: 5,
  },
  phoneInput: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 16,
    color: '#333',
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },

   loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  selectLabel: {
    fontSize: 16,
    color: '#999',
  },
  selectRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectValue: {
    fontSize: 16,
    color: '#333',
    marginRight: 5,
  },
  submitButton: {
    backgroundColor: '#ff9500',
    marginHorizontal: 20,
    borderRadius: 25,
    paddingVertical: 18,
    alignItems: 'center',
    shadowColor: '#ff6b35',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});