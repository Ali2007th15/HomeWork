import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { theme } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function OTP() {
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChangeOTP = (text: string, index: number) => {
    if (!/^\d?$/.test(text)) return;

    const otpValue = [...otp];
    otpValue[index] = text;
    setOtp(otpValue);

    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    } else if (text === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };
  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <SafeAreaView style={styles.container}>

       <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Şifrəni Yenilə</Text>
      </View>

      <View style={styles.innerContainer}>
        <View style={styles.mainContainer}>
          <Image
            source={require("../../assets/image.png")}
            contentFit="contain"
            style={styles.logo}
          />

          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Doğrulama kodunu daxil edin</Text>
            <Text style={styles.subtitleText}>
              Kod dan***in@yourdomain.com mailinə  öndərildi
            </Text>
          </View>

          <View style={styles.otpContainer}>
            {otp.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.otpInputContainer,
                  focusedIndex === index && styles.otpInputContainerFocused,
                ]}
              >
                <TextInput
                  ref={(ref: any) => (inputs.current[index] = ref)}
                  inputMode="numeric"
                  maxLength={1}
                  value={item}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  onFocus={() => handleFocus(index)}
                  onBlur={() => setFocusedIndex(-1)}
                  onChangeText={(text) => handleChangeOTP(text, index)}
                  style={styles.otpInput}
                />
              </View>
            ))}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.resendText}>Kod almadınız?</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

           <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.continueButton} disabled={!isOtpComplete} onPress={() => {
                  router.push("/(auth)/ResetPass");

                }} >
                  <Text style={styles.continueButtonText}>Təsdiqlə</Text>
                </TouchableOpacity>
              </View>

        </View>
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  mainContainer: {
    flex: 1,
    marginTop: 80,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 24,
    marginLeft: 16,
    tintColor: "#ff9500",
  },
  textContainer: {
    flexDirection: "column",
    gap: 12,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  titleText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    color: "#19213D",
    textAlign: "center",
  },
  subtitleText: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#5D6481",
    textAlign: "center",
  },
   header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  otpContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    justifyContent: "center",
    marginTop: 8,
  },
  otpInputContainer: {
    borderWidth: 1,
    minHeight: 75,
    height: 75,
    aspectRatio: 1,
    flexGrow: 0,
    borderRadius: 14,
    backgroundColor: "#F8F9FA",
    borderColor: "#EAEAEA",
  },
  otpInputContainerFocused: {
    borderColor: "#3B82F6",
  },
  otpInput: {
    height: "100%",
    width: "100%",
    fontFamily: "Poppins-Medium",
    textAlign: "center",
    fontSize: 32,
  },
  buttonContainer: {
    flexDirection: "column",
    gap: 16,
  },
  resendText: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#ff9500",
    textAlign: "center",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
    marginVertical: 8,
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 55,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    backgroundColor: "#F8F9FA",
  },
  sendButton: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
 continueButton: {
    backgroundColor: '#FF8C00',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
