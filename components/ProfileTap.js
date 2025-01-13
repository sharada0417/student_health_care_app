import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Health from './Health';
import BMI from './BMI';
export default function ProfileTap({ route }){
    const Tab = createBottomTabNavigator();
    const { student } = route.params;
    console.log(student);
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;
  
              if (route.name === 'Profile') {
                iconName = focused ? 'account' : 'account-outline';
              } else if (route.name === 'Health') {
                iconName = focused ? 'hospital-box' : 'hospital-box-outline';
              } else if (route.name === 'BMI') {
                iconName = focused ? 'file-chart' : 'file-chart-outline';
              }
  
              return <Icon name={iconName} size={24} color="#4b0150" />;
            },
            tabBarLabelStyle:{color:"#4b0150"},
            headerShown:false,
          })}>
          <Tab.Screen name="Profile" component={Profile} initialParams={{student:student}} options={{tabBarLabel: 'Profile' }}/>
          <Tab.Screen name="Health" initialParams={{sid:student.id,sname:student.name}} component={Health} />
          <Tab.Screen name="BMI" initialParams={{sid:student.id,sname:student.name}} component={BMI} />
        </Tab.Navigator>
      );
}