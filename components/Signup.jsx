import {View, Text, TouchableOpacity, TextInput, StyleSheet,KeyboardAvoidingView} from "react-native";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../services/firebaseauth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signup = ({navigation}) =>{

    const [username,setusername] = useState("");
    const [emailId,setemailId] = useState("");
    const [password,setpassword] = useState("");
    const [error,seterror] = useState("");

    async function handlesignup() {
      
        createUserWithEmailAndPassword(auth, emailId, password)
          .then((userCredential) => {
            const user = userCredential.user;
            AsyncStorage.setItem("user", JSON.stringify(user));
            console.log(user);
          })
          .catch((error) => {
            seterror(error.message);
          });
      }
      
      function gotosignin()
      {
        navigation.navigate("signin");
      }

    return(
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}> 
        <View style = {styles.mainView}>

          <View>
            <Text style={{marginBottom:10,fontSize:20}}>Signup</Text>
          </View>

          <View>
            <TextInput style={styles.input} placeholder="Username" onChangeText={(e)=>setusername(e)}/>
            <TextInput style={styles.input} placeholder="Email" onChangeText={(e)=>setemailId(e)}/>
            <TextInput style={styles.input} placeholder="Password" onChangeText={(e)=>setpassword(e)}/>
          </View>

          <View style={{marginTop:8}}>
            <TouchableOpacity style={styles.signUpButton} onPress={()=>handlesignup()}>
                <Text style={{color:"white",padding:5}}>Signup</Text>
            </TouchableOpacity>
          </View>

          {error &&
          <View style={{margin:3}}>
            <Text style={{color:"red"}}>{error}</Text>
          </View>
          }

          <View>
            <Text onPress={()=>gotosignin()} style={{marginTop:10}}>Already have an account? Login here</Text>
          </View>

        </View>
         </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 0,  
        justifyContent: "center",
        alignItems: "center", 
        padding: 50
    },
    input:{
        height:55,
        width:270,
        backgroundColor:"lightgray",
        margin:8,
        borderRadius:5
    },
    signUpButton:{
        padding:4,
        backgroundColor:"blue",
        borderRadius:5,
        width:270,
        flex:0,
        justifyContent:"center",
        alignItems:"center"
    }
      
})

export default Signup;