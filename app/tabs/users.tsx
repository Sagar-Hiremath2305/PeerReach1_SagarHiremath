import { View, Text, FlatList, StyleSheet } from "react-native";

const users = [
  { id:"1",name:"Rahul", status:"Online" },
  { id:"2",name:"Sagar", status:"Busy" },
  { id:"3",name:"Abhishek", status: "Working" },
];

export default function UsersScreen() {
  return (
    <View style={styles.container}>
       <Text style={styles.header}>Nearby Users</Text>
      <FlatList
        data={users}
        keyExtractor={(u) => u.id}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
             <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
     padding: 16,
     backgroundColor:"#ae36b9ff"
    },
  header: { 
     fontSize: 24,
      marginBottom: 16, 
     fontWeight: "bold"
     },
  userItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#f3f1f1ff",
  },
  name: { fontSize: 18 },
  status: { color: "white" },
});
