import { StyleSheet, TextInput, View, Text,  Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


  export default StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      backgroundColor: "#DCDCDC"
    },

    input: {
      height: 40,
      width: 280,
      marginTop: 20,
      borderWidth: 1,
      borderRadius: "10px",
      padding: 10,
      backgroundColor: "white",
      color: "black",
      zIndex: 10,       
    },   

    button: {
      height: 40,
      width: 280,
      marginTop: 20,
      // alignText: "center",
      alignItems: "center",
      padding: 10,
      borderRadius: "10px",
      backgroundColor: "white",
      color: "black",
    }

    // linearGradient: {
        
    // }
}); 
