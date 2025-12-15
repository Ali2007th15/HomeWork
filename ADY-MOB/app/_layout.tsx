import { useFonts } from "expo-font";
import { router, Slot, SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import "../global.css";
import { AuthProvider } from "./context/AuthContext";
import {TripProvider} from "./context/TripContext";

import "./i18n/i18n"; 

SplashScreen.preventAutoHideAsync();


const RootLayout = () => {
  const [loaded, error] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <TripProvider>
   <AuthProvider>
    <Stack>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="(auth)"
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="(program)"
      />
    </Stack>
    </AuthProvider>
   </TripProvider>
  );
};

export default RootLayout;