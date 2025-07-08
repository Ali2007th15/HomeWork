import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="Splash" options={{ headerShown: false }} />
      <Stack.Screen name="Welcome" options={{ headerShown: false }} />
      <Stack.Screen name="Carousel" options={{ headerShown: false }} />
      <Stack.Screen name="Carousel2" options={{ headerShown: false }} />
      <Stack.Screen name="Carousel3" options={{ headerShown: false }} />
      <Stack.Screen name="MainLogin" options={{ headerShown: false }} />
      <Stack.Screen name="MainRegister" options={{ headerShown: false }} />
      <Stack.Screen name="BarberRegister" options={{ headerShown: false }} />
      <Stack.Screen name="PersonRegister" options={{ headerShown: false }} />
      <Stack.Screen name="BarberLogin" options={{ headerShown: false }} />
      <Stack.Screen name="PersonLogin" options={{ headerShown: false }} />
      <Stack.Screen name="BarberInform" options={{ headerShown: false }} />
      <Stack.Screen name="PersonInform" options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPass" options={{ headerShown: false }} />
      <Stack.Screen name="Otp" options={{ headerShown: false }} />
      <Stack.Screen name="Success" options={{ headerShown: false }} />
      <Stack.Screen name="ResetPass" options={{ headerShown: false }} />
    </Stack>
  );
}