import React from 'react'
import { Text, Platform, SafeAreaView,} from 'react-native'

export function NavBar() {
  if (Platform.OS === 'web') {
    return null
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'blue',
        alignItems: 'center',
      }}
    >
      <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 15}}>💬 Gifted Chat{'\n'}</Text>
    </SafeAreaView>
  )
}