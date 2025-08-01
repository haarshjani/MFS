import React from "react";
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Sheet from '@mui/joy/Sheet';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/joy/Typography';
import { useDisclosure } from './../hooks/useDisclosuer';
import { DialogContent } from "@mui/joy";
import { useNavigate } from "react-router-dom";

const APPBAR_HEIGHT = 70;

const list = [
  { name: 'Accounts', path: '/accounts' },
  { name: 'Customers', path: '/customers' },
  { name: 'Transections', path: '/transections' },]

const DashBoard = () => {
    const { isOpen, open ,close, toggleDrawer} = useDisclosure();
    const navigate = useNavigate()
    return (
    <>
    <Sheet
        variant="solid"
       
        sx={{
          display: 'flex',
          bgcolor: 'transparent',
          boxShadow : 'none',
          alignItems: 'center',
          p: 1,
          position: 'sticky',
          top: 0,
          left : 0,
          right: 0,
          zIndex: 1000,
          height: `${APPBAR_HEIGHT}px`,
        }}
      >
        <IconButton onClick={toggleDrawer()} aria-label="open drawer" sx={{ mr: 1 }}>
          <MenuIcon />
        </IconButton>
        <Typography level="title-lg" textColor="#fff">
          My App
        </Typography>
    </Sheet>
      <Box
        sx={{
          position: 'fixed',
          top: `${APPBAR_HEIGHT}px`,
          left: 0,
          width: isOpen ? '200px' : '0px',
          height: `calc(100% - ${APPBAR_HEIGHT}px)`,
          overflow: 'hidden',
          bgcolor: 'white',
          boxShadow:  'none',
          transition: 'width 0.3s ease',
          zIndex: 1100,
          display : 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
         
        }}
      >
      
          <List sx={{ width: '100%',  p:2  }} onClick={close} onKeyDown={toggleDrawer()}>
            {list.map((item) => (
            <>
              <ListItem key={item.name}  sx={{justifyContent: 'center'}}>
                <ListItemButton onClick={() => navigate(item.path)} >{item.name}</ListItemButton>
              </ListItem>
               <Divider sx={{ my: 1 }}/>
               </>
            ))}
          </List>
    
      </Box>
    </>
    );
}   

export default DashBoard;