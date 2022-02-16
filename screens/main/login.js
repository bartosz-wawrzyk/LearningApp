import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, TextComponent} from 'react-native';
const axios = require('axios');
import { REST_API } from '../../route';

const Login = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function authenticate() {
         axios.get(`${REST_API}/login`,  {
          params: {
            username: email,
            password: password
          }
        })
        .then(function(response) {
          if(response.data == false) alert('Nieprawidłowe dane logowania')
          else if (response.data == true) {
            navigation.push("Categories")
          }
        })
        .catch(function(error) {
          alert(error);
        });
      
    }
    return (
      <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput style={styles.TextInput} placeholder='login' defaultValue={email}
          style={styles.input} onChangeText={(email) => setEmail(email)} 
          />
      </View>
      <View style={styles.inputView}>
          <TextInput  style={styles.TextInput} placeholder='hasło' keyboardType='default'
            autoCompleteType='password' secureTextEntry={true}
            defaultValue={password} style={styles.input}
            onChangeText={(password) => setPassword(password)} 
            />
      </View>
          <TouchableOpacity style={styles.loginBtn} onPress={() => authenticate(email, password)}>
            <Text style={styles.loginText}>Zaloguj</Text>
          </TouchableOpacity>
        
        </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    loginBtn: {
   width:"80%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:40,
   backgroundColor:'#228B22',
    },
    inputView: {
      backgroundColor: "#81db99",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
      justifyContent: "center"
    },
    
    TextInput: {
      height: 70,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    }
    
  })

  export default Login;
