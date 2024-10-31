import app from "./axios";

export async function createMasterCardCheckout(
  token: any,
  paymentMethodId: any,
  installments: any,
  issuerId: any,
  transactionAmount: any,
  description: any,
  payer: any
) {
  const responseCheckout = await app.post("/create-mastercard-payment", {
    transactionAmount,
    token,
    paymentMethodId,
    installments,
    issuerId,
    description,
    payer: {
      email: payer.email,
      identification: {
        type: payer.identification.type,
        number: payer.identification.number,
      },
    },
  });

  if (responseCheckout.status === 200) {
    return responseCheckout
  } else {
    throw new Error("Error creating payment");
  }
}
