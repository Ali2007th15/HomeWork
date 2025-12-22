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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from "react-i18next";
import { useAuth } from '../context/AuthContext';

export default function PersonInform() {
  const { t } = useTranslation();
  const { user, logout } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
      });
    }
  }, [user]);

  const handleLogout = () => {
    Alert.alert(
      t('logout') || 'Çıxış',
      t('logoutConfirm') || 'Çıxmaq istədiyinizdən əminsiniz?',
      [
        { text: t('cancel') || 'Ləğv et', style: 'cancel' },
        {
          text: t('logout') || 'Çıxış',
          style: 'destructive',
          onPress: async () => {
            const result = await logout();
            if (result.success) router.replace('/(auth)/MainLogin');
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
        <View style={styles.profileCard}>
          <Text style={styles.nameText}>{formData.name} {formData.lastName}</Text>
          <Text style={styles.emailText}>{formData.email}</Text>
        </View>

        <View style={styles.formContainer}>
          {}
          {['firstName', 'lastName', 'email'].map((field, idx) => (
            <View key={idx} style={styles.inputGroup}>
              <Text style={styles.label}>{t(field) || field}</Text>
              <View style={styles.inputBox}>
                <Ionicons
                  name={field === 'email' ? 'mail-outline' : 'person-outline'}
                  size={20}
                  color="#666"
                  style={styles.icon}
                />
                <Text style={styles.inputText}>{formData[field === 'firstName' ? 'name' : field === 'lastName' ? 'lastName' : 'email'] || '-'}</Text>
              </View>
            </View>
          ))}

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={22} color="#fff" />
            <Text style={styles.logoutText}>{t('logout') || 'Çıxış'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 18,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  backButton: {
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  scrollView: { flex: 1 },
  scrollContent: { paddingBottom: 40, paddingHorizontal: 20 },

  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },
  nameText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  emailText: {
    fontSize: 14,
    color: '#777',
  },

  formContainer: {
    marginTop: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
    marginBottom: 6,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 1,
  },
  icon: { marginRight: 10 },
  inputText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },

  logoutButton: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff4d4f',
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: '#ff4d4f',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
});