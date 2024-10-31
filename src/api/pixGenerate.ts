import { redirect } from "next/navigation";
import app from "./axios";

export async function pixGenerator(amount: number, email: string, first_name: string) {
  const pixResponse = await app.post("/create-pix-payment", {
    amount: amount,
    payer: {
      email: email,
      first_name: first_name,
    },
  });
  
  if (pixResponse.status === 201) {
    return pixResponse
  } else {
    throw new Error("Failed to create Pix payment");
  }
}
