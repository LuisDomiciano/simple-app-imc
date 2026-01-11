import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Text, View } from "react-native";
import { useImcViewModel } from "./ImcViewModel";
import { styles } from "./styles";

export function ImcView() {
  const vm = useImcViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <Input
        testID="weightInput"
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={vm.weight}
        onChangeText={vm.setWeight}
      />

      <Input
        testID="heightInput"
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={vm.height}
        onChangeText={vm.setHeight}
      />
      <Button
        testID="calculateButton"
        title="Calcular"
        onPress={vm.calculate}
      />

      {vm.error ? <Text style={styles.error}>{vm.error}</Text> : null}

      {vm.result ? (
        <Text testID="resultText" style={styles.result}>
          IMC: {vm.result.value} ({vm.result.classification})
        </Text>
      ) : null}
    </View>
  );
}
