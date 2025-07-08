import React, { useState } from 'react';
import { router } from 'expo-router';
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BarberRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    if (!email || !password) {
      Alert.alert('Xəta', 'Zəhmət olmasa bütün sahələri doldurun');
      return;
    }
    
   router.push("/(auth)/BarberInform");
  };

  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
    
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => {
                        router.push("/(auth)/MainRegister");
                      }}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
      </View>

     
      <View style={styles.titleContainer}>
        <Text style={styles.titleWord}>Öz bərbər</Text>
        <Text style={styles.titleWord}>hesabını yarat</Text>
      </View>

    
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Ionicons name="mail-outline" size={20} color="#999" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>

      
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Şifrə"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={20}
              color="#999"
            />
          </TouchableOpacity>
        </View>
      </View>

   
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View style={[styles.checkboxBox, rememberMe && styles.checkboxChecked]}>
            {rememberMe && <Ionicons name="checkmark" size={16} color="#fff" />}
          </View>
          <Text style={styles.checkboxText}>Yadda saxla</Text>
        </TouchableOpacity>
      </View>

    
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Qeydiyyatdan keç</Text>
      </TouchableOpacity>


      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>və ya</Text>
        <View style={styles.dividerLine} />
      </View>

   
      <TouchableOpacity style={styles.googleButton} >
                <Image
                  source={require('/Users/ali/Documents/My GitHub/HomeWork/ByBer/assets/google.png')}
                  style={styles.googleIcon}
                  resizeMode="contain"
                />
                <Text style={styles.googleButtonText}>Google ilə davam et</Text>
              </TouchableOpacity>

    
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Artıq hesabınız var? </Text>
        <TouchableOpacity onPress={() => {
                        router.push("/(auth)/BarberLogin");
                      }}>
          <Text style={styles.loginLink}>Daxil ol</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 10,
    paddingTop: 30,
    paddingBottom: 40,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    paddingHorizontal: 18,
    marginBottom: 40,
  },
  titleWord: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  inputIcon: {
    marginRight: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 10,
  },
  eyeIcon: {
    padding: 5,
  },
  checkboxContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxBox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#ff9500',
    borderColor: '#ff9500',
  },
  checkboxText: {
    fontSize: 16,
    color: '#333',
  },
  signUpButton: {
    backgroundColor: '#ff9500',
    marginHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 30,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#999',
  },
    googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 25,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
},

    googleIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    
  },
  googleButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  loginText: {
    fontSize: 14,
    color: '#999',
  },
  loginLink: {
    fontSize: 14,
    color: '#ff9500',
    fontWeight: '600',
  },
});