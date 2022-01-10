import React, { createContext, useState, useEffect } from "react";
import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./styles";

const Search = ({navigation}) => {
  const [studentId, setStudentId] = React.useState(null);
  const [Day, setDay] = React.useState(null);
  const [Month, setMonth] = React.useState(null);
  const [Year, setYear] = React.useState(null);
  const [buttonPresses, setButtonPresses] = React.useState(null);

  useEffect(() => {
    console.log(studentId);
    var date = new Date (Year + '-' + Month + '-' + Day)
    console.log(date);

  }, []);

  const Search = () => {
    console.log(studentId);
    var date = new Date (Year + '-' + Month + '-' + Day)
    console.log(date);
    navigation.navigate("TimeTable")
  }
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
      <View style={styles.datetime}>
      <TextInput
        style={styles.dateinput}
        onChangeText={(text) => setDay(text)}
        placeholder="Day"
      />

      <TextInput
        style={styles.dateinput}
        onChangeText={(text) => setMonth(text)}
        placeholder="Month"
      />
      <TextInput
        style={styles.dateinput}
        onChangeText={(text) => setYear(text)}
        placeholder="Year"
      />
      </View>
      
      
   

      {/* <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        placeholder="Enter your Name"
      /> */}
      

      {/* <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter your Password"
        secureTextEntry
      /> */}

     

      

      {/* <Image>

      </Image> */}

      <Pressable style={styles.button} onPress={Search}>
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
