import { View, Text, Pressable, Switch } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "../context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import i18n from "../i18n/i18n"; 
import { useTranslation } from "react-i18next";

export default function Settings() {
  const router = useRouter();
  const { isDark, colors, toggleTheme } = useTheme();
  const { t, i18n: i18nInstance } = useTranslation();

  // функция для смены языка
  const changeLanguage = (lng: string) => {
    i18nInstance.changeLanguage(lng.toLowerCase()); // "RU" -> "ru"
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: colors.background,
      }}
    >
      {/* PROFILE */}
      <Pressable
        onPress={() => router.push("/(auth)/Profile")}
        style={{
          backgroundColor: colors.card,
          padding: 20,
          borderRadius: 18,
          flexDirection: "row",
          alignItems: "center",
          gap: 14,
          marginTop: 60,
          marginBottom: 20,
        }}
      >
        <Ionicons
          name="person-circle-outline"
          size={30}
          color={colors.text}
        />
        <Text
          style={{
            color: colors.text,
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          {t("profile") /* теперь переводим */}
        </Text>
      </Pressable>

      {/* THEME SWITCH */}
      <View
        style={{
          backgroundColor: colors.card,
          padding: 20,
          borderRadius: 18,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          {isDark ? (
            <Ionicons name="moon" size={24} color={colors.text} />
          ) : (
            <Ionicons name="sunny" size={26} color={colors.text} />
          )}

          <Text
            style={{
              color: colors.text,
              fontSize: 17,
            }}
          >
            {t("theme")} {/* перевод */}
          </Text>
        </View>

        <Switch value={isDark} onValueChange={toggleTheme} />
      </View>

      {/* LANGUAGE */}
      <View
        style={{
          backgroundColor: colors.card,
          padding: 20,
          borderRadius: 18,
        }}
      >
        <Text
          style={{
            color: colors.text,
            fontSize: 17,
            marginBottom: 10,
          }}
        >
          {t("language")} {/* перевод */}
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
                  i18nInstance.language === lng.toLowerCase()
                    ? "#4f8ef7"
                    : isDark
                    ? "#2d3040"
                    : "#e1e1e1",
              }}
            >
              <Text
                style={{
                  color:
                    i18nInstance.language === lng.toLowerCase()
                      ? "#fff"
                      : colors.text,
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
