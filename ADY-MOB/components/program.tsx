import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, usePathname } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";

export default function Program1() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <SafeAreaView edges={["bottom"]}>
      <View style={styles.bottomNav}>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/(program)/Home")}
        >
          <Ionicons
            name="home-outline"
            size={26}
            color={pathname.includes("/Home") ? "#153f5c" : "gray"}
          />
          <Text
            style={
              pathname.includes("/Home")
                ? styles.navLabelActive
                : styles.navLabel
            }
          >
            {t("home")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/(program)/Category")}
        >
          <Ionicons
            name="ticket-outline"
            size={26}
            color={pathname.includes("/Category") ? "#153f5c" : "gray"}
          />
          <Text
            style={
              pathname.includes("/Category")
                ? styles.navLabelActive
                : styles.navLabel
            }
          >
            {t("category")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/(program)/News")}
        >
          <Ionicons
            name="newspaper-outline"
            size={26}
            color={pathname.includes("/News") ? "#153f5c" : "gray"}
          />
          <Text
            style={
              pathname.includes("/News")
                ? styles.navLabelActive
                : styles.navLabel
            }
          >
            {t("news")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/(program)/About")}
        >
          <Ionicons
            name="train-outline"
            size={26}
            color={pathname.includes("/About") ? "#153f5c" : "gray"}
          />
          <Text
            style={
              pathname.includes("/About")
                ? styles.navLabelActive
                : styles.navLabel
            }
          >
            {t("about")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/(program)/Settings")}
        >
          <Ionicons
            name="settings-outline"
            size={26}
            color={pathname.includes("/Settings") ? "#153f5c" : "gray"}
          />
          <Text
            style={
              pathname.includes("/Settings")
                ? styles.navLabelActive
                : styles.navLabel
            }
          >
            {t("settings")}
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    marginBottom: -40,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 90,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navLabel: {
    fontSize: 12,
    color: "gray",
  },
  navLabelActive: {
    fontSize: 12,
    color: "#153f5c",
    fontWeight: "600",
  },
});