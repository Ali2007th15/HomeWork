import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Link } from "expo-router";

const { width } = Dimensions.get("window");

export default function HeroMobile() {
  return (
    <View style={styles.hero}>
      <Image
        source={require("../../assets/62.png")} // вставь свою фотку
        style={styles.heroImage}
      />
      <View style={styles.heroOverlay} />

      <View style={styles.heroTextContainer}>
        <Text style={styles.heroTitle}>Путешествуйте с ADY</Text>
        <Text style={styles.heroSubtitle}>
          Безопасно, комфортно и удобно
        </Text>

        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Купить</Text>
        </TouchableOpacity>
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
  heroTextContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    marginTop: 20,
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
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#1d5c87", // синий цвет
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
