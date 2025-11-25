import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function AboutMobile() {
  return (
    <ScrollView style={styles.container}>
      {/* HERO SECTION - большой баннер с заголовком */}
      <View style={styles.hero}>
        <Image
          source={require("../../assets/foto2.avif")}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay} />
        <View style={styles.heroTextContainer}>
          <Text style={styles.heroTitle}>О нас</Text>
          <Text style={styles.heroSubtitle}>
            Мы создаем безопасные и комфортные путешествия
          </Text>
        </View>
      </View>

      {/* MISSION SECTION - горизонтальная карточка */}
      <View style={styles.section}>
        <View style={styles.missionCard}>
          <Text style={styles.sectionTitle}>Наша миссия</Text>
          <Text style={styles.sectionText}>
            Мы стремимся сделать поездки безопасными и удобными для всех
            пассажиров.
          </Text>
          <Text style={[styles.sectionText, styles.muted]}>
            Качество, комфорт и надежность — наши главные приоритеты.
          </Text>
        </View>
      </View>

      {/* VALUES SECTION - 2 колонки карточек */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Наши ценности</Text>
        <View style={styles.valuesRow}>
          <View style={styles.valueCard}>
            <Image
              source={require("../../assets/image.png")}
              style={styles.valueImage}
            />
            <Text style={styles.valueTitle}>Инновации</Text>
            <Text style={styles.valueText}>
              Мы внедряем современные технологии для комфорта пассажиров.
            </Text>
          </View>
          <View style={styles.valueCard}>
            <Image
              source={require("../../assets/image2.png")}
              style={styles.valueImage}
            />
            <Text style={styles.valueTitle}>Экология</Text>
            <Text style={styles.valueText}>
              Сохраняем природу, используя экологичные решения.
            </Text>
          </View>
        </View>
        <View style={styles.valuesRow}>
          <View style={styles.valueCard}>
            <Image
              source={require("../../assets/image3.png")}
              style={styles.valueImage}
            />
            <Text style={styles.valueTitle}>Комфорт</Text>
            <Text style={styles.valueText}>
              Создаем удобные условия для всех пассажиров.
            </Text>
          </View>
        </View>
      </View>

      {/* HISTORY SECTION - изображение слева, текст справа */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Наша история</Text>
        <View style={styles.historyRow}>
          <Image
            source={require("../../assets/ll.png")}
            style={styles.historyImage}
          />
          <View style={styles.historyText}>
            <Text style={styles.sectionText}>
              Мы начали свой путь более 10 лет назад, создавая безопасные
              железнодорожные перевозки.
            </Text>
            <Text style={styles.sectionText}>
              Сегодня мы обслуживаем миллионы пассажиров и развиваем сеть
              железных дорог.
            </Text>
            <Text style={[styles.sectionText, styles.muted]}>
              Надежность и комфорт всегда на первом месте.
            </Text>
          </View>
        </View>
      </View>

      {/* ACHIEVEMENTS SECTION - вертикальный список карточек */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Достижения</Text>
        <View style={styles.achievementCard}>
          <Image
            source={require("../../assets/rr.png")}
            style={styles.achievementImage}
          />
          <Text style={styles.valueTitle}>5 миллионов пассажиров в год</Text>
          <Text style={styles.valueText}>
            Мы перевозим более 5 миллионов пассажиров ежегодно.
          </Text>
        </View>

        <View style={styles.achievementCard}>
          <Image
            source={require("../../assets/tt.png")}
            style={styles.achievementImage}
          />
          <Text style={styles.valueTitle}>1500 км сети</Text>
          <Text style={styles.valueText}>
            Наша железнодорожная сеть охватывает 1500 км маршрутов.
          </Text>
        </View>

        <View style={styles.achievementCard}>
          <Image
            source={require("../../assets/pp.png")}
            style={styles.achievementImage}
          />
          <Text style={styles.valueTitle}>Круглосуточное обслуживание</Text>
          <Text style={styles.valueText}>
            Мы доступны для пассажиров 24/7, обеспечивая лучший сервис.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0a0c10" },
  hero: { height: 280, marginBottom: 20, position: "relative" },
  heroImage: { width: "100%", height: "100%", borderRadius: 5 },
  heroOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
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
    color: "#fff",
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
  },
  heroSubtitle: {
    color: "#eee",
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
  sectionText: { fontSize: 14, color: "#fff", marginBottom: 8 },
  muted: { color: "#b8bcc0" },

  missionCard: {
    backgroundColor: "#1f2229",
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },

  valuesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  valueCard: {
    flex: 1,
    backgroundColor: "#1f2229",
    borderRadius: 16,
    padding: 12,
    marginRight: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  valueImage: { width: "100%", height: 120, borderRadius: 12, marginBottom: 8 },
  valueTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1d5c87",
    marginBottom: 4,
  },
  valueText: { fontSize: 13, color: "#b8bcc0" },

  historyRow: { flexDirection: "row", gap: 12 },
  historyImage: { width: 120, height: 120, borderRadius: 12 },
  historyText: { flex: 1 },

  achievementCard: {
    backgroundColor: "#1f2229",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  achievementImage: {
    width: "100%",
    height: 140,
    borderRadius: 12,
    marginBottom: 8,
  },
});
