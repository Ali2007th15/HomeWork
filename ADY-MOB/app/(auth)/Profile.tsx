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
import { useAuthStore } from '../../stores/AuthStore';

export default function EditProfile() {
  const { user, updateProfile, isLoading } = useAuthStore();
  const [editData, setEditData] = useState({
    name: user?.name || '',
    lastName: user?.lastName || '',
    birthDate: user?.birthDate || '',
    phoneNumber: user?.phoneNumber || '',
    country: user?.country || '🇺🇸',
    gender: user?.gender || '',
  });

  const handleSaveProfile = async () => {
    const result = await updateProfile(editData);
    
    if (result.success) {
      Alert.alert(
        'Uğurlu', 
        'Profil uğurla yeniləndi!',
        [
          {
            text: 'Tamam',
            onPress: () => router.back(),
          },
        ]
      );
    } else {
      Alert.alert('Xəta', result.message || 'Profil yenilənməsi zamanı xəta baş verdi');
    }
  };

  const handleInputChange = (field: keyof typeof editData, value: string) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const selectGender = () => {
    Alert.alert('Cinsi seçin', 'Cinsiyyətinizi seçin', [
      { 
        text: 'Kişi', 
        onPress: () => handleInputChange('gender', 'Kişi')
      },
      { 
        text: 'Qadın', 
        onPress: () => handleInputChange('gender', 'Qadın')
      },
      { text: 'Ləğv et', style: 'cancel' }
    ]);
  };

  const selectCountry = () => {
    Alert.alert('Ölkə seçin', 'Ölkənizi seçin', [
      { 
        text: 'Amerika Birləşmiş Ştatları', 
        onPress: () => handleInputChange('country', '🇺🇸')
      },
      { 
        text: 'Azərbaycan', 
        onPress: () => handleInputChange('country', '🇦🇿')
      },
      { 
        text: 'Türkiyə', 
        onPress: () => handleInputChange('country', '🇹🇷')
      },
      { text: 'Ləğv et', style: 'cancel' }
    ]);
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={handleGoBack}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profildə Düzəliş Et</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImagePlaceholder}>
              <Ionicons name="person" size={60} color="#ccc" />
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="pencil" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <View style={styles.inputRow}>
              <Ionicons name="person-outline" size={20} color="#999" />
              <TextInput
                style={styles.textInput}
                placeholder="Ad"
                value={editData.name}
                onChangeText={(text) => handleInputChange('name', text)}
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.inputRow}>
              <Ionicons name="person-outline" size={20} color="#999" />
              <TextInput
                style={styles.textInput}
                placeholder="Soyad"
                value={editData.lastName}
                onChangeText={(text) => handleInputChange('lastName', text)}
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.inputRow}>
              <Ionicons name="calendar-outline" size={20} color="#999" />
              <TextInput
                style={styles.textInput}
                placeholder="Doğum tarixi"
                value={editData.birthDate}
                onChangeText={(text) => handleInputChange('birthDate', text)}
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.inputRow}>
              <Ionicons name="mail-outline" size={20} color="#999" />
              <Text style={styles.emailText}>{user?.email}</Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.inputRow}>
              
              <TouchableOpacity style={styles.countrySelector} onPress={selectCountry}>
                <Text style={styles.countryFlag}>{editData.country}</Text>
                <Ionicons name="chevron-down" size={16} color="#999" />
              </TouchableOpacity>
              <TextInput
                style={styles.phoneInput}
                placeholder="Telefon nömrəsi"
                value={editData.phoneNumber}
                onChangeText={(text) => handleInputChange('phoneNumber', text)}
                placeholderTextColor="#999"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <TouchableOpacity style={styles.inputGroup} onPress={selectGender}>
            <View style={styles.inputRow}>
              
              <Text style={[styles.genderText, !editData.gender && styles.placeholderText]}>
                {editData.gender || 'Cins'}
              </Text>
              <Ionicons name="chevron-down" size={16} color="#999" />
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.saveButton} 
          onPress={handleSaveProfile}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.saveButtonText}>Yadda saxla</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#fff',
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
    paddingTop: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  emailText: {
    flex: 1,
    fontSize: 16,
    color: '#666',
    marginLeft: 15,
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    
    marginRight: 10,
  },
  countryFlag: {
    fontSize: 20,
    marginRight: 5,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  genderText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    
  },
  placeholderText: {
    color: '#999',
  },
  saveButton: {
    backgroundColor: '#ff9500',
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 25,
    paddingVertical: 18,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});