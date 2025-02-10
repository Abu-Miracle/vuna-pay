import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from '@/components/logo';

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  
  return (
    <ImageBackground 
      source={require('../../assets/images/login.jpg')}  // Ensure this image exists
      style={styles.background}
    >
      <View style={styles.overlay}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>

        {/* Logo Section */}
        <Logo />

        {/* Login Form */}
        <View style={styles.formContainer}>
        <Text style={styles.loginText}>Email Verification</Text>
        <Text style={styles.text}>Enter your email address so that 
        we can send you a verification code</Text>

          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={24} color="#fff" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor="#fff"
              keyboardType="email-address"
              autoCapitalize= 'none'
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Continue Button */}
          <TouchableOpacity style={styles.button} onPress={() => router.push('/otp')}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',  
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, 
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  loginText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  formContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent white
    padding: 20,
    borderRadius: 35,
    paddingBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',  // Aligns items horizontally
    alignItems: 'center',  // Centers the icon and input vertically
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: 'white',
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  icon: {
    marginRight: 10, // Spacing between icon and input field
  },
  input: {
    flex: 1,  // Ensures the input field takes up available space
    height: 50,
    color: '#fff',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  forgotPassword: {
    color: '#fff',
    textAlign: 'right',
    marginBottom: 15,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    justifyContent: 'center', 
    alignItems: 'center',      
    textAlign: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#358105',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',  
    top: 20,               
    left: 20,              
    padding: 10, 
    paddingTop: 40,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: '#ddd',
    fontSize: 14,
  },
  signUpLink: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
