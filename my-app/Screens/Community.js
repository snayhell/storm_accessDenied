import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Roomname from '../Firebase/Roomname'
export default function Community() {
  return (
    <ScrollView>
      <Roomname/>
    </ScrollView>
  )
}