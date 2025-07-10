import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function AuthLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { flex: 1 },
        }}
      >
        <Stack.Screen name="Splash" />
        <Stack.Screen name="Welcome" />
        <Stack.Screen name="Carousel" />
        <Stack.Screen name="Carousel2" />
        <Stack.Screen name="Carousel3" />
        <Stack.Screen name="MainLogin" />
        <Stack.Screen name="MainRegister" />
        <Stack.Screen name="BarberRegister" />
        <Stack.Screen name="PersonRegister" />
        <Stack.Screen name="BarberLogin" />
        <Stack.Screen name="PersonLogin" />
        <Stack.Screen name="BarberInform" />
        <Stack.Screen name="PersonInform" />
        <Stack.Screen name="ForgotPass" />
        <Stack.Screen name="Otp" />
        <Stack.Screen name="Success" />
        <Stack.Screen name="ResetPass" />
      </Stack>
    </View>
  );
}
