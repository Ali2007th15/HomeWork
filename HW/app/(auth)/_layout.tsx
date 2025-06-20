import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={{
          title: "Login",
        }}
        name="login"
      />
      <Stack.Screen
        options={{
          title: "Register",
        }}
        name="register"
      />
      <Stack.Screen
        options={{
          title: "Forgot Password?",
        }}
        name="forgot-password"
      />
      <Stack.Screen
        options={{
          title: "Confirm code",
        }}
        name="otp"
      />
    </Stack>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
