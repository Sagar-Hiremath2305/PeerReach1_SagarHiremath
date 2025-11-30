import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SettingsScreen() {
  const [profile, setProfile] = useState({ name: "", status: "" });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const stored = await AsyncStorage.getItem("userProfile");
    if (stored) setProfile(JSON.parse(stored));
  };

  const saveProfile = async () => {
    await AsyncStorage.setItem("userProfile", JSON.stringify(profile));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <TextInput
        style={styles.input}
        value={profile.name}
        onChangeText={(v) => setProfile({ ...profile, name: v })}
        placeholder="Your name"
      />

      <TextInput
        style={styles.input}
        value={profile.status}
        onChangeText={(v) => setProfile({ ...profile, status: v })}
        placeholder="Status"
      />

      <TouchableOpacity style={styles.button} onPress={saveProfile}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16,
    backgroundColor:"#821f8bff"
  },
  header: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 20 
  },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderColor: "#f0ededff",
    color:"#f3f2f2ff"
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  btnText: { color: "white", textAlign: "center", fontWeight: "bold" },
});
