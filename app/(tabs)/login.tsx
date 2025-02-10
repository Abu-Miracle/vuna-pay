import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from 'react-native';
import Logo from '@/components/logo';
import { useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
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

        <Text style={styles.title}>VUNA Pay</Text>
        {/* Login Form */}
        <View style={styles.formContainer}>
        <Text style={styles.loginText}>Log In</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={24} color="#fff" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Uername"
              placeholderTextColor="#fff"
              value={username}
              onChangeText={setUsername}
            />
          </View>

          {/* Password Input with Icon */}
          <View style={styles.inputContainer}>
            =<Ionicons name="lock-closed-outline" size={24} color="#fff" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#fff"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Forgot Password */}
          <TouchableOpacity onPress={() => router.push('/forgotpass')}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Continue Button */}
          <TouchableOpacity style={styles.button} onPress={() => router.push('/dashboard')}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <TouchableOpacity  onPress={() => router.push('/signup')}>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
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
  logoText: {
    flexWrap: 'wrap',
    fontSize: 18,
    width: 100,
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  loginText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 40,
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
    marginBottom: 15,
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
    color: '#fff',
    fontSize: 14,
  },
  signUpLink: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
