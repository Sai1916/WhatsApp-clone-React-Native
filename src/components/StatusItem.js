import { StyleSheet, Text,View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment';

const StatusItem = ({status,user}) => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}>
        <View style={styles.leftContainer}>
            <View style={styles.imageContainer}>
                <Image source={{uri: status.status.imageUri}} style={styles.image} />
            </View>
            {/* {user ? (<View>
                    
                </View>) : {} 
            } */}
            <View style={styles.textContainer}>
                <Text style={styles.name}>{status.status.name}</Text>
                {/* <Text style={styles.lastMessage}>{chats.lastMessage.content}</Text> */}
            </View>
        </View> 
         {/* <Text style={styles.timestamp}>{moment(chats.lastMessage.createdAt).format('DD/MM/YYYY')}</Text> */}
        {/* <Text style={styles.timestamp}>Yesterday</Text> */}
    </TouchableOpacity>
  )
}

export default StatusItem

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 6,
    },
    leftContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer:{
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 30,
        padding: 2
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },  
    textContainer:{
        marginLeft: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    lastMessage: {
        fontSize: 14,
        color: 'gray',
    },
    timestamp:{
        fontSize: 12,
        marginTop: 8,
        color: 'gray',
    }

})