import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const LoginScreen = () => {
  // Default to empty
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Dispatch is a function provided by Redux that allows you to dispatch actions to the Redux store.
  // You're essentially accessing the dispatch function from the Redux store within that component. 
  const dispatch = useDispatch();

  
  
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen