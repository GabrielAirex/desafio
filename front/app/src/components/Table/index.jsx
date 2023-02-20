import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { ClassNames } from '@emotion/react';
import Modal from '../Modal'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import jwtDecode from 'jwt-decode'







export default function DataTable() {
  const [rows,setRows] = React.useState([]);

  const columns  = [
    { field: 'date_historic', headerName: 'Date', width: 200 },
    { field: 'price_historic', headerName: 'preço', width: 100 } ,

    { field: 'quantity', headerName: 'quantidade', width: 100 } ,
   


  
  
    {
      headerName: 'Itens',
      width: 200, 
      renderCell: (cellValues) => {return (<Modal car ={cellValues.row['products_historic']} flag={false}> <ShoppingBasketIcon/> </Modal>)}
    },

   
  
  ];

  const cookies = document.cookie
  const decoded = jwtDecode(cookies)
  

  React.useEffect( ()=> {
    
     fetch('https://api-desafio.airex.com.br/historic/')
    .then(response => response.json()
    .then(data => {
      
      const filter_data = data.filter( (item) => {return  item.id_user ==decoded['user_id']})


     setRows(filter_data)}))
    
  })
  
  return (
    <Box sx={{ height: 400, width: '50%' }} className ='mx-auto	'>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
   
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />
  </Box>
  );
}