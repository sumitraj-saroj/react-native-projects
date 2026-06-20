import { Text, View, StyleSheet } from "react-native";
import AnswerQptions from "./AnswerOptions";

export default function QuestionCard() {
  return (
    <View style={styles.questionCard}>
      <Text style={styles.question}> Hello</Text>
      <View style={{ gap: 10 }}>
        <AnswerQptions />
        <AnswerQptions />
        <AnswerQptions />
        <AnswerQptions />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  questionCard: {
    backgroundColor: "white",
    padding: 20,
    paddingVertical: 40,
    borderRadius: 20,
    gap: 20,

    // Shaddow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  question: {
    fontSize: 20,
    fontWeight: "500",
  },
});
