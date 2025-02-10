import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function HeaderSection() {
    return (
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>

            <View style={{  
            marginTop: 40,
            flexDirection: 'row',
            }}>

                <Image source={require("../assets/images/vuna.png")} 
                style={{ width: 30, height: 30, marginRight: 10 }} />

                <Text 
                style={{ 
                    fontSize: 14, 
                    fontWeight: "bold",
                    width: 100,
                    flexWrap: 'wrap',

                }}>Veritas University</Text>
            </View>

            <TouchableOpacity style={{ marginTop: 40 }}>
                <Image style={{ width: 30, height: 30 }} source={require("../assets/images/Menu.png")} />
            </TouchableOpacity>
        </View>
    );
}