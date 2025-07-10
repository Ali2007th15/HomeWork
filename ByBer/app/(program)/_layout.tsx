import { Stack } from "expo-router";
import { View } from "react-native";
import Program1 from "../../components/program"; 

export default function ProgramLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { flex: 1 },
        }}
      >
        <Stack.Screen name="Home" />
        <Stack.Screen name="Location" />
        <Stack.Screen name="Reserves" />
        <Stack.Screen name="Messages" />
        <Stack.Screen name="Profile" />
      </Stack>
      <Program1 />
    </View>
  );
}