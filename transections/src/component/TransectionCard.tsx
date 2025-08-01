import React,{useState} from 'react';

import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';

import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';

import Sheet from '@mui/joy/Sheet';
import { CardActions, Tooltip } from '@mui/joy';
import { ITransection } from '../interfaces/transection';


interface TransectionCardProps {  
  data: ITransection
}
const TransectionCard = ({ data }: TransectionCardProps) => {
	return (
    <Card orientation="horizontal" variant="outlined" color={data.type.toLowerCase() === "credit"?"success" : "danger"} sx={{ width: '100%', p:1.5}}>
       
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
              <Typography sx={{ fontWeight: 'lg' }} textColor="primary.plainColor">{data.Account?.accountNumber|| ""}</Typography>
   
        </Box>
         <Tooltip title="View Details" placement="top">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography   sx={{ fontWeight: 'md' }}>{data.date}</Typography>
            </Box>
        </Tooltip>
       
      </Box>
       <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography textColor='background.tooltip' level="body-xs">Description {' : '} </Typography>
            <Typography level="body-xs">{data.description}</Typography>
    </Box>
      <Sheet
            sx={{
              bgcolor: data.type.toLowerCase() === "credit"?"success.softBg" : "danger.softBg",
              borderRadius: 'sm',
              p: 1,
              my: 1,
              display: 'flex',
              justifyContent : 'space-between',
              gap: 2,
              '& > div': { flex: 1 },
              maxWidth: 250
            }}
          >
            <div >
              <Typography level="body-xs" sx={{ fontWeight: 'lg',}} >
                Type
              </Typography>
              <Typography textColor={data.type.toLowerCase() === "credit"?"success.plainColor" : "black"} sx={{ fontWeight: 'md' }}>

          {
            data.type
          }
        </Typography>
            </div>
            <div >
              <Typography level="body-xs" sx={{ fontWeight: 'lg' }}>
               Amount
              </Typography>
              <Typography sx={{ fontWeight: 'lg' }} textColor={data.type.toLowerCase() === "credit"?"success.plainColor" : "danger.plainColor"}>{data.amount} {data.Account?.currency || ""  }</Typography>
            </div>
      </Sheet>
 
         
      
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

export default TransectionCard;