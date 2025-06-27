import { Image } from "expo-image";
import { Slot, Stack, Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import AuthTabs from "../../../components/auth-tabs";

const AuthLayout = () => {
  return (
    <View className="flex-1">
      <AuthTabs />
      <Tabs
        screenOptions={{
          tabBarStyle: {
            display: "none",
          },
          animation: "shift",
          headerShown: false,
        }}
      >
        <Tabs.Screen
          options={{
            title: "Login",
          }}
          name="login"
        />
        <Tabs.Screen
          options={{
            title: "Register",
          }}
          name="register"
        />
      </Tabs>
    </View>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
