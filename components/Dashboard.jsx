import {Text,View,TouchableOpacity} from "react-native";
import { signOut,onAuthStateChanged } from "firebase/auth";
import auth from "../services/firebaseauth";

let Dashboard = ({navigation}) =>{

    function logout()
    {
       signOut(auth);
       onAuthStateChanged(auth,(user)=>{
        if(user)
        {
            console.log("LOGGED IN");
            console.log(user);
        }
        else console.log("LOGGED OUT")
        navigation.navigate("signin");
       })
    }

    return(
        <View style={{flex:0,justifyContent:"center",alignItems:"center",marginTop:250}}>
            <Text>Welcome to Dashboard</Text>
            <TouchableOpacity onPress={()=>logout()} style={{backgroundColor: 'blue',padding:4,marginTop:10,borderRadius: 5,}}>
                <Text>
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Dashboard;