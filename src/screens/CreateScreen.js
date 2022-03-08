import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addBlogPost } = useContext(Context);
  // const blogPost = state.find(
  //   (blogPost) => blogPost.id === navigation.getParam("id")
  // );
  return (
    <View>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChange={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChange={(text) => setContent(text)}
      />
      <Button title="Add content" onPress={() => addBlogPost(title, content)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
});

export default CreateScreen;
