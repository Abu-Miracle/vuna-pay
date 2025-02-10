import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground, KeyboardAvoidingView, Platform, FlatList, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from '@/components/logo';

type ItemType = string;

export default function LoginScreen() {
  const router = useRouter();
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [matric, setMatric] = useState('');

  const [isDeptOpen, setIsDeptOpen] = useState<boolean>(false); // State to control dropdown visibility
  const [isFacultyOpen, setIsFacultyOpen] = useState<boolean>(false);
  const [isLevelOpen, setIsLevelOpen] = useState<boolean>(false);

  const [selectedDept, setSelectedDept] = useState<ItemType | null>(null);
  const [selectedFaculty, setSelectedFaculty] = useState<ItemType | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<ItemType | null>(null);

  const items = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const departments = ['Computer Science', 'Software Engineering', 'History', 'Mass Communication', 'Political Science', 'Law', 'Nursing'];
  const faculties = ['Natural and Applied Science', 'Humanities', 'Engineering', 'Management Science', 'Medical Science'];
  const levels = ['100 Level', '200 Level', '300 Level', '400 Level'];  


  // Function to handle item selection
  const handleDeptSelect = (item: ItemType) => {
    setSelectedDept(item);
    setIsDeptOpen(false); // Close dropdown after selection
  };

  const handleFacultySelect = (item: ItemType) => {
    setSelectedFaculty(item);
    setIsFacultyOpen(false); // Close dropdown after selection
  };

  const handleLevelSelect = (item: ItemType) => {
    setSelectedLevel(item);
    setIsLevelOpen(false); // Close dropdown after selection
  };

  // Data for FlatList
  const formData = [
    { key: 'email', label: 'Email address', value: email, onChangeText: setEmail, placeholder: 'Email address' },
    { key: 'firstname', label: 'First name', value: firstname, onChangeText: setFirstname, placeholder: 'First name' },
    { key: 'surname', label: 'Surname', value: surname, onChangeText: setSurname, placeholder: 'Surname' },
    { key: 'password', label: 'Password', value: password, onChangeText: setPassword, placeholder: 'Password', secureTextEntry: true },
    { key: 'confirmPassword', label: 'Confirm Password', value: confirmPassword, onChangeText: setConfirmPassword, placeholder: 'Confirm Password', secureTextEntry: true }
  ];

  return (
        <ImageBackground 
          source={require('../../assets/images/login.jpg')} 
          style={styles.background}
        >
          <View style={styles.overlay}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={30} color="#fff" />
            </TouchableOpacity>
    
            <Logo />
    
            <Text style={styles.loginText}>Sign Up</Text>
            
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, width: '100%' }}>
              <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                {/* Personal Details */}
                <Text style={styles.detailText}>Personal Details</Text>
    
                <FlatList 
                  data={[ // Pass an array of items for FlatList to render
                      { key: 'email', label: 'Email address', value: email, onChangeText: setEmail, placeholder: 'Email address' },
                      { key: 'firstname', label: 'First name', value: firstname, onChangeText: setFirstname, placeholder: 'First name' },
                      { key: 'surname', label: 'Surname', value: surname, onChangeText: setSurname, placeholder: 'Surname' },
                      { key: 'password', label: 'Password', value: password, onChangeText: setPassword, placeholder: 'Password', secureTextEntry: true },
                      { key: 'confirmPassword', label: 'Confirm Password', value: confirmPassword, onChangeText: setConfirmPassword, placeholder: 'Confirm Password', secureTextEntry: true }
                    ]}
                    renderItem={({ item }) => (
                      <View style={styles.inputContainer}>
                        <TextInput
                          style={styles.input}
                          placeholder={item.placeholder}
                          placeholderTextColor="#fff"
                          value={item.value}
                          onChangeText={item.onChangeText}
                          secureTextEntry={item.secureTextEntry}
                        />
                      </View>
                    )}
                    keyExtractor={item => item.key}
                  />
                
                {/* Academic Details */}
                <Text style={styles.detailText}>Academic Details</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Matric Number"
                        placeholderTextColor="#fff"
                        value={matric}
                        onChangeText={setMatric}
                    />
                </View>
    
                <View>
                  {/* Dropdown button with arrow */}
                  <TouchableOpacity 
                      style={styles.dropdownButton} 
                      onPress={() => setIsDeptOpen(!isDeptOpen)}
                  >
                      <Text style={styles.selectedItemText}>
                          {selectedDept || 'Department'}
                      </Text>
                      <Ionicons name={isDeptOpen ? 'chevron-up' : 'chevron-down'} size={20} color="white" />
                  </TouchableOpacity>
              
                  {/* Conditionally render the dropdown items */}
                  {isDeptOpen && (
                  <View>
                      {departments.map((item, index) => (
                      <TouchableOpacity 
                          key={index} 
                          style={styles.item} 
                          onPress={() => handleDeptSelect(item)}
                      >
                          <Text style={styles.itemText}>{item}</Text>
                      </TouchableOpacity>
                      ))}
                  </View>
                  )}
                </View>

                <View style={styles.dropdown}>
                  {/* Dropdown button with arrow */}
                  <TouchableOpacity 
                      style={styles.dropdownButton} 
                      onPress={() => setIsFacultyOpen(!isFacultyOpen)}
                  >
                      <Text style={styles.selectedItemText}>
                          {selectedFaculty || 'Faculty'}
                      </Text>
                      <Ionicons name={isFacultyOpen ? 'chevron-up' : 'chevron-down'} size={20} color="white" />
                  </TouchableOpacity>
              
                  {/* Conditionally render the dropdown items */}
                  {isFacultyOpen && (
                  <View>
                      {faculties.map((item, index) => (
                      <TouchableOpacity 
                          key={index} 
                          style={styles.item} 
                          onPress={() => handleFacultySelect(item)}
                      >
                          <Text style={styles.itemText}>{item}</Text>
                      </TouchableOpacity>
                      ))}
                  </View>
                  )}
                </View>

                <View style={styles.dropdown}>
                  {/* Dropdown button with arrow */}
                  <TouchableOpacity 
                      style={styles.dropdownButton} 
                      onPress={() => setIsLevelOpen(!isLevelOpen)}
                  >
                      <Text style={styles.selectedItemText}>
                          {selectedLevel || 'Level'}
                      </Text>
                      <Ionicons name={isLevelOpen ? 'chevron-up' : 'chevron-down'} size={20} color="white" />
                  </TouchableOpacity>
              
                  {/* Conditionally render the dropdown items */}
                  {isLevelOpen && (
                  <View>
                      {levels.map((item, index) => (
                      <TouchableOpacity 
                          key={index} 
                          style={styles.item} 
                          onPress={() => handleLevelSelect(item)}
                      >
                          <Text style={styles.itemText}>{item}</Text>
                      </TouchableOpacity>
                      ))}
                  </View>
                  )}
                </View>
    
                {/* Continue Button */}
                <TouchableOpacity style={styles.button} onPress={() => router.push('/dashboard')}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
              </ScrollView>
            </KeyboardAvoidingView>
    
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
  scrollContainer: {
    paddingTop: 60,
    borderRadius: 42,
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  loginText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  detailText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#fff',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  selectedItemText: {
    fontSize: 16,
    color: '#fff',
  },
  item: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    padding: 10,
  },
  dropdown: {
    marginTop: 15,
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 15,
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
});
