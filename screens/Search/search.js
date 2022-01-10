import React, { createContext } from "react";
import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./styles";

const Search = ({navigation}) => {
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

      <TextInput
        style={styles.input}
        onChangeText={(text) => setStudentId(text)}
        placeholder="Enter StudentId"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setClassId(text)}
        placeholder="Enter ClassId"
      />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter your Email"
      />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        placeholder="Enter your Name"
      />
      

      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter your Password"
      />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        placeholder="Repeat your Password"
      />

      {/* <Image>

      </Image> */}

      <Pressable style={styles.button} onPress={() => navigation.navigate("homepage")}>
        <Text>Search</Text>
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
