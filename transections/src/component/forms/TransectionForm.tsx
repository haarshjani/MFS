import React from "react";
import {
  Box,
  Sheet,
  Typography,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
} from '@mui/joy';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { Accounts } from "../../interfaces/accounts";

interface TransectionFormProps {
  type? : string;
  accountData : Accounts;
  onSubmit?: (data: {  description: string; amount: string }) => void;
}

const TransectionForm = ({type , onSubmit , accountData}: TransectionFormProps) => {

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: {
          description :  '',
          amount: '',
        },
      });


  const submitHandler = (data:{description: string; amount: string}) => {
    if (onSubmit) {
      onSubmit({  ...data });
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
        Transection
      </Typography>
      <Divider sx={{my: 1}}/>
      <Box>
      <Typography level="body-xs" sx={{ fontWeight: 'lg',}} >
                   {
                    type+'ING' +" "+"For Account"
                   }
                   </Typography>
      <Typography textColor="primary.plainColor" sx={{ fontWeight: 'md' }}>
             
               {
                 accountData.accountNumber
               }
             </Typography>
</Box>
{
  type?.toLocaleLowerCase() ==='credit' || type?.toLocaleLowerCase() ==='debit' ? (
    <>
    <Divider sx={{my: 1}}/>
      <form onSubmit={handleSubmit(submitHandler)}>
      <FormControl sx={{ mb: 2 }} error={!!errors.description}>
          <FormLabel>Description</FormLabel>
          <Input
            placeholder="Enter Description"
            {...register('description')}
          />
          {errors.description && (
            <Typography level="body-sm" color="danger">
              {errors.description.message}
            </Typography>
          )}
        </FormControl>

        <FormControl sx={{ mb: 2 }} error={!!errors.amount}>
          <FormLabel>Amount</FormLabel>
          <Input
            type="number"
            placeholder="Enter Amount"
            {...register('amount',{
              required : "Enter Amount"
            })}
          />
          {errors.amount && (
            <Typography level="body-sm" color="danger">
              {errors.amount.message}
            </Typography>
          )}
        </FormControl>

       <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
          <Button variant="outlined" color={type?.toLowerCase() === 'credit' ? 'success' : 'danger'} type="submit">
            {
                type?.toLowerCase() === 'credit' ? 'Credit' : 'Debit'
            }
          </Button>
          <Button variant="outlined" color="neutral" onClick={() => navigate(-1)}>
            Cancle
          </Button>
      </Box>
      </form>
      </>
  ):(
    <Typography level="body-sm" component="h4" mb={2} color="danger">
        Transection must be of Type Debit or credit
      </Typography>
  )
}

    </Sheet>
    )
}

export default TransectionForm;