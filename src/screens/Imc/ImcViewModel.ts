import { ImcResult } from "@/models/ImcResult";
import { calculateImc } from "@/services/ImcService";
import { isValidNumber } from "@/utils/validators";
import { useState } from "react";

export function useImcViewModel() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<ImcResult | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    if (!isValidNumber(weight) || !isValidNumber(height)) {
      setError("Informe peso e altura válidos");
      setResult(null);
      return;
    }
    setError("");
    setResult(calculateImc(Number(weight), Number(height)));
  }

  return {
    weight,
    height,
    setWeight,
    setHeight,
    result,
    error,
    calculate,
  };
}
