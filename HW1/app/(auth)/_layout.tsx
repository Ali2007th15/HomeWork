import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabview)" />
      {/* <Stack.Screen
        options={{
          title: "Register",
        }}
        name="tabview"
      /> */}
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
