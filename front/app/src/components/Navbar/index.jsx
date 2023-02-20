import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Modal from '../Modal'
import  SpaIcon from '@mui/icons-material/Spa';
import Badge from '@mui/material/Badge';
import FormModal from '../FormModal'



function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>


          <Button>
            <Link to="/home" >
             <SpaIcon  color="action"/>

              
            </Link>
          </Button>



          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>



            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

          <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >

              <Link style={{ textDecoration: "none", color: "white" }} to="/home" preventScrollReset={true} >
                Home

              </Link>


            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >

              <Link style={{ textDecoration: "none", color: "white" }} to="/historico" preventScrollReset={true} >
                Historico

              </Link>


            </Button>


            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >

            </Button>

          </Box>



          <FormModal/>

          <Box >
          
       

            <Tooltip title="Abrir carrinho">


              
              
            
            <Badge badgeContent={props.car.length} color="primary" >
              <Modal car = {props.car} flag ={true}>
              <ShoppingCartIcon  color="action"/>
              </Modal>
              </Badge>
             
              
             
             
            </Tooltip>
      
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;