import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from "react-i18next";
import { useAuth } from '../context/AuthContext';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PROFILE_IMAGE_KEY = '@profile_image';

export default function PersonInform() {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
  });
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Загружаем данные пользователя и фото при монтировании компонента
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
      });
    }
    loadProfileImage();
  }, [user]);

  const loadProfileImage = async () => {
    try {
      const savedImage = await AsyncStorage.getItem(PROFILE_IMAGE_KEY);
      if (savedImage) {
        setProfileImage(savedImage);
      }
    } catch (error) {
      console.error('Error loading profile image:', error);
    }
  };

  const saveProfileImage = async (imageUri: string) => {
    try {
      await AsyncStorage.setItem(PROFILE_IMAGE_KEY, imageUri);
      setProfileImage(imageUri);
    } catch (error) {
      console.error('Error saving profile image:', error);
      Alert.alert(
        t('error') || 'Xəta',
        t('imageSaveFailed') || 'Şəkil saxlanılmadı'
      );
    }
  };

  const pickImageFromGallery = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert(
          t('permission') || 'İcazə',
          t('galleryPermission') || 'Qalereya üçün icazə lazımdır'
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        await saveProfileImage(result.assets[0].uri);
        Alert.alert(
          t('success') || 'Uğurlu',
          t('imageUpdated') || 'Profil şəkli yeniləndi'
        );
      }
    } catch (error) {
      console.error('Error picking image from gallery:', error);
      Alert.alert(
        t('error') || 'Xəta',
        t('imagePickFailed') || 'Şəkil seçilmədi'
      );
    }
  };

  
    
  const selectProfileImage = () => {
    Alert.alert(
      t('selectImage') || 'Şəkil seçin',
      t('selectProfileImage') || 'Profil şəkli seçin',
      [
        
        { 
          text: t('gallery') || 'Qalereya', 
          onPress: pickImageFromGallery 
        },
        ...(profileImage ? [{
          text: t('remove') || 'Sil',
          style: 'destructive' as const,
          onPress: async () => {
            try {
              await AsyncStorage.removeItem(PROFILE_IMAGE_KEY);
              setProfileImage(null);
              Alert.alert(
                t('success') || 'Uğurlu',
                t('imageRemoved') || 'Profil şəkli silindi'
              );
            } catch (error) {
              console.error('Error removing image:', error);
            }
          }
        }] : []),
        { 
          text: t('cancel') || 'Ləğv et', 
          style: 'cancel' 
        }
      ]
    );
  };

  const handleLogout = () => {
    Alert.alert(
      t('logout') || 'Çıxış',
      t('logoutConfirm') || 'Çıxmaq istədiyinizdən əminsiniz?',
      [
        {
          text: t('cancel') || 'Ləğv et',
          style: 'cancel'
        },
        {
          text: t('logout') || 'Çıxış',
          style: 'destructive',
          onPress: async () => {
            const result = await logout();
            if (result.success) {
              router.replace('/(auth)/MainLogin');
            }
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.push("/(program)/Settings")}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('profile')}</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            {profileImage ? (
              <Image 
                source={{ uri: profileImage }} 
                style={styles.profileImage}
              />
            ) : (
              <View style={styles.profileImagePlaceholder}>
                <Ionicons name="person" size={60} color="#ccc" />
              </View>
            )}
            <TouchableOpacity 
              style={styles.editButton} 
              onPress={selectProfileImage}
            >
              <Ionicons name="pencil" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.formContainer}>
          {/* Name */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>{t('firstName') || 'Ad'}</Text>
            <View style={styles.inputContainerReadOnly}>
              <Ionicons name="person-outline" size={20} color="#666" style={styles.inputIcon} />
              <Text style={styles.textReadOnly}>{formData.name || '-'}</Text>
            </View>
          </View>

          {/* Last Name */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>{t('lastName') || 'Soyad'}</Text>
            <View style={styles.inputContainerReadOnly}>
              <Ionicons name="person-outline" size={20} color="#666" style={styles.inputIcon} />
              <Text style={styles.textReadOnly}>{formData.lastName || '-'}</Text>
            </View>
          </View>

          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>{t('email') || 'Email'}</Text>
            <View style={styles.inputContainerReadOnly}>
              <Ionicons name="mail-outline" size={20} color="#666" style={styles.inputIcon} />
              <Text style={styles.textReadOnly}>{formData.email || '-'}</Text>
            </View>
          </View>

          {/* Logout Button */}
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Ionicons name="log-out-outline" size={22} color="#dc3545" />
            <Text style={styles.logoutButtonText}>
              {t('logout') || 'Çıxış'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8f9fa' 
  },
  header: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingHorizontal: 5, 
    paddingVertical: 15,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1, 
    borderBottomColor: '#e9ecef',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: { 
    fontSize: 20, 
    fontWeight: '600', 
    color: '#333' 
  },
  scrollView: { 
    flex: 1 
  },
  scrollContent: { 
    paddingBottom: 30 
  },
  profileSection: { 
    alignItems: 'center', 
    paddingVertical: 30 
  },
  profileImageContainer: { 
    position: 'relative' 
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#e9ecef',
  },
  profileImagePlaceholder: {
    width: 150, 
    height: 150, 
    borderRadius: 75,
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
    backgroundColor: '#153f5c', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  formContainer: { 
    marginTop: 20, 
    paddingHorizontal: 20 
  },
  inputGroup: { 
    marginBottom: 20 
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    marginLeft: 4,
  },
  inputContainerReadOnly: {
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#f8f9fa', 
    borderRadius: 12,
    paddingHorizontal: 16, 
    paddingVertical: 14,
    borderWidth: 1, 
    borderColor: '#e9ecef',
  },
  inputIcon: { 
    marginRight: 10 
  },
  textReadOnly: { 
    flex: 1, 
    fontSize: 16, 
    color: '#333' 
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#dc3545',
    gap: 8,
    marginTop: 10,
  },
  logoutButtonText: {
    color: '#dc3545',
    fontSize: 16,
    fontWeight: '600',
  },
});