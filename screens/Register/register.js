import React, { createContext } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import styles from "./styles";
import { asin } from "react-native-reanimated";

const Register = ({ navigation }) => {
  const [studentId, setStudentId] = React.useState(null);
  const [classId, setClassId] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [confirmPassword, setconfirmPassword] = React.useState(null);
  const [buttonPresses, setButtonPresses] = React.useState(null);

  React.useEffect(() => {
    console.log(studentId);

    getData();
  }, [studentId]);

  const getData = async () => {
    const res = await axios.get(
      "https://json-api-collection.herokuapp.com/allproduct/products"
    );
    console.log(res);
  };

  const onRegister = async () => {
    const formData = await new FormData();

    // Update the formData object
   
    await formData.append("student_id", studentId);
    await formData.append("className", classId);
    await formData.append("email", email);
    await formData.append("name", name);
    await formData.append("password", password);
    await formData.append("confirmPassword", confirmPassword);
    await formData.append("image", selectedFile);


    console.log(
      "🚀 ~ file: Register.js ~ line 72 ~ handleImage ~ selectedFile",
      selectedFile
    );

    console.log(
      "🚀 ~ file: Login.js ~ line 23 ~ handleSubmit ~ body",
      formData
    );
    try {
      const res = await axios.post(
        `http://localhost:3000/register`,
        formData
      );
      console.log("🚀 ~ file: Register.js ~ line 83 ~ handleImage ~ res", res);
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  };


  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      // setImage(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

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
        // textContentType="password"
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        placeholder="Repeat your Password"
        secureTextEntry
      />

      <View style={styles.input}>
        <input
          onChange={onImageChange}
          className="input_file"
          type="file"
          accept="image/*"
        />
      </View>

      {/* <Image>

      </Image> */}

      <Pressable style={styles.button} onPress={() => onRegister()}>
        <Text>Register</Text>
      </Pressable>

      {/* <Pressable style={styles.button} onPress={() =>{
        setButtonPresses(buttonPresses + 1)
      }}>       
        <Text style={styles.text}>Register</Text>
       
      </Pressable> */}
    </View>
  );
};

export default Register;
