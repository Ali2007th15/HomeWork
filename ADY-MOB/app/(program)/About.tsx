import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";
import { useTranslation } from "react-i18next";

const { width } = Dimensions.get("window");

export default function AboutMobile() {
  const { t } = useTranslation();

  return (
     <><StatusBar barStyle="light-content" /><ScrollView style={styles.container}>
      {}
      <View style={styles.hero}>
        <Image
          source={require("../../assets/foto2.avif")}
          style={styles.heroImage} />
        <View style={styles.heroOverlay} />
        <View style={styles.heroTextContainer}>
          <Text style={styles.heroTitle}>{t("aboutHeroTitle")}</Text>
          <Text style={styles.heroSubtitle}>{t("aboutHeroSubtitle")}</Text>
        </View>
      </View>

      {}
      <View style={styles.section}>
        <View style={styles.missionCard}>
          <Text style={styles.sectionTitle}>{t("aboutMissionTitle")}</Text>
          <Text style={styles.sectionText}>{t("aboutMissionText1")}</Text>
        </View>
      </View>

      {}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t("aboutValuesTitle")}</Text>

        <View style={styles.valuesRow}>
          <View style={styles.valueCard}>
            <Image
              source={require("../../assets/image.png")}
              style={styles.valueImage} />
            <Text style={styles.valueTitle}>{t("value1Title")}</Text>
            <Text style={styles.valueText}>{t("value1Text")}</Text>
          </View>

          <View style={styles.valueCard}>
            <Image
              source={require("../../assets/image2.png")}
              style={styles.valueImage} />
            <Text style={styles.valueTitle}>{t("value2Title")}</Text>
            <Text style={styles.valueText}>{t("value2Text")}</Text>
          </View>
        </View>

        <View style={styles.valuesRow}>
          <View style={styles.valueCard}>
            <Image
              source={require("../../assets/image3.png")}
              style={styles.valueImage} />
            <Text style={styles.valueTitle}>{t("value4Title")}</Text>
            <Text style={styles.valueText}>{t("value4Text")}</Text>
          </View>
        </View>
      </View>

      {}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t("aboutHistoryTitle")}</Text>
        <View style={styles.historyRow}>
          <Image
            source={require("../../assets/ll.png")}
            style={styles.historyImage} />
          <View style={styles.historyText}>
            <Text style={styles.sectionText}>{t("aboutHistoryText1")}</Text>
            <Text style={styles.sectionText}>{t("aboutHistoryText2")}</Text>
          </View>
        </View>
      </View>

      {}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t("aboutAchievementsTitle")}</Text>

        <View style={styles.achievementCard}>
          <Image
            source={require("../../assets/rr.png")}
            style={styles.achievementImage} />
          <Text style={styles.valueTitle}>{t("achievement1Title")}</Text>
          <Text style={styles.valueText}>{t("achievement1Text")}</Text>
        </View>

        <View style={styles.achievementCard}>
          <Image
            source={require("../../assets/tt.png")}
            style={styles.achievementImage} />
          <Text style={styles.valueTitle}>{t("achievement2Title")}</Text>
          <Text style={styles.valueText}>{t("achievement2Text")}</Text>
        </View>

        <View style={styles.achievementCard}>
          <Image
            source={require("../../assets/pp.png")}
            style={styles.achievementImage} />
          <Text style={styles.valueTitle}>{t("achievement3Title")}</Text>
          <Text style={styles.valueText}>{t("achievement3Text")}</Text>
        </View>
      </View>
    </ScrollView></>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  hero: { height: 280, marginBottom: 20, position: "relative" },
  heroImage: { width: "100%", height: "100%", borderRadius: 5 },
  heroOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",

    borderRadius: 5,
  },
  heroTextContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  heroTitle: {
    color: "#ffffffff",
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
  },
  heroSubtitle: {
    color: "#d3ceceff",
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
  },

  section: { paddingHorizontal: 16, paddingBottom: 24 },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1d5c87",
    marginBottom: 12,
  },
  sectionText: { fontSize: 14, color: "#111", marginBottom: 8 },
  muted: { color: "#777" },

  missionCard: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  valuesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  valueCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 12,
    marginRight: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  valueImage: { width: "100%", height: 120, borderRadius: 12, marginBottom: 8 },
  valueTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1d5c87",
    marginBottom: 4,
  },
  valueText: { fontSize: 13, color: "#555" },

  historyRow: { flexDirection: "row", gap: 12 },
  historyImage: { width: 120, height: 120, borderRadius: 12 },
  historyText: { flex: 1 },

  achievementCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  achievementImage: {
    width: "100%",
    height: 140,
    borderRadius: 12,
    marginBottom: 8,
  },
});