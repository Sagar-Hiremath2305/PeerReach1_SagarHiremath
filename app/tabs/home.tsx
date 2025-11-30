import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const chats = [
  {
    id: "1",
    user: "Rahul",
    lastMessage: "Hey, what's up?",
  },
  {
    id: "2",
    user: "Sagar",
    lastMessage: "I am fine,What about you?",
  },
  {
    id: "3",
    user: "Rahul",
    lastMessage: "I am also fine",
  },
  {
    id: "4",
    user: "Sagar",
    lastMessage: "See you tomorrow!",
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recent Chats</Text>

      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => router.push(`/chat/${item.id}`)}
          >
            <Text style={styles.name}>{item.user}</Text>
            <Text style={styles.msg}>{item.lastMessage}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16,
    backgroundColor: "#872894ff"
  },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  chatItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  name: { 
    fontSize: 18, 
    fontWeight: "600" 
  },
  msg: { 
    color: "gray"
   },
});
