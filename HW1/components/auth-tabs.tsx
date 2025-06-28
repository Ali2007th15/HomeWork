import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import classNames from "classnames";
import { router, usePathname } from "expo-router";

const AuthTabs = () => {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);
  return (
    <SafeAreaView edges={["top"]} className="py-6 px-6 bg-white ">
      <Image
        source={require("../assets/Logo.svg")}
        contentFit="contain"
        style={{
          width: 64,
          height: 64,
          alignSelf: "center",
        }}
      />
      <View className="flex flex-col gap-3 px-20 ">
        <Text className="font-poppins-semibold text-[32px] text-[#19213D] text-center">
          Welcome back
        </Text>
        <Text className="font-poppins-regular text-sm text-[#5D6481] text-center">
          Create an account or log in to explore the app
        </Text>
      </View>
      <View className="mt-6">
        <View className="w-full p-0.5 h-[50px] flex flex-row items-center bg-[#F8F9FA]  rounded-[8px]">
          <Pressable
            onPress={() => {
              router.push("/(auth)/(tabview)/register");
            }}
            className={classNames(
              "h-full flex flex-row items-center grow text-center justify-center",
              pathname === "/register"
                ? "bg-[#FFFFFF] rounded-md"
                : "bg-transparent"
            )}
          >
            <Text>Sign Up</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              router.push("/(auth)/(tabview)/login");
            }}
            className={classNames(
              "h-full flex flex-row items-center grow text-center justify-center",
              pathname === "/login"
                ? "bg-[#FFFFFF] rounded-md"
                : "bg-transparent"
            )}
          >
            <Text>Login In</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthTabs;

const styles = StyleSheet.create({});
