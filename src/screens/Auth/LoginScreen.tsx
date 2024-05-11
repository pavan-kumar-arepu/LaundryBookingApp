import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import style from './style'
import globalStyle from '../../assets/globalStyle'
import Input from '../../components/Input/Input'

const LoginScreen = () => {
  // Default to empty
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Dispatch is a function provided by Redux that allows you to dispatch actions to the Redux store.
  // You're essentially accessing the dispatch function from the Redux store within that component. 
  const dispatch = useDispatch();

  return (
   <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]} >
   <ScrollView showsVerticalScrollIndicator={false}>
       <Input label={'Email'}></Input>
   </ScrollView>
   </SafeAreaView>
  );
};

export default LoginScreen