import { View, Text, FlatList, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const chatMessages: any = {
  "1": [
    { id: "1", text: "Hello!", fromMe: false },
    { id: "2", text: "Hi Rahul!", fromMe: true },
    { id: "3", text: "See you tomorrow!", fromMe: false },
    { id: "4", text: "Okay Sagar!", fromMe: true },
  ],
  "2": [
     { id: "1", text: "Hello!", fromMe: false },
    { id: "2", text: "Hi Rahul!", fromMe: true },
    { id: "3", text: "See you tomorrow!", fromMe: false },
    { id: "4", text: "Okay Sagar!", fromMe: true },
  ],
    "3": [
    { id: "1", text: "Hello!", fromMe: false },
    { id: "2", text: "Hi Rahul!", fromMe: true },
    { id: "3", text: "See you tomorrow!", fromMe: false },
    { id: "4", text: "Okay Sagar!", fromMe: true },
  ],
  "4": [
     { id: "1", text: "Hello!", fromMe: false },
    { id: "2", text: "Hi Rahul!", fromMe: true },
    { id: "3", text: "See you tomorrow!", fromMe: false },
    { id: "4", text: "Okay Sagar!", fromMe: true },
  ],
};

export default function ChatScreen() {
  const {id} = useLocalSearchParams();
  const messages = chatMessages[id as string];

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(m) => m.id}
        renderItem={({item}) => (
          <View
            style={[
              styles.bubble,
              item.fromMe ? styles.fromMe : styles.fromThem,
            ]}
          >
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:12
},
  bubble:{
    padding:10,
    borderRadius:10,
    marginVertical:6,
    maxWidth: "70%",
  },
  fromMe:{
    backgroundColor:"#rgba(224, 234, 225, 1)",
    alignSelf: "flex-end",
  },
  fromThem:{
    backgroundColor:"#c7d6dbff",
    alignSelf: "flex-start",
  },
});
