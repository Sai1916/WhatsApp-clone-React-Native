import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import chatsData from '../../assets/ChatsData'
import MessageView from '../components/MessageView'

const ChatScreen = ({navigation,route}) => {
  return (
    // <View>
    //   <Text>{route.params.chatData.name}</Text>
    // </View>
    <FlatList 
      data={chatsData.messages}
      renderItem={({item}) => (<MessageView messages={item} />)}
      keyExtractor={item => item.id}
    />
  )
}

export default ChatScreen

const styles = StyleSheet.create({})