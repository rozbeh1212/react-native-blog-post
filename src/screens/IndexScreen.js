import React, { useContext } from "react";
import { View, StyleSheet, Text, FileList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text style={styles}>
        <Button title="addBlogPost" onPress={addBlogPost} />
        <FileList
          data={data}
          keyExtrator={(blogPost) => blogPost.title}
          renderItem={({ item }) => {
            return <Text>{item.title}</Text>;
          }}
        />
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default IndexScreen;
