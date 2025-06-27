import { Redirect } from "expo-router";
import { StyleSheet } from "react-native";

const AuthIndex = () => {
  return <Redirect href={"/(auth)/(tabview)/login"} />;
};

export default AuthIndex;

const styles = StyleSheet.create({});
