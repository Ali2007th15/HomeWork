import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../constants/theme";
import { Image } from "expo-image";
import { usePathname } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const Login = () => {
  const { width } = useWindowDimensions();
  const pathname = usePathname();
  const styles = getStyles(width);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.content}>
        <View style={styles.topView}>
          <Image
            contentFit="contain"
            source={require("../../assets/Logo.svg")}
            style={{ width: 35, height: 55 }}
          />

          <View style={styles.welcomeWrapper}>
            <Text style={styles.welcomeText}>Welcome back</Text>
            <Text style={styles.welcomeSubText}>
              Create an account or log in to explore the app
            </Text>
          </View>

          <View style={styles.tabRow}>
            <Pressable style={styles.tabButton}>
              <Text style={styles.tabText}>Sign Up</Text>
            </Pressable>
            <Pressable style={[styles.tabButton, { backgroundColor: theme.colors.white }]}>
              <Text style={styles.tabText}>Sign In</Text>
            </Pressable>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <View style={styles.rememberRow}>
            <View style={styles.checkboxTextWrapper}>
              <Pressable
                style={[styles.checkboxWrapper, rememberMe && styles.checkboxChecked]}
                onPress={() => setRememberMe(!rememberMe)}
              >
                {rememberMe && (
                  <FontAwesome name="check" size={16} color={theme.colors.white} />
                )}
              </Pressable>
              <Text style={styles.rememberText}>Remember me</Text>
            </View>
            <Pressable>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </Pressable>
          </View>

          <Pressable style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </Pressable>

          <Text style={styles.dividerText}>or login with</Text>

          <View style={styles.socialRow}>
            <Pressable style={[styles.socialButtonRect, styles.socialButtonShadow]}>
              <FontAwesome name="google" size={24} color="#DB4437" />
            </Pressable>
            <Pressable style={[styles.socialButtonRect, styles.socialButtonShadow]}>
              <FontAwesome name="apple" size={24} color="black" />
            </Pressable>
            <Pressable style={[styles.socialButtonRect, styles.socialButtonShadow]}>
              <FontAwesome name="twitter" size={24} color="#1DA1F2" />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const getStyles = (width: number) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      paddingTop: 14,
      alignItems: "center",
      backgroundColor: "#FAFAFA",
    },
    content: {
      flex: 1,
      width: width - 32,
      gap: 24,
    },
    topView: {
      alignItems: "center",
      gap: 24,
    },
    welcomeWrapper: {
      justifyContent: "center",
      alignItems: "center",
      gap: 12,
    },
    welcomeText: {
      fontSize: 32,
      color: "#19213D",
      fontFamily: theme.fonts.bold,
    },
    welcomeSubText: {
      fontFamily: theme.fonts.regular,
      color: theme.colors.grey,
      paddingHorizontal: 63,
      fontSize: 14,
      textAlign: "center",
    },
    tabRow: {
      flexDirection: "row",
      padding: 2,
      gap: 12,
      width: "100%",
      backgroundColor: "#F8F9FA",
      borderRadius: 12,
    },
    tabButton: {
      flex: 1,
      alignItems: "center",
      paddingVertical: 12,
      borderRadius: 12,
    },
    tabText: {
      fontFamily: theme.fonts.medium,
      fontSize: 16,
      color: theme.colors.secondary,
    },
    inputWrapper: {
      width: "100%",
    },
    label: {
      fontFamily: theme.fonts.regular,
      fontSize: 14,
      color: theme.colors.secondary,
      marginBottom: 8,
    },
    input: {
      width: "100%",
      borderColor: "#E0E0E0",
      borderWidth: 1,
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 14,
      fontSize: 16,
      fontFamily: theme.fonts.regular,
      backgroundColor: "#fff",
    },
    rememberRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
    checkboxTextWrapper: {
      flexDirection: "row",
      alignItems: "center",
      gap: 2,
    },
    checkboxWrapper: {
      width: 24,
      height: 24,
      borderWidth: 2,
      borderColor: theme.colors.grey,
      borderRadius: 6,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
    },
    checkboxChecked: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
    },
    rememberText: {
      fontFamily: theme.fonts.regular,
      fontSize: 14,
      color: theme.colors.secondary,
      marginLeft: 2,
    },
    forgotText: {
      fontFamily: theme.fonts.medium,
      fontSize: 14,
      color: theme.colors.primary,
    },
    loginButton: {
      width: "100%",
      backgroundColor: theme.colors.primary,
      paddingVertical: 16,
      borderRadius: 12,
      alignItems: "center",
      marginTop: 16,
    },
    loginButtonText: {
      color: theme.colors.white,
      fontSize: 16,
      fontFamily: theme.fonts.medium,
    },
    dividerText: {
      fontFamily: theme.fonts.regular,
      fontSize: 14,
      color: theme.colors.grey,
      marginTop: 24,
    },
    socialRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 12,
      marginTop: 8,
      width: "100%",
    },
    socialButtonRect: {
      backgroundColor: "#f7f7f7",
      paddingVertical: 14,
      paddingHorizontal: 20,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
    },
    socialButtonShadow: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
  });
