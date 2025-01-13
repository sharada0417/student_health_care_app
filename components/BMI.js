import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Card, Divider, PaperProvider, Text } from "react-native-paper";
import { healthTracks } from "./StudentsDb";
export default function BMI({ route }) {
    const { sid, sname } = route.params;
    const healthRecord = healthTracks.filter((healthTrack) => { return healthTrack.student_id == sid })[0];
    const height = healthRecord.height/100
    const BMI = healthRecord.weight / (height * height);
    let BMIrange='';
    let BMIimage=''
    const BMIfun = (BMI)=>{
        if (BMI <= 18.5) {
            BMIrange='Underweight';
            BMIimage= <Image source={require('../assets/bmipic/bmi1.jpg')} style={styles.profilePic} />
        } else if(BMI <= 24.9){
            BMIrange='Normal';
            BMIimage= <Image source={require('../assets/bmipic/bmi6.jpg')} style={styles.profilePic} />
        }
        else if(BMI <= 29.9){
            BMIrange='Overweight';
            BMIimage= <Image source={require('../assets/bmipic/bmi2.jpg')} style={styles.profilePic} />
        }
        else if(BMI <= 34.9){
            BMIrange='Obesity Class 1';
            BMIimage= <Image source={require('../assets/bmipic/bmi3.jpg')} style={styles.profilePic} />
        }
        else if(BMI <= 39.9){
            BMIrange='Obesity Class 2';
            BMIimage= <Image source={require('../assets/bmipic/bmi4.jpg')} style={styles.profilePic} />
        }
        else {
            BMIrange='Obesity Class 3';
            BMIimage= <Image source={require('../assets/bmipic/bmi5.jpg')} style={styles.profilePic} />
        }
    }
    BMIfun(BMI);
    //console.log(healthRecord)
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
                            <Text style={styles.name} variant="headlineMedium">
                                {sname}'s BMI
                            </Text>
                            <Text style={styles.info} variant="bodyMedium">
                               BMI: {BMI.toFixed(2)}| BMI Range: {BMIrange}
                            </Text>
                            <Divider style={styles.divider} />
                            <View style={styles.profilePicContainer}>
                                {BMIimage}
                            </View>
                        </Card>
                    </View>
                    <View style={styles.footer}>
                        <Text style={{ color: "#ffff", margin: 'auto' }} variant="labelLarge">UoV © 2024</Text>
                    </View>
                </View>
            </ScrollView>
        </PaperProvider>
    );
}
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
    profile: {
        width: 200,
        height: 200,

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
        width: "100%",
        alignItems: "center"
    },
    footer: {
        flex: 2,
        width: "100%",
        alignItems: 'center',
        backgroundColor: '#4b0150',
        padding:10
    },
    input: {
        padding: 8,
        marginBottom: 7
    },
    scrollView: {
        flexGrow: 1, // Ensures the ScrollView behaves correctly
    },
    card: {
        margin: 8,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#fff',
        width: '90%'
    },
    profilePicContainer: {
        marginBottom: 16,
        alignItems: "center"
    },
    profilePic: {
        width: 130,
        height: 390,
        borderRadius: 5,
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
        textAlign: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});


