import { View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { useState } from "react";
import { signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import auth from "../services/firebaseauth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignIn = ({navigation}) =>{

    const [username,setusername] = useState("");
    const [emailId,setemailId] = useState("");
    const [password,setpassword] = useState("");
    const [error,seterror] = useState("");

    function handlesignin() {
      seterror("");
      signInWithEmailAndPassword(auth,emailId,password)
      .then((userCredentials)=>{
        var user = userCredentials.user;
      })    
      .catch((error)=>seterror(error.message));
    }

    function gotosignup()
    {
      navigation.navigate("signup");
    }

    useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        if(user)
        {
          navigation.navigate("dashboard");
        }
      })
    })

    return(
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>  
        <View style = {styles.mainView}>

          <View>
            <Text style={{marginBottom:10,fontSize:20}}>SignIn</Text>
          </View>
          <View>
            <TextInput style={styles.input} placeholder="Username" onChangeText={(e)=>setusername(e)}/>
            <TextInput style={styles.input} placeholder="Email" onChangeText={(e)=>setemailId(e)}/>
            <TextInput style={styles.input} placeholder="Password" onChangeText={(e)=>setpassword(e)}/>
          </View>

          <View style={{marginTop:8}}>
            <TouchableOpacity style={styles.signUpButton} onPress={()=>handlesignin()}>
                <Text style={{color:"white",padding:5}}>SignIn</Text>
            </TouchableOpacity>
          </View>

          {error &&
          <View style={{margin:3}}>
            <Text style={{color:"red"}}>{error}</Text>
          </View>
          }

          <View>
            <Text onPress={()=>gotosignup()} style={{marginTop:10}}>Don't have an accout? Create here</Text>
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

export default SignIn;