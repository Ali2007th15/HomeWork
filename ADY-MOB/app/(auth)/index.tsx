import { Redirect } from "expo-router";
import { StyleSheet } from "react-native";

export default function AuthIndex() {
  return <Redirect href={"/(auth)/Splash"} />;
};



const styles = StyleSheet.create({});
