import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList, Button,TouchableOpacity} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({navigation}) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  return (
    <View>
      <Button title="addBlogPost" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtrator={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=> navigation.navigate('Show', { id:item.id }) }>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {

  return {
    headerRight: (
      <TouchableOpacity onPress={()=> navigation.navigate('Create')}>
        
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };


}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginVertical: 10
  },
  title: {
    fontSize: 18,
    marginHorizontal:6
  
  },
  icon: {
    fontSize: 22,
  },
});
export default IndexScreen;
