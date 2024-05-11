import { View, Text, TextInput} from 'react-native'
import React, { useState } from 'react'
import style from './style'
import globalStyle from '../../assets/globalStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView,  } from 'react-native-gesture-handler'
import PropTypes from 'prop-types';

const Input = props => {
    const [value, setValue] = useState('');
    return (
      <View>
        <Text style={style.label}>{props.label}</Text>
        <TextInput
          placeholder={props.placeholder ? props.placeholder : null}
          style={style.input}
          value={value}
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType}
          onChangeText={val => {
            setValue(val);
            props.onChangeText(val);
          }}
        />
      </View>
    );
  };
  
  Input.defaultProps = {
    onChangeText: () => {},
    keyboardType: 'default',
    secureTextEntry: false,
  };
  
  Input.propTypes = {
    keyboardType: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChangeText: PropTypes.func,
    secureTextEntry: PropTypes.bool,
  };
  
  export default Input;
  