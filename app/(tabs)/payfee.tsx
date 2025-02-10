import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import HeaderSection from "@/components/header";
import { Ionicons } from "@expo/vector-icons";
const screenWidth = Dimensions.get("window").width;

type PaymentOption = {
  title: string;
  amount: string;
  transactionCharge: string;
  description?: string;
};

export default function Dashboard() {
  const router = useRouter();

  const paymentOptions: PaymentOption[] = [
    { title: "Bank Transfer", amount: "₦10,334.50", transactionCharge: "₦45.5 transaction charge" },
    { title: "Credit Card", amount: "₦10,314.50", transactionCharge: "₦14.50 transaction charge", description: "Works with Master, Visa and Verve Cards only" },
    { title: "Student Wallet", amount: "₦10,050", transactionCharge: "₦50 transaction charge" }
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F4F4F4", padding: 20 }}>
      {/* Header */}
      <HeaderSection />

      {/* Title Section */}
      <View style={{ width: screenWidth, backgroundColor: '#6C6C6C', alignItems: 'center', marginBottom: 50, marginHorizontal:-20, paddingVertical: 15, flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
            <Ionicons name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={{ alignItems: 'flex-start', marginLeft: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FFF" }}>Faculty Dues</Text>
            <Text style={{ textAlign: "left", marginTop: 5, color: "#FFF", width:"80%", flexWrap: 'wrap' }}>
            We recommend you use Bank Transfer for faster transactions
            </Text>
        </View>
      </View>

      <Text style={{ fontSize: 16, fontWeight: "bold", color: "green", marginBottom: 20, textAlign: 'center' }}>
        Select Payment Method
      </Text>

      {/* Payment Options */}
      {paymentOptions.map((option, index) => (
        <View key={index} style={{ borderTopWidth: 1, borderBottomWidth: 1,borderColor: '#6C6C6C', marginHorizontal:-20, width: screenWidth, backgroundColor: "#F4F4F4", padding: 20, marginTop: -1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{option.title}</Text>
                <Text style={{ fontSize: 14, color: "gray", width: '80%', flexWrap: 'wrap', marginBottom: 5 }}>{option.amount} ({option.transactionCharge})</Text>
                {option.description && <Text style={{ fontSize: 12, color: "gray", width: '80%', flexWrap: 'wrap' }}>{option.description}</Text>}
            </View>
            <TouchableOpacity style={{ backgroundColor: "gray", padding: 7, borderRadius: 5, maxHeight: 35, marginTop: 5 }}
            onPress={() => router.push('/pin')}>
                <Text style={{ color: "#FFF", textAlign: "center" }}>Continue</Text>
            </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};
