import { ImcResult } from "@/models/ImcResult";

export function calculateImc(weight: number, height: number): ImcResult {
  const imc = weight / (height * height);

  let classification = "";
  if (imc < 18.5) classification = "Abaixo do peso";
  else if (imc < 25) classification = "Peso Normal";
  else if (imc < 30) classification = "Sobrepeso";
  else classification = "Obesidade";

  return {
    value: Number(imc.toFixed(2)),
    classification,
  };
}
