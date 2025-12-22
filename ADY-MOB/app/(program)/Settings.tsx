import { View, Text, Pressable, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

export default function Settings() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng.toLowerCase());
  };
  const background = "#f5f5f5";
  const card = "#ffffff";
  const text = "#111111";

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: background }}>
      {}
      <StatusBar barStyle="dark-content" backgroundColor={background} />

      {}
      <Pressable
        onPress={() => router.push("/(auth)/Profile")}
        style={{
          backgroundColor: card,
          padding: 20,
          borderRadius: 18,
          flexDirection: "row",
          alignItems: "center",
          gap: 14,
          marginTop: 60,
          marginBottom: 20,
        }}
      >
        <Ionicons name="person-circle-outline" size={30} color={text} />
        <Text style={{ color: text, fontSize: 18, fontWeight: "600" }}>
          {t("profile")}
        </Text>
      </Pressable>

      {}
      <View
        style={{
          backgroundColor: card,
          padding: 20,
          borderRadius: 18,
        }}
      >
        <Text style={{ color: text, fontSize: 17, marginBottom: 10 }}>
          {t("language")}
        </Text>

        <View style={{ flexDirection: "row", gap: 12 }}>
          {["RU", "AZ", "EN"].map((lng) => (
            <Pressable
              key={lng}
              onPress={() => changeLanguage(lng)}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 18,
                borderRadius: 12,
                backgroundColor:
                  i18n.language === lng.toLowerCase() ? "#4f8ef7" : "#e1e1e1",
              }}
            >
              <Text
                style={{
                  color: i18n.language === lng.toLowerCase() ? "#fff" : text,
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                {lng}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}