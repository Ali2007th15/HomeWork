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
        <Stack.Screen name="Category" />
        <Stack.Screen name="News" />
        <Stack.Screen name="About" />
        <Stack.Screen name="Settings" />
      </Stack>
      <Program1 />
    </View>
  );
}