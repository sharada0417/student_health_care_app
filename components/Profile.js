import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Card, Divider, PaperProvider } from 'react-native-paper';
import { students } from './StudentsDb';

const Profile = () => {
  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.imagepad}>
            <Image source={require('../assets/uovlogo.png')} style={styles.image} />
            <Divider />
          </View>
          <View style={styles.body}>
            <Card style={styles.card}>
              <View style={styles.profilePicContainer}></View>
              <Text style={styles.name} variant="headlineMedium">
                name
              </Text>
              <Text style={styles.info} variant="headlineMedium">
                Age: | Gender:
              </Text>
              <Divider style={styles.divider} />
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Contact Information</Text>
                <Text>Email:</Text>
                <Text>Phone:</Text>
                <Text>Address:</Text>
              </View>
              <Divider style={styles.divider} />
              <View style={styles.section}>
                <Text>Biological Information</Text>
                <Text>Gender: </Text>
                <Text>Age: </Text>
                <Text>Blood Group: </Text>
              </View>
              <Divider style={styles.divider} />
            </Card>
          </View>
          <View style={styles.footer}>
            <Text style={{ color: '#fff' }} variant="labelLarge">
              Uov @ 2024
            </Text>
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  imagepad: {
    padding: 8,
    alignItems: 'center',
    flex: 2,
    marginBottom: 10,
  },
  image: {
    width: '80%',
    height: 73,
  },
  profile: {
    width: 200,
    height: 200,
  },
  header: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    padding: 5,
    marginBottom: 2,
  },
  body: {
    flex: 5,
    width: '100%',
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#4b0150',
    padding: 15,
  },
  input: {
    padding: 8,
    marginBottom: 7,
  },
  scrollView: {
    flexGrow: 1, // Ensures the ScrollView behaves correctly
  },
  card: {
    margin: 8,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#fff',
    width: '90%',
  },
  profilePicContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  profilePic: {
    width: 160,
    height: 160,
    borderRadius: 60,
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  info: {
    textAlign: 'center',
    marginBottom: 16,
  },
  divider: {
    marginVertical: 16,
    width: '90%',
  },
  section: {
    alignItems: 'flex-start',
    marginBottom: 8,
    width: '100%',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
