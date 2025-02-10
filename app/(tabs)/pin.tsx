import React, { useState, useRef } from "react";
import { View, Text, ScrollView, TouchableOpacity, Dimensions, TextInput } from "react-native";
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
  const [otp, setOtp] = useState(["", "", "", "", ]);
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleContinue = () => {
    const studentWalletPin = "1234"; // Replace this with your actual logic to validate student wallet
    const enteredPin = otp.join(""); // Convert array to a string
  
    if (enteredPin === studentWalletPin) {
      router.push("/success");
    } else {
      alert("Invalid PIN. Please enter the correct student wallet PIN.");
    }
  };  

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text) || text === "") {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (text !== "" && index < 5) {
        inputs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const paymentOptions: PaymentOption[] = [
    { title: "Bank Transfer" },
    { title: "Credit Card", description: "Works with Master, Visa and Verve Cards only" },
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
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }}>Faculty Dues</Text>
        </View>
      </View>



      <View style={{ width: "100%", backgroundColor: "rgba(0, 0, 0, 0.1)", padding: 20, borderRadius: 35, paddingBottom: 30, }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#6C6C6C", textAlign: "center", marginBottom: 20, marginTop: 40, }}>Enter your PIN</Text>
        <Text style={{ fontSize: 16, color: "#6C6C6C", textAlign: "center", marginBottom: 30, paddingHorizontal: 20 }}>Enter the four-digit PIN to your student wallet</Text>

        {/* OTP Input */}
        <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 30, marginHorizontal: 20, gap: 7, }}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              style={{ width: 50, height: 50, borderWidth: 2, borderColor: "#6C6C6C", borderRadius: 10, textAlign: "center", fontSize: 20, backgroundColor: "transparent", color: "#6C6C6C", }}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              secureTextEntry
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={{ backgroundColor: "#6c6c6c", paddingVertical: 12, paddingHorizontal: 30, borderRadius: 30, justifyContent: "center", alignItems: "center", marginBottom: 12, }} onPress={handleContinue}>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold", }}>Continue</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};