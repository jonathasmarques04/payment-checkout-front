"use client";

import { pixGenerator } from "@/api/pixGenerate";
import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState<number | "">("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleClick = async () => {
    if (!amount || !email || !name) {
      alert("Preencha todos os campos");
      return;
    }

    try {
      const response = await pixGenerator(amount, email, name);
      alert("Pix gerado com sucesso! Código: ");
      window.location.href = response.data.ticket_url
    } catch (error: any) {
      alert("Erro ao gerar o pix: " + error.message);
    }
  };

  return (
    <Grid2 container spacing={2}>
      <Box
        sx={{
          border: "1px solid gray",
          borderRadius: 2,
          width: 300,
          padding: 5,
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="body1">Pix generator</Typography>
        <TextField
          variant="outlined"
          type="number"
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value ? parseFloat(e.target.value) : "")}
        />
        <TextField
          variant="outlined"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{ color: "blue" }}
        >
          Gerar pix
        </Button>
      </Box>
    </Grid2>
  );
}