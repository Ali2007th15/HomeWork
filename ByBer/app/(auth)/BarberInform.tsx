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
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BarberInform() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    birthDate: '',
    phoneNumber: '',
    gender: '',
    country: '',
    jobTitle: '',
    location: '',
    address: '',
  });

  const [selectedGender, setSelectedGender] = useState('');
  const [countryCode, setCountryCode] = useState('🇺🇸');


  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {

    if (!formData.name || !formData.lastName || !formData.phoneNumber || !formData.jobTitle || !formData.location || !formData.gender || !formData.address) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    Alert.alert('Success', 'Profile completed successfully!');
    console.log('Form data:', formData);
  };

  const selectGender = () => {
    Alert.alert('Select Gender', 'Choose your gender', [
      { text: 'Male', onPress: () => setSelectedGender('Male') },
      { text: 'Female', onPress: () => setSelectedGender('Female') },
      { text: 'Cancel', style: 'cancel' }
    ]);
    setFormData(prev => ({
      ...prev,
      gender: selectedGender
    }));
  };

  const selectCountry = () => {
    Alert.alert('Select Country', 'Choose your country', [
      { text: 'United States', onPress: () => setCountryCode('🇺🇸') },
      { text: 'Azerbaijan', onPress: () => setCountryCode('🇦🇿') },
      { text: 'Cancel', style: 'cancel' }
    ]);
    setFormData(prev => ({
      ...prev,
      country: countryCode
    }));
  };


  const selectProfileImage = () => {
    Alert.alert('Select Photo', 'Choose profile picture option', [
      { text: 'Camera', onPress: () => console.log('Camera selected') },
      { text: 'Gallery', onPress: () => console.log('Gallery selected') },
      { text: 'Cancel', style: 'cancel' }
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => {
          router.push("/(auth)/BarberRegister");
        }}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Barber Profilinizi Doldurun</Text>
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
            <TouchableOpacity style={styles.editButton} onPress={selectProfileImage}>
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
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.inputContainer}>
              <Ionicons name="calendar-outline" size={20} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="Doğum tarixi"
                value={formData.birthDate}
                onChangeText={(text) => handleInputChange('birthDate', text)}
                placeholderTextColor="#999"
              />
            </View>
          </View>



          <View style={styles.inputGroup}>
            <View style={styles.phoneContainer}>
              <TouchableOpacity style={styles.countryCode} onPress={selectCountry}>
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
              />
            </View>
          </View>


          <View style={styles.inputGroup}>
            <TouchableOpacity style={styles.selectContainer} onPress={selectGender}>
              <Text
                style={[
                  styles.selectLabel,
                  selectedGender ? { color: '#333' } : { color: '#999' }
                ]}
              >
                {selectedGender || 'Cins'}
              </Text>
              <View style={styles.selectRight}>
                <Text style={styles.selectValue}></Text>
                <Ionicons name="chevron-down" size={16} color="#666" />
              </View>
            </TouchableOpacity>
          </View>


          <View style={styles.inputGroup}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="İş ünvanı"
                value={formData.jobTitle}
                onChangeText={(text) => handleInputChange('jobTitle', text)}
                placeholderTextColor="#999"
              />
            </View>
          </View>


          <View style={styles.inputGroup}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Məkanın adı"
                value={formData.location}
                onChangeText={(text) => handleInputChange('location', text)}
                placeholderTextColor="#999"
              />
            </View>
          </View>


          <View style={styles.inputGroup}>
            <View style={styles.inputContainer}>
              <Ionicons name="location-outline" size={20} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="Yer"
                value={formData.address}
                onChangeText={(text) => handleInputChange('address', text)}
                placeholderTextColor="#999"
              />
            </View>
          </View>
        </View>


        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Davam et</Text>
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