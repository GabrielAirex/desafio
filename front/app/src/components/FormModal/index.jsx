import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from "axios";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useForm, Controller } from "react-hook-form";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const { control, handleSubmit } = useForm({
    defaultValues: {
      title_product: '',
      describe_product: '',
      price_product:'',
      image_product:''
    }
  })


  const onSubmit = (data) => 
  {
  

   

    //data["image_product"] = data["image_product"].files[0]
    console.log(data['image_product'])
    axios.defaults.baseURL = 'https://api-desafio.airex.com.br/';


     axios.post('products/',data , {
       
             mode: 'no-cors',
     headers: {
       'Access-Control-Allow-Origin': '*',
       'Content-Type': 'multipart/form-data',
       'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
     }
   
     


     }).then( response =>  {
       return response['data']})}

  return (
    <div>
      <Button onClick={handleOpen}>


        <AddCircleIcon color="action"/>
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
          <Box sx={style}>
           




          <form onSubmit={handleSubmit(onSubmit)}>

          <Controller
        name="title_product"
        control={control}
        render={({ field }) =>  <TextField
        margin="normal"
        required
        fullWidth

        label="Titulo"
        name="title_product"

       
      />}
      />

<Controller
        name="price_product"
        control={control}
        render={({ field }) =>  <TextField
        margin="normal"
        required
        fullWidth
        label="Preço"
        name="price_product"
        autoComplete="email"
        autoFocus
       
       {...field} />}
      />


<Controller
        name="describe_product"
        control={control}
        render={({ field }) =>  <TextField
        margin="normal"
        required
        fullWidth
        label="Descrição"
        name="describe_product"
      
        autoFocus
       
       {...field} />}
      />


      <Controller
        name="image_product"
        control={control}
        type="file"
        render={({ field }) =>  <input
        type="file"
       {...field} />}
      />


   

<Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar
            </Button>
      </form>

          </Box>
        </Fade>
      </Modal>
    </div>
  );
}