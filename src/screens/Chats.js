import { StyleSheet, Text, View,ScrollView} from 'react-native'
import React from 'react'
import ChatsData from '../../assets/ChatsData'
import chatRooms from '../../assets/ChatRooms'
import ChatListItem from '../components/ChatListItem'

const Chats = () => { 
  return ( 
    <ScrollView style={styles.container}>
       {chatRooms.map((item, index) => (
        <View key={index} style={styles.chat}> 
          <ChatListItem chats={item}/>
        </View>
      ))}
    </ScrollView>
  )
}

export default Chats

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
})