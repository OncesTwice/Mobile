import React, { createContext } from "react";
import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

const Search = ({ navigation }) => {
  const [studentId, setStudentId] = React.useState(null);
  const [classId, setClassId] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [buttonPresses, setButtonPresses] = React.useState(null);

  React.useEffect(() => {
    console.log(studentId);
  }, [studentId]);

  return (
    <View style={styles.container}>
      {/* <LinearGradient
          colors={["#5ca0f2", "#f5f7f6"]}
          start={[0.1, 0.1]}
          style={styles.body}
        >
          <Text style={styles.text} >VCL</Text>
      </LinearGradient> */}

      
     

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("TimeTable")}
      >
        <Text>Check in</Text>
      </Pressable>

      {/* <Pressable style={styles.button} onPress={() =>{
        setButtonPresses(buttonPresses + 1)
      }}>       
        <Text style={styles.text}>Register</Text>
       
      </Pressable> */}
    </View>
  );
};

export default Search;
