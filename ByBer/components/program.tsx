import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, usePathname } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Program1() {
  const pathname = usePathname();

  return (
    <SafeAreaView edges={["bottom"]}>
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/(program)/Home")}
        >
          <Ionicons
            name="home"
            size={26}
            color={pathname.includes("/Home") ? '#FF9500' : 'gray'}
          />
          <Text style={pathname.includes("/Home") ? styles.navLabelActive : styles.navLabel}>
            Əsas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/(program)/Location")}
        >
          <Ionicons
            name="location-outline"
            size={26}
            color={pathname.includes("/Location") ? '#FF9500' : 'gray'}
          />
          <Text style={pathname.includes("/Location") ? styles.navLabelActive : styles.navLabel}>
            Axtarış
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/(program)/Reserves")}
        >
          <Ionicons
            name="document-text-outline"
            size={26}
            color={pathname.includes("/Reserves") ? '#FF9500' : 'gray'}
          />
          <Text style={pathname.includes("/Reserves") ? styles.navLabelActive : styles.navLabel}>
            Rezervlərim
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/(program)/Messages")}
        >
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={26}
            color={pathname.includes("/Messages") ? '#FF9500' : 'gray'}
          />
          <Text style={pathname.includes("/Messages") ? styles.navLabelActive : styles.navLabel}>
            Mesajlar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/(program)/Profile")}
        >
          <Ionicons
            name="person-outline"
            size={26}
            color={pathname.includes("/Profile") ? '#FF9500' : 'gray'}
          />
          <Text style={pathname.includes("/Profile") ? styles.navLabelActive : styles.navLabel}>
            Hesab
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
    color: '#FF9500',
    fontWeight: "600",
  },
  navLabelCenter: {
    fontSize: 12,
    color: "gray",
    fontWeight: "600",
    marginTop: 4,
  },
});
