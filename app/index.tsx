import {useState} from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet }from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useRouter} from "expo-router";

export default function Welcome() {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleContinue = async () => {
    if (!name.trim()) return;

    // 1. Save the name
    await AsyncStorage.setItem(
      "userProfile",
      JSON.stringify({ name: name.trim(), status: "Available" })
    );

    // 2. Go to the "tabs" folder
    // @ts-ignore
    router.replace("/tabs");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ChatApp</Text>

      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
    padding: 20,
    backgroundColor:"#451558ff",
    color: "#f1efefff"
},
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#f4f1f1ff"
},
  input: {
    width: "50%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    color:"#ccc"
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 12,
    width: "50%",
    borderRadius: 8,
  },
  buttonText: { 
    textAlign: "center", 
    color: "white", 
    fontWeight: "bold" },

});