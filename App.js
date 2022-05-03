import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chats from './src/screens/Chats';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EvilIcons,SimpleLineIcons,Fontisto } from '@expo/vector-icons'; 
import Status from './src/screens/Status';
import Calls from './src/screens/Calls';
import CameraScreen from './src/screens/CameraScreen';
import ChatScreen from './src/screens/ChatScreen';


const Tab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();

export default function App() {

  const RootNavigation = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle :{
            backgroundColor: '#069e73',
            shadowOpacity: 0, 
            elevation: 0,
          },
          headerTitleAlign: 'left',
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen 
          name="App" 
          options = {{
            title: 'WhatsApp',
            headerRight: () => ( 
              <View style={styles.icons}>
                <TouchableOpacity>
                  <EvilIcons name="search" size={30} color="white" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <SimpleLineIcons name="options-vertical" size={18} color="white"  style={styles.icon} />
                </TouchableOpacity>
              </View>
            )
          }}
          component={TabNavigation} 
        />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    );
  }


  const TabNavigation = () => {
    return (
      <Tab.Navigator
        initialRouteName='Chats'
        tabBarOptions={{
          activeTintColor: '#fff',
          style: {
            backgroundColor: '#069e73',
          },
          indicatorStyle:{
            backgroundColor: '#fff',
            height:4,
          },
          labelStyle: {
            fontWeight: 'bold',
            fontSize: 14,
          },
          showIcon: true,
        }}
      >
        <Tab.Screen 
          name="Camera" 
          component={CameraScreen}
          options={{ 
            tabBarLabel: () => null,
            tabBarIcon : ({color}) => <Fontisto name="camera" color={color} size={18} />
          }}
         />
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Calls" component={Calls} /> 
      </Tab.Navigator>
    )
  }

  return (
      <NavigationContainer>
        <RootNavigation />
        <StatusBar style="light" />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  icons:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  icon:{
      marginHorizontal: 14,
  }
});
