import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, TextComponent} from 'react-native';
const axios = require('axios');
import { REST_API } from '../../route';

const Register = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function registerIt() {
      let params = {
        username: email,
        password: password
      }
        axios.post(`${REST_API}/register`, params)
        .then(function(response) {
          if(response.data.username == params.username) alert("Pomyślnie utworzono konto użytkownika");
        })
        .catch(function(error) {
          if(error.response.data == "Username is taken!") alert ("Nazwa użytkownika jest już zajęta")
          else alert(error);
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
          <TouchableOpacity style={styles.loginBtn} onPress={() => registerIt(email, password)}>
            <Text style={styles.loginText}>Zarejestruj</Text>
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
      justifyContent:"center"
    },
    
    TextInput: {
      height: 70,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    }
    
  })

  export default Register;
