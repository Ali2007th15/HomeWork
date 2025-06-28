import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { theme } from "../../constants/theme";
import { router } from "expo-router";

const OTP = () => {
  const [otp, setOtp] = useState<string[]>(Array(4).fill("")); 
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChangeOTP = (text: any, index: any) => {
    if (!/^\d?$/g.test(text)) {
      return;
    }
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

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Image
          source={require("../../assets/Logo.svg")}
          contentFit="contain"
          style={styles.logo}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>
            Enter verification code
          </Text>
          <Text style={styles.subtitleText}>
            We’ve sent a code to Lois@gmail.com
          </Text>
        </View>

        <View style={styles.otpContainer}>
          {otp.map((item, index) => (
            <View
              key={index}
              style={[
                styles.otpInputContainer,
                focusedIndex === index && styles.otpInputContainerFocused
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

        <View style={styles.buttonContainer}>
    
          <TouchableOpacity >
          
            <Text style={styles.resendText}>
              Didn't get a code?
            </Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity
              onPress={() => {
              router.push("/(auth)/(tabview)/login");
            }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>
                Back
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              
              style={[styles.button, styles.sendButton]}
            >
              <Text style={styles.sendButtonText}>
                Send
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    paddingTop: 80,
    paddingHorizontal: 16,
  },
  logo: {
    width: 64,
    height: 64,
    alignSelf: "center",
  },
  textContainer: {
    flexDirection: 'column',
    gap: 12,
    paddingHorizontal: 40,
  },
  titleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#19213D',
    textAlign: 'center',
  },
  subtitleText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#5D6481',
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'space-between',
    marginTop: 32,
  },
  otpInputContainer: {
    borderWidth: 1,
    minHeight: 75,
    height: 75,
    aspectRatio: 1,
    flexGrow: 1,
    borderRadius: 14,
    backgroundColor: '#F8F9FA',
    borderColor: '#EAEAEA',
  },
  otpInputContainerFocused: {
    borderColor: '#3B82F6', 
  },
  otpInput: {
    height: '100%',
    width: '100%',
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    fontSize: 32,
  },
  buttonContainer: {
    marginTop: 80,
    flexDirection: 'column',
    gap: 16,
  },
  resendText: {
    fontFamily: 'Poppins-Regular',
    marginTop: 200,
    fontSize: 16,
    color: '#3B82F6', 
    textAlign: 'center',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
    marginVertical: 8,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 55,
    marginTop: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    backgroundColor: '#F8F9FA',
  },
  sendButton: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#19213D',
  },
  sendButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: 'white',
  },
});