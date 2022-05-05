import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import moment from 'moment'

const MessageView = ({messages}) => {
  return (
    <View> 
        <Text>{messages.user.name}</Text>
        <Text>{messages.content}</Text>
        <Text>{moment(messages.createdAt).fromNow()}</Text>
    </View>
  )
}

export default MessageView

const styles = StyleSheet.create({})