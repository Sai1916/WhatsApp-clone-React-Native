import { StyleSheet, Text, View  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { EvilIcons,SimpleLineIcons  } from '@expo/vector-icons';


const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.title}>WhatsApp</Text>
      <View style={styles.icons}>
        <EvilIcons name="search" size={30} color="white" style={styles.icon} />
        <SimpleLineIcons name="options-vertical" size={18} color="white" />
      </View>
      <MyTabs />
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        padding: 15,
        backgroundColor: '#069e73', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title:{ 
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    icons:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    icon:{
        marginHorizontal: 18,
    }
})