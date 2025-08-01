import React,{useState} from 'react';

import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';

import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';

import Sheet from '@mui/joy/Sheet';
import Button  from '@mui/joy/Button';

import { Accounts } from '../interfaces/accounts';
import { useNavigate } from 'react-router-dom';
import { CardActions } from '@mui/joy';
import { KeyboardArrowRight } from '@mui/icons-material';

interface AccountCardProps {
  data: Accounts,
  customerIdParam? : String
}


const AccountCard = ({data, customerIdParam} : AccountCardProps) => {
    const navigate = useNavigate()
    const [isUpdateBalance, setISUpdateBalance] = useState<String>("");
  return (
    <Card orientation="horizontal" variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
     <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
        <Typography level="body-xs" sx={{ fontWeight: 'lg',}} >
                A/c Number
              </Typography>
              <Typography sx={{ fontWeight: 'lg' }} textColor="primary.plainColor">{data.accountNumber}</Typography>
   
        </Box>
      </Box>
      <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
      <Sheet
            sx={{
              bgcolor: 'background.level1',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              justifyContent : 'space-between',
              gap: 2,
              '& > div': { flex: 1 },
              minWidth : 250,
              maxWidth: 250
            }}
          >
            <div >
              <Typography level="body-xs" sx={{ fontWeight: 'lg',}} >
                Name
              </Typography>
              <Typography textColor="primary.plainColor" sx={{ fontWeight: 'md' }}>
        
          {
            data.Customer?.name || ""
          }
        </Typography>
            </div>
            <div >
              <Typography level="body-xs" sx={{ fontWeight: 'lg' }}>
               Balance
              </Typography>
              <Typography sx={{ fontWeight: 'lg' }} textColor="success.plainColor">{data.balance +" "+ data.currency} </Typography>
            </div>
      </Sheet>
          <Button
            variant="outlined"
            color="primary"
            endDecorator={<KeyboardArrowRight />}
            onClick={() => navigate(`/${data.id}/transections`)}
          >
            Show Transections
          </Button>
       </Box>
              <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
            <Button variant="outlined" color="danger" onClick={() =>navigate(`/${data.customer_id}/transection/DEBIT/`)}>
              Debit
            </Button>
            <Button variant="outlined" color="success" onClick={() =>navigate(`/${data.customer_id}/transection/CREDIT/`)}>
              Credit
            </Button>
          </Box>
          
        
         
      
      </CardContent>
    
      {/* <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 0.2,
          writingMode: 'vertical-rl',
          justifyContent: 'center',
          fontSize: 'xs',
          fontWeight: 'xl',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderLeft: '1px solid',
          borderColor: 'divider',
          bgcolor: 'primary.dangerBg',
          width : 40
        }}
      >
        Delete
      </CardOverflow> */}
    </Card>
  );
}

export default AccountCard;