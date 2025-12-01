import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function HeroMobile() {
  return (
    <View style={styles.hero}>
      <Image
        source={require("../../assets/62.png")} // фото-фон
        style={styles.heroImage}
      />
      <View style={styles.heroOverlay} />

      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/ADY5.png")} // твое лого
          style={styles.logo}
        />
      </View>

      <View style={styles.heroTextContainer}>
        <Text style={styles.heroTitle}>Путешествуйте с ADY</Text>
        <Text style={styles.heroSubtitle}>
          Безопасно, комфортно и удобно
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: "100%",
    height: 400,
    marginBottom: 5,
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    borderRadius: 1,
  },
  heroOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 1,
  },
  logoContainer: {
    position: "absolute",
    top: 30, // отступ сверху для лого
    width: "100%",
    alignItems: "center",
  },
  logo: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    marginTop: 40,
    marginLeft: 20,
  },
  heroTextContainer: {
    position: "absolute",
    bottom: 30, // текст опускается вниз
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  heroTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 6,
  },
  heroSubtitle: {
    color: "#eee",
    fontSize: 16,
    textAlign: "center",
  },
});
