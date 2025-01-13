import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Card, Divider, PaperProvider, Text } from "react-native-paper";
import { healthTracks } from "./StudentsDb";
export default function Health({route}){
    const { sid,sname } = route.params;
    const healthRecord = healthTracks.filter((healthTrack)=>{return healthTrack.student_id == sid})[0];
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
                                {sname}
                            </Text>
                            <Text style={styles.info} variant="bodyMedium">
                                Last Checkup Date: {healthRecord.last_checkup}
                            </Text>
                            <Divider style={styles.divider} />
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Health Records</Text>
                                <Text>Height: {healthRecord.height} CM</Text>
                                <Text>Weight: {healthRecord.weight} Kg</Text>
                                <Text>Heart rate: {healthRecord.heart_rate}</Text>
                                <Text>Blood Pressure: {healthRecord.blood_pressure}</Text>
                                <Text>Exercise Frequency: {healthRecord.exercise_frequency}</Text>
                                <Text>Dietary Preference: {healthRecord.dietary_preference}</Text>
                                <Text>Medical Conditions: {
                                    healthRecord.medical_conditions.map((m)=>(
                                        <Text style={{fontWeight:"bold"}} key={m} >{m}</Text>
                                    ))
                                    }
                                    </Text>
                            </View>
                            <Divider style={styles.divider} />
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
        backgroundColor: '#4b0150'
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
        width:'90%'
    },
    profilePicContainer: {
        marginBottom: 16,
        alignItems:"center"
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