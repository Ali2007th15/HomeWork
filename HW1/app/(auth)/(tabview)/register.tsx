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
import { theme } from "../../../constants/theme";

const Register = () => {
  const { width } = useWindowDimensions();
  const styles = getStyles(width);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.content}>
        <View style={styles.nameRow}>
          <View >
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={[styles.input, styles.halfInput]}
              value={firstName}
              onChangeText={setFirstName}
              autoCapitalize="words"
            />
          </View>
          <View >
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={[styles.input, styles.halfInput]}
              value={lastName}
              onChangeText={setLastName}
              autoCapitalize="words"
            />
          </View>
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
          <Text style={styles.label}>Set Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <Pressable style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const getStyles = (width: number) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: "white",
      flex: 1,
      paddingTop: -90,
      alignItems: "center",
      
    },
    content: {
        width: Math.min(width - 32, 600), 
      gap: 16,
    },
    nameRow: {
      flexDirection: "row",
      justifyContent: "space-between" 
    },

    inputWrapper: {
      width: "100%",
    },
    label: {
      fontFamily: theme.fonts.regular,
      fontSize: 14,
      color: theme.colors.grey,
      marginBottom: 8,
    },
    input: {
      width: "100%",
      borderColor: "#E0E0E0",
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 12,
      fontSize: 16,
      fontFamily: theme.fonts.regular,
      backgroundColor: "#fff",
    },
    halfInput: {
      width: 180,
    },
    registerButton: {
      width: "100%",
      backgroundColor: theme.colors.primary,
      paddingVertical: 14,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 20,
    },
    registerButtonText: {
      color: theme.colors.white,
      fontSize: 16,
      fontFamily: theme.fonts.medium,
    },
  });