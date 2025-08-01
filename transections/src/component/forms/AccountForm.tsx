import React from "react";
import {
  Box,
  Sheet,
  Typography,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@mui/joy';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


interface AccountFormProps {
  initialData?: {
    id?: string;
    currency?: string;
    amount?: string;
  };
  onSubmit?: (data: {  currency: string; amount: string }) => void;
}

const AccountForm = ({ initialData = {}, onSubmit }: AccountFormProps) => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: {
          currency: initialData.currency || '',
          amount: initialData.amount || ''
        },
      });


  const submitHandler = (data:{currency: string; amount: string}) => {
    if (onSubmit) {
      onSubmit({ ...initialData, ...data });
    }
  };

    return(
        <Sheet
      variant="outlined"
      sx={{
        maxWidth: 400,
        mx: 'auto',
        my: 4,
        p: 3,
        borderRadius: 'sm',
        bgcolor: "transparent"
      }}
    >
      <Typography level="h4" component="h1" mb={2}>
        {initialData?.id ? 'Edit Account' : 'Add Account'}
      </Typography>

      <form onSubmit={handleSubmit(submitHandler)}>
      <FormControl sx={{ mb: 2 }} error={!!errors.currency}>
          <FormLabel>currency</FormLabel>
          <Input
            placeholder="Enter currency"
            {...register('currency', { required: 'currency is required' })}
          />
          {errors.currency && (
            <Typography level="body-sm" color="danger">
              {errors.currency.message}
            </Typography>
          )}
        </FormControl>

        <FormControl sx={{ mb: 2 }} error={!!errors.amount}>
          <FormLabel>Amount</FormLabel>
          <Input
            type="number"
            placeholder="Enter Amount"
            {...register('amount')}
          />
          {errors.amount && (
            <Typography level="body-sm" color="danger">
              {errors.amount.message}
            </Typography>
          )}
        </FormControl>

       <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
          <Button variant="outlined" color= 'primary' type="submit">
            Save
          </Button>
          <Button variant="outlined" color="neutral" onClick={() => navigate(-1)}>
            Cancle
          </Button>
      </Box>
      </form>
    </Sheet>
    )
}

export default AccountForm;