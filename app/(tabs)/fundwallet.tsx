import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import HeaderSection from "@/components/header";
import { Ionicons } from "@expo/vector-icons";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

type PaymentOption = {
  title: string;
  description?: string;
};

export default function Dashboard() {
  const router = useRouter();

  const paymentOptions: PaymentOption[] = [
    { title: "USSD", description: "Dial *2334*amount*VUNA# to fund you wallet" },
    { title: "Another Bank", description: "Make a transfer from an externl bank" },
    { title: "Debit or Credit Card", description: "Works with Master, Visa and Verve Cards only" },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFF", padding: 20 }}>
      {/* Header */}
      <HeaderSection />

      {/* Title Section */}
      <View style={{ width: screenWidth, backgroundColor: '#6C6C6C', alignItems: 'center', marginBottom: 50, marginHorizontal:-20, paddingVertical: 15, flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
            <Ionicons name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={{ alignItems: 'flex-start', marginLeft: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }}>Fund Wallet</Text>
        </View>
      </View>


      <View style={{ padding: 10, marginBottom: 50, }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: "green", marginBottom: 20, textAlign: 'left' }}>
          Student Account Credentials
        </Text>
        <View style={{  flexDirection: 'column', borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#6C6C6C', marginRight: 20, backgroundColor: "#FFF", padding: 20, marginTop: -1, justifyContent: 'space-between' }}>

          <View style={{ flexDirection: 'column'  }}>
              <Text style={{ fontSize: 18, fontWeight: "normal", color: "#6C6C6C", marginBottom: 5, textAlign: 'left' }}>
              Account Name
            </Text>

            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#6C6C6C", marginBottom: 20, textAlign: 'left' }}>
              Abu Miracle Ojochele
            </Text>
          </View>

          <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontSize: 18, fontWeight: "normal", color: "#6C6C6C", marginBottom: 5, textAlign: 'left' }}>
              Account Number
              </Text>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#6C6C6C", marginBottom: 10, textAlign: 'left' }}>
              009988776655
              </Text>
          </View>

        </View>
      </View>

      <Text style={{ width: screenWidth, marginLeft: -10, fontSize: 18, fontWeight: "normal", color: "green", marginBottom: 10, textAlign: 'left' }}>
        Fund from
      </Text>

      {/* Payment Options */}
      {paymentOptions.map((option, index) => (
        <View key={index} style={{  borderTopWidth: 1, borderBottomWidth: 1,borderColor: '#6C6C6C', marginHorizontal:-20, width: screenWidth, backgroundColor: "#FFF", padding: 20, marginTop: -1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#6C6C6C"}}>{option.title}</Text>
                {option.description && <Text style={{ fontSize: 12, color: "#6C6C6C", width: '80%', flexWrap: 'wrap' }}>{option.description}</Text>}
            </View>
            <TouchableOpacity onPress={() => router.push('/dashboard')}
            style={{ backgroundColor: "#6C6C6C", padding: 7, borderRadius: 5, maxHeight: 30, marginTop: 5 }}>
                <Text style={{ color: "#fff", textAlign: "center" }}>Continue</Text>
            </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};