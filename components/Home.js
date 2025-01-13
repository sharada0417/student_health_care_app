import React from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform , Image } from 'react-native';
import { Button, Divider, Provider as PaperProvider, TextInput } from 'react-native-paper'; 


const Home = () => {
  return (
    <PaperProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.imagepad}>
                <Image source={require('../assets/uovlogo.png')} style={styles.image}/>
                <Divider/>
          </View>
         <View style={styles.header}>
            <Text varient="headLineLarge" style={{textTransform:"uppercase"}}>Student Login</Text>
            <Divider/>
         </View>
         <View style={styles.input}>
            <TextInput label="username" mode='outlined'/>
         </View>
          </View>
          <View style={styles.input}>
            <TextInput label="Password" mode='outlined' right={<TextInput.Icon icon="eye"/>}/>
          </View>
          <View style={styles.input}>
            <Button buttonColor='#4b0150' mode='contained'>Login</Button>
          </View>
          <View style={styles.footer}>
            <Text style={{ color:"#ffff", margin:'auto'}} varient="labelLarge">UOV @ 2024</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </PaperProvider>
  );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        flexGrow: 1,
        justifyContent: 'space-between',
        padding: 10
    },
    imagepad: {
        padding: 8,
        alignItems: 'center',
        flex: 2,
        marginBottom: 10
    },
    image: {
        width: '80%',
        height: 73,
    },
    header: {
        flex: 3,
        width: "100%",
        alignItems: 'center',
        padding: 5,
        marginBottom: 2
    },
    body: {
        flex: 5,
        width: "100%"
    },
    footer: {
        flex: 2,
        width: "100%",
        alignItems: 'center',
        backgroundColor: '#4b0150'
    },
    input: {
        padding: 8,
        marginBottom: 7
    },
    scrollView: {
        flexGrow: 1, 
    },
    keyboardAvoidingView: {
        flex: 1, 
    }
});