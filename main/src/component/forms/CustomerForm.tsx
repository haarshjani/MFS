import * as React from 'react';
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

interface CustomerFormProps {
  initialData?: {
    id?: string;
    name?: string;
    email?: string;
  };
  onSubmit?: (data: { id?: string; name: string; email: string }) => void;
}

const  CustomerForm =({ initialData = {}, onSubmit }: CustomerFormProps) =>{
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: initialData.name || '',
      email: initialData.email || '',
    },
  });

  const submitHandler = (data:{name: string; email: string}) => {
    if (onSubmit) {
      onSubmit({ ...initialData, ...data });
    }
  };

  return (
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
        {initialData?.id ? 'Edit Customer' : 'Add Customer'}
      </Typography>

      <form onSubmit={handleSubmit(submitHandler)}>
        <FormControl sx={{ mb: 2 }} error={!!errors.name}>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter full name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <Typography level="body-sm" color="danger">
              {errors.name.message}
            </Typography>
          )}
        </FormControl>

        <FormControl sx={{ mb: 2 }} error={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter email address"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email',
              },
            })}
          />
          {errors.email && (
            <Typography level="body-sm" color="danger">
              {errors.email.message}
            </Typography>
          )}
        </FormControl>

       <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
          <Button variant="outlined" color="primary" type="submit">
            Save
          </Button>
          <Button variant="outlined" color="neutral" onClick={() => navigate(-1)}>
            Cancle
          </Button>
      </Box>
      </form>
    </Sheet>
  );
}

export default CustomerForm;
