"use client";

import { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { createMasterCardCheckout } from '@/api/masterCardCheckout';

const createMasterCardPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [docType, setDocType] = useState('CPF');
  const [docNumber, setDocNumber] = useState('');

  const handleSubmit: any = async (e: any) => {
    e.preventDefault()
    if(!cardNumber || !expirationMonth || !expirationYear || !securityCode || !cardholderName || !docType || !docNumber){
      alert('Todos os campos são obrigatórios');
      return;
    }

    try{ 
      const response = await createMasterCardCheckout(cardNumber, expirationMonth, expirationYear, securityCode, cardholderName, docType, docNumber)
      console.log('Meio de pagamento gerado com sucesso!')
      return response.data
    }catch(error: any){
      console.log('Ocorreu um erro ao gerar o meio de pagamento')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Informações de Pagamento</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Número do Cartão"
            variant="outlined"
            fullWidth
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Mês de Expiração"
            variant="outlined"
            fullWidth
            value={expirationMonth}
            onChange={(e) => setExpirationMonth(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Ano de Expiração"
            variant="outlined"
            fullWidth
            value={expirationYear}
            onChange={(e) => setExpirationYear(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Código de Segurança (CVV)"
            variant="outlined"
            fullWidth
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Nome do Titular"
            variant="outlined"
            fullWidth
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Tipo de Documento"
            variant="outlined"
            fullWidth
            value={docType}
            onChange={(e) => setDocType(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Número do Documento"
            variant="outlined"
            fullWidth
            value={docNumber}
            onChange={(e) => setDocNumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Pagar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default createMasterCardPayment;