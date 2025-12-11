import React, { useState } from 'react';
import { router } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';


export default function MainLogin() {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      alert(t("alertFillAll")); // новый уникальный ключ
      return;
    }
    router.push("/(program)/Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* ==== Background Waves ==== */}
      <View style={styles.backgroundTop} />
      <View style={styles.backgroundBottom} />

      {/* ==== Title + Logo ==== */}
      <View style={styles.titleContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/ADY5.png')}
            style={{ width: 220, height: 200, opacity: 1 }}
          />
        </View>
        <Text style={styles.titleWord}>{t("welcomeText")}</Text>
        <Text style={styles.titleWord}>{t("enterAccount")}</Text>
      </View>

      {/* ==== BLUR Card ==== */}
      <BlurView tint="light" intensity={60} style={styles.blurCard}>
        
        {/* Email */}
        <View style={styles.inputGroup}>
          <Ionicons name="mail-outline" size={22} color="#666" />
          <TextInput
            placeholder={t("emailPlaceholder")}
            placeholderTextColor="#999"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        {/* Password */}
        <View style={styles.inputGroup}>
          <Ionicons name="lock-closed-outline" size={22} color="#666" />
          <TextInput
            placeholder={t("passwordPlaceholder")}
            placeholderTextColor="#999"
            style={styles.input}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={22}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>{t("loginButton")}</Text>
        </TouchableOpacity>

        {/* Register */}
        <View style={styles.bottomRow}>
          <Text style={{ color: '#777' }}>{t("noAccountText")}</Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/MainRegister")}>
            <Text style={styles.registerLink}>{t("registerLink")}</Text>
          </TouchableOpacity>
        </View>

      </BlurView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d253f',
    justifyContent: "flex-start",
  },

  /* Waves */
  backgroundTop: {
    position: "absolute",
    top: -120,
    left: -80,
    width: 350,
    height: 350,
    borderRadius: 300,
    backgroundColor: "#193b5b",
    opacity: 0.55,
  },
  backgroundBottom: {
    position: "absolute",
    bottom: -140,
    right: -80,
    width: 340,
    height: 340,
    borderRadius: 280,
    backgroundColor: "#0f2f47",
    opacity: 0.55,
  },

  /* Logo */
  logoContainer: {
    marginTop: 40,
    alignItems: 'center',
    marginLeft: 20,
    justifyContent: 'center',
    marginBottom: 20,
  },

  /* Title */
  titleContainer: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  titleWord: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    
  },

  /* Card with Blur */
  blurCard: {
    marginHorizontal: 20,
    borderRadius: 28,
    padding: 25,
    backgroundColor: "rgba(255,255,255,0.12)",
    overflow: "hidden",
  },

  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.61)",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 18,
    gap: 12,
  },

  input: {
    flex: 1,
    fontSize: 17,
    color: '#000000ff',
  },

  loginButton: {
    backgroundColor: '#153f5c',
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },

  registerLink: {
    color: '#fff',
    fontWeight: '700',
  }
});