import { View, Text, Image, StyleSheet } from 'react-native';

export default function Logo() {
    return (
        <View style={[styles.logo]}>
            <Image style={styles.image} source={require('../assets/images/vuna.png')} />
            <Text style={styles.logoText}>Veritas University</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 150,
    },
    logoText: {
        flexWrap: 'wrap',
        fontSize: 18,
        width: 100,
        color: '#ffffff',
        fontWeight: '600',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
});
