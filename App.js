import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Homepage from "./screens/Homepage/home"
import Register from "./screens/Register/register"
import Search from "./screens/Search/search"
import TimeTable from "./screens/TimeTable/timeTable"


export default createAppContainer(
  createStackNavigator(
    { Homepage, Register, Search, TimeTable },
    { initialRouteName: "Homepage" }
  )
);

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
