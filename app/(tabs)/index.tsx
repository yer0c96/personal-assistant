import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const [test, setTest] = useState(false);
  const [todo, setTodo] = useState<string>();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.containter}>
        <Text style={styles.text}>Add a todo</Text>
        <Input
          variant="rounded"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField
            placeholder="Enter Text here..."
            onChangeText={(val) => setTodo(val)}
          />
        </Input>
        <Button
          size="md"
          variant="solid"
          action="primary"
          onPress={() => setTest(!test)}
        >
          <ButtonText>Submit</ButtonText>
        </Button>
        {test && <Text>{todo}</Text>}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: "#18230F",
    paddingTop: 100,
    paddingLeft: 10,
  },
  text: {
    color: "#1F7D53",
  },
});
