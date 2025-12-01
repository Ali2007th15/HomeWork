import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { BlurView } from "expo-blur";
import { useTranslation } from "react-i18next";
import { useRouter } from "expo-router";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function TrainCategories() {
  const { t } = useTranslation();
  const router = useRouter();
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (category: string) => {
    LayoutAnimation.easeInEaseOut();
    setOpen(open === category ? null : category);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{t("choose category")}</Text>

      {/* ===== ABSHERON CARD ===== */}
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => router.push("/ticket-buy/absheron")}
      >
        <View style={styles.cardWrapper}>
          <BlurView intensity={30} tint="dark" style={styles.card}>
            <Image
              source={require("../../assets/Baku.png")}
              style={styles.cardImage}
            />

            <View style={styles.cardContent}>
              <View>
                <Text style={styles.cardTitle}>{t("absheron")}</Text>
                
              </View>

              <View style={styles.iconCircle}>
                <Text style={{ color: "white", fontSize: 18 }}>🚆</Text>
              </View>
            </View>
          </BlurView>
        </View>
      </TouchableOpacity>

      {/* ===== REGIONAL CARD ===== */}
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => router.push("/ticket-buy/regional")}
      >
        <View style={styles.cardWrapper}>
          <BlurView intensity={30} tint="dark" style={styles.card}>
            <Image
              source={require("../../assets/Aze2.png")}
              style={styles.cardImage}
            />

            <View style={styles.cardContent}>
              <View>
                <Text style={styles.cardTitle}>{t("regional")}</Text>
                
              </View>

              <View style={styles.iconCircle}>
                <Text style={{ color: "white", fontSize: 18 }}>🌍</Text>
              </View>
            </View>
          </BlurView>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    padding: 25,
    paddingBottom: 100,
    backgroundColor: "#FFFFFF",
  },

  title: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 25,
  },

  cardWrapper: {
    marginTop: 20,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 24,
    overflow: "hidden",
    height: 250,
    padding: 0,
  },

  cardImage: {
    width: "100%",
    height: 250,
    opacity: 0.7,
  },

  cardContent: {
    position: "absolute",
    bottom: 18,
    left: 18,
    right: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000000",
  },

  cardSubtitle: {
    fontSize: 14,
    color: "#555555",
    marginTop: 3,
  },

  iconCircle: {
    width: 48,
    height: 48,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
