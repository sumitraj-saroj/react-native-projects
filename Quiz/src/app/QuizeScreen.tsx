import { View, Text, StyleSheet } from "react-native";
import QuestionCard from "../components/QuestionCard";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function QuizeScreen() {
  return (
    <SafeAreaView style={styles.page}>
      {" "}
      <View style={styles.contrainer}>
        {/*Hello*/}
        <View>
          <Text style={styles.title}> Question 1/8</Text>
        </View>

        <QuestionCard />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contrainer: {
    backgroundColor: "#FDFEF",
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    textAlign: "center",
    color: "#005055",
  },
});
