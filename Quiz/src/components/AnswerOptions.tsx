import { Text, View, StyleSheet } from "react-native";

export default function AnswerQptions() {
  return (
    <View style={styles.contrainer}>
      <Text>This is Answer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contrainer: {
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 20,
    borderRadius: 100,
  },
});
