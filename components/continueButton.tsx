import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ContinueButton() {
    const router = useRouter();

    return (
        <TouchableOpacity style={styles.button} onPress={() => router.push('/dashboard')}>
            <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
);
}

const styles = StyleSheet.create({
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
});
