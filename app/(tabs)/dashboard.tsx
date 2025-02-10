import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import HeaderSection from "@/components/header";
const screenWidth = Dimensions.get("window").width;

export default function Dashboard() {
    const router = useRouter();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F4F4F4", padding: 20 }}>
      {/* Header */}
        <HeaderSection />

        <View style={{ padding: 12, backgroundColor: '#D9D9D9', width: screenWidth, marginHorizontal: -20, marginBottom: 5 }}>
            <Text style={{  fontSize: 16, fontWeight: 'bold', color: "green", marginTop: 5 }}>Welcome Back, Miracle!</Text>
        </View>
      
      {/* Wallet Section */}
      <Text style={{  padding: 5, fontSize: 20, marginBottom: 5, fontWeight: 'bold', color: "#6C6C6C", marginTop: 5 }}>Student Wallet</Text>
      <View style={{ backgroundColor: "#6C6C6C", paddingVertical: 20, paddingHorizontal: 20, borderRadius: 15, elevation: 2 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, color: "#fff"}}>Available Balance</Text>
            <TouchableOpacity>
                <Image style={{ marginLeft: 10 }} source={require("../../assets/images/Vector.png")} />
            </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 35, fontWeight: "bold", color: "#fff", marginTop: 10 }}>₦356,700</Text>
        <TouchableOpacity 
        onPress={() => router.push('/fundwallet')}
        style={{ backgroundColor: "#6C6C6C", marginLeft: 200, padding: 10, borderRadius: 30, marginTop: 10, borderColor: '#fff', borderWidth: 1 }}>
            <Text style={{ color: "#FFF", textAlign: "center" }}>Fund Wallet</Text>
        </TouchableOpacity>
      </View>
      
      {/* Payment Section */}
      <Text style={{ fontSize: 18, color: '#6C6C6C', fontWeight: "bold", marginTop: 20 }}>Payment</Text>
      {[
        { title: "Faculty Dues", amount: "₦10,000" },
        { title: "Departmental Dues", amount: "₦6,500" },
        { title: "SRA Dues", amount: "₦15,000" },
        { title: "NACOS Dues", amount: "₦3,500", paid: true }
      ].map((item, index) => (
        <View key={index} style={{ backgroundColor: "#B8D3A7", padding: 15, borderRadius: 15, marginTop: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.title}</Text>
          <Text style={{ marginTop: 5, fontSize: 14, color: "gray" }}>2024/2025 Session</Text>
          <Text style={{ marginTop: 5, fontSize: 18, fontWeight: "bold" }}>{item.amount}</Text>
          {item.paid ? (
            <Text style={{ color: "blue", marginLeft: 290, fontWeight: "light", paddingBottom: 5 }}>Paid</Text>
          ) : (
            <TouchableOpacity onPress={() => router.push('/payfee')} style={{ backgroundColor: "green", padding: 10, borderRadius: 30, marginTop: 5, marginLeft: 200 }}>
              <Text style={{ color: "#FFF", textAlign: "center" }}>Pay</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
    text:{
        color:'#000'
    },
    view: {
        backgroundColor: '#fff',
        flex: 1,
        resizeMode: 'cover',  
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',  
        top: 20,               
        left: 20,              
        padding: 10, 
        paddingTop: 40,
    },
});