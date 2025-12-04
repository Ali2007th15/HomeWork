import { Stack } from "expo-router";
import { StatusBar, View } from "react-native";
import Program1 from "../../components/program"; 


export default function ProgramLayout() {
  return (
    
    <View style={{ flex: 1, }}>
      <StatusBar barStyle="dark-content"  />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { flex: 1 , backgroundColor: "#ffffffff"},
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