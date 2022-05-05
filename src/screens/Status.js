import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import StatusItem from '../components/StatusItem'
import statusData from '../../assets/statusData'

const Status = () => {

  const mystatus = {
    id: '1',
    status: {
      id: 'u2',
      name: 'Sai Sumedh',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Status</Text>
      <StatusItem status={mystatus}  />
      <Text style={styles.heading}>Recent Updates</Text>
       {statusData.map((item, index) => (
        <View key={index} style={styles.chat}> 
          <StatusItem status={item}/>
        </View>
      ))}
    </ScrollView>
  )
}

export default Status

const styles = StyleSheet.create({
  heading:{
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 10,
    color: 'gray'
  }
})