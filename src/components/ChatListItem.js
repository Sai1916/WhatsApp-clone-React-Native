import { StyleSheet, Text,View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment';

const ChatListItem = ({chats}) => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={() =>  navigation.navigate('ChatScreen',{
        chatData: chats.users[1]
    })}>
        <View style={styles.leftContainer}>
            <Image source={{uri: chats.users[1].imageUri}} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{chats.users[1].name}</Text>
                <Text style={styles.lastMessage}>{chats.lastMessage.content}</Text>
            </View>
        </View> 
         <Text style={styles.timestamp}>{moment(chats.lastMessage.createdAt).format('DD/MM/YYYY')}</Text>
        {/* <Text style={styles.timestamp}>Yesterday</Text> */}
    </TouchableOpacity>
  )
}

export default ChatListItem

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    leftContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
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