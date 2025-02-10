import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from "react-native";
import { useRouter } from "expo-router";
import HeaderSection from "@/components/header";
import { Ionicons } from "@expo/vector-icons";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


export default function Dashboard() {
    const router = useRouter();
  return (
    <View style={{ backgroundColor: '#FFF', height: screenHeight, padding: 20 }}>
        <HeaderSection />

        <View style={{ backgroundColor: "#6C6C6C", justifyContent: 'center', width: screenWidth, height: '100%', alignItems: 'center', marginHorizontal: -20,  paddingBottom: 100 }}>
            <Image source={require('../../assets/images/success.png')} />
            <Text style={{ color: "#FFF", fontSize: 30, fontWeight: 'bold', paddingVertical: 10 }}>
                Congratulations!
            </Text>
            <Text style={{ color: "#FFF", fontSize: 18, fontWeight: 'normal', flexWrap: 'wrap', width: '70%', textAlign: 'center'  }}>
                You have Successfully paid your
                Faculty Dues
            </Text>
            <View>

        </View>
                
            <View style={{ width: "100%", alignItems: "flex-end", marginTop: 20, paddingRight: 20 }}>
                <TouchableOpacity>
                    <Text style={{ color: "#FFF", fontSize: 15, fontWeight: 'normal' }}>
                    View Receipt
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 10 }}
                onPress={() => router.push('/dashboard')}>
                    <Text style={{ color: "#FFF", fontSize: 15, fontWeight: 'normal' }}>
                    Back to Home
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    </View>
  );
};
