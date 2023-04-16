import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone';
import { useNavigate } from 'react-router-dom'
import '../App.css'

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const MenuItems= [
    {
      text : 'Notes',
      icon : <FormatListBulletedTwoToneIcon />  ,
      path : '/'
    },
    {
      text : 'Create',
      icon : <AddCircleTwoToneIcon />,
      path : '/create'
    }
  ]

  const drawer = (
    <div>
      <Toolbar />
      <List>
        { MenuItems.map(item => (
          <ListItem button key={item.text} 
          onClick={()=> navigate(item.path)} >
            <ListItemIcon>{item.icon} </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        )) }
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  
  return (
      <div style={{display:'flex' }}> 
      
      
      <AppBar 
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            To-Do-List
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        <Drawer className='drawerclass' style={{ backgroundColor:'gray'}}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer className='drawerclass' style={{ backgroundColor:'gray'}}
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box>
    </Box>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
