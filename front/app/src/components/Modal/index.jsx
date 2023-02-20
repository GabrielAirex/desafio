import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import jwtDecode from 'jwt-decode'
import axios from "axios";
import { PropaneSharp } from '@mui/icons-material';


const style_box = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: 8,

  p: 4,
  width:400
};

const style = {
  width: '100%',
};

export default function TransitionsModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  
  var  total_price = props.car.map ( (item) => {return  item['price_product']}).map(Number).reduce((a, b) => a + b, 0)
  
  var  quantity = props.car.length
  

  
  
  function Buy(){
    
    const cookies = document.cookie
    const decoded = jwtDecode(cookies)
    console.log(props.car)

    const data ={
      id_user : decoded['user_id'],
      price_historic:total_price,
      products_historic : props.car,
      quantity : quantity
      

    }


    axios.defaults.baseURL = 'https://api-desafio.airex.com.br/';

    axios.post('historic/',data , {
      
            mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
    }})
  
    

  }

  return (
    <div>
    

      <Button  onClick={handleOpen}>
          {props.children}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style_box} >

    
      
   

            <List sx={style} component="nav" aria-label="mailbox folders" >

            {props.car.map( (item) => {

return (<>

        <ListItem button >
        <ListItemText primary={item.title_product +": " +item.price_product+"$" }/>
     
             

             

        </ListItem>
      <Divider />
      
    </>

)
})}
              
              </List>
              <div className='flex justify-between	mt-4 ml-4'>
              <Typography >
          Preço total: {total_price } $
          </Typography >

          {props.flag && <Button variant="contained" size="small" onClick={Buy} className="mr-4"> comprar</Button>}
          



              </div>
        
       
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}