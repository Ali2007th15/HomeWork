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
  Alert,
  ActivityIndicator,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';

export default function MainRegister() {
  const { t } = useTranslation();
  const { register } = useAuth();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!name || !surname || !email || !password || !repeatPassword) {
      Alert.alert(t("error") || "Ошибка", t("alertFillAllFields"));
      return;
    }

    if (!emailRegex.test(email)) {
      Alert.alert(t("error") || "Ошибка", t("invalidEmail") || "Неверный формат email");
      return;
    }

    if (!passwordRegex.test(password)) {
      Alert.alert(
        t("error") || "Ошибка",
        t("weakPassword") || "Пароль должен быть минимум 8 символов и содержать буквы и цифры"
      );
      return;
    }

    if (password !== repeatPassword) {
      Alert.alert(t("error") || "Ошибка", t("alertPasswordMismatch"));
      return;
    }

    setIsLoading(true);

    try {
      const result = await register(name.trim(), surname.trim(), email.trim(), password);

      if (result.success) {
        Alert.alert(
          t("success") || "Успешно",
          t("registrationSuccess") || "Регистрация прошла успешно!",
          [{ text: "OK", onPress: () => router.replace("/(program)/Home") }]
        );
      } else {
        Alert.alert(
          t("registrationError") || "Ошибка регистрации",
          result.message || t("registrationFailed") || "Не удалось зарегистрироваться"
        );
      }
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert(t("error") || "Ошибка", t("serverError") || "Ошибка подключения к серверу");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.backgroundTop} />
      <View style={styles.backgroundBottom} />

      <View style={styles.titleContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/ADY5.png')}
            style={{ width: 170, height: 150, opacity: 1 }}
          />
        </View>
        <Text style={styles.titleWord}>{t("registerWelcome")}</Text>
        <Text style={styles.titleWord}>{t("registerAction")}</Text>
      </View>

      <BlurView tint="light" intensity={60} style={styles.blurCard}>
        <View style={styles.inputGroup}>
          <Ionicons name="person-outline" size={22} color="#666" />
          <TextInput
            placeholder={t("namePlaceholder")}
            placeholderTextColor="#999"
            style={styles.input}
            value={name}
            onChangeText={setName}
            editable={!isLoading}
            autoCapitalize="words"
          />
        </View>

        <View style={styles.inputGroup}>
          <Ionicons name="person-outline" size={22} color="#666" />
          <TextInput
            placeholder={t("surnamePlaceholder")}
            placeholderTextColor="#999"
            style={styles.input}
            value={surname}
            onChangeText={setSurname}
            editable={!isLoading}
            autoCapitalize="words"
          />
        </View>

        <View style={styles.inputGroup}>
          <Ionicons name="mail-outline" size={22} color="#666" />
          <TextInput
            placeholder={t("emailPlaceholder")}
            placeholderTextColor="#999"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            editable={!isLoading}
          />
        </View>

        <View style={styles.inputGroup}>
          <Ionicons name="lock-closed-outline" size={22} color="#666" />
          <TextInput
            placeholder={t("passwordPlaceholder")}
            placeholderTextColor="#999"
            style={styles.input}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            editable={!isLoading}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={22}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Ionicons name="lock-closed-outline" size={22} color="#666" />
          <TextInput
            placeholder={t("repeatPasswordPlaceholder")}
            placeholderTextColor="#999"
            style={styles.input}
            secureTextEntry={!showRepeatPassword}
            value={repeatPassword}
            onChangeText={setRepeatPassword}
            autoCapitalize="none"
            autoCorrect={false}
            editable={!isLoading}
          />
          <TouchableOpacity onPress={() => setShowRepeatPassword(!showRepeatPassword)}>
            <Ionicons
              name={showRepeatPassword ? "eye-outline" : "eye-off-outline"}
              size={22}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
          onPress={handleRegister}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Text style={styles.loginText}>{t("registerButton")}</Text>
          )}
        </TouchableOpacity>

        <View style={styles.bottomRow}>
          <Text style={{ color: '#777' }}>{t("alreadyHaveAccount")}</Text>
          <TouchableOpacity
            onPress={() => router.push("/(auth)/MainLogin")}
            disabled={isLoading}
          >
            <Text style={styles.registerLink}>{t("loginLink")}</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d253f', justifyContent: "flex-start" },
  backgroundTop: {
    position: "absolute", top: -120, left: -80, width: 350, height: 350,
    borderRadius: 300, backgroundColor: "#193b5b", opacity: 0.55,
  },
  backgroundBottom: {
    position: "absolute", bottom: -140, right: -80, width: 340, height: 340,
    borderRadius: 280, backgroundColor: "#0f2f47", opacity: 0.55,
  },
  logoContainer: { marginTop: 5, alignItems: 'center', marginLeft: 20, justifyContent: 'center', marginBottom: 10 },
  titleContainer: { paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  titleWord: { fontSize: 48, fontWeight: 'bold', color: 'white' },
  blurCard: { marginHorizontal: 20, borderRadius: 28, padding: 25, backgroundColor: "rgba(255,255,255,0.12)", overflow: "hidden" },
  inputGroup: { flexDirection: 'row', alignItems: 'center', backgroundColor: "rgba(255, 255, 255, 0.61)", borderRadius: 18, paddingHorizontal: 16, paddingVertical: 14, marginBottom: 18, gap: 12 },
  input: { flex: 1, fontSize: 17, color: '#000000ff' },
  loginButton: { backgroundColor: '#153f5c', paddingVertical: 16, borderRadius: 24, alignItems: 'center', marginTop: 10 },
  loginButtonDisabled: { backgroundColor: '#153f5c99' },
  loginText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  bottomRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 16 },
  registerLink: { color: '#fff', fontWeight: '700', marginLeft: 5 },
});
