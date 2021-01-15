import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'

import Router from './src/router'

export default function App() {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  )
}
