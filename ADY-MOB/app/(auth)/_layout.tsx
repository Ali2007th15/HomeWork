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
        <Stack.Screen name="MainLogin" />
        <Stack.Screen name="MainRegister" />
          <Stack.Screen name="Offer" />
          <Stack.Screen name="Hero" />
          <Stack.Screen name="Table" />
          <Stack.Screen name="Railway" />
          <Stack.Screen name="Profile" />
          <Stack.Screen name="Splash" />
      </Stack>
    </View>
  );
}
