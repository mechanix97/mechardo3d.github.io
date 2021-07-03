import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { render } from "@testing-library/react";


const useStyles = makeStyles((theme) => ({
 root: {
   flexGrow: 1,
 },
 menuButton: {
   marginRight: theme.spacing(2),
 },
 title: {
   flexGrow: 1,
 },
 search: {
   flexGrow: 1,
   borderRadius: theme.shape.borderRadius,
   backgroundColor: fade(theme.palette.common.white, 0.15),
   '&:hover': {
     backgroundColor: fade(theme.palette.common.white, 0.25),
   },
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
     marginLeft: theme.spacing(20),
     marginRight: theme.spacing(20),
     width: 'auto',
   },
 },
 searchIcon: {
   padding: theme.spacing(1, 2),
   float: 'right',
   clear: 'both'
 },
 input: {
   marginLeft: theme.spacing(1),
   marginTop: theme.spacing(1),
   flex: 1,
 },
}));



export class StartBar extends React.Component{
//const StartBar = () => {
    constructor(props){
        super(props);
        const classes = useStyles();
        var count = 0;
    }    

    

    login = () => {
        this.count = this.count + 1 ;
    }
    render() {
    return (
        <AppBar position="static" >
        <Toolbar>
        <IconButton edge="start" className={this.classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
        </IconButton>
        <Button color="inherit"  href={"https://www.mechardo3d.xyz/"}style={{ padding:(10,100,10,10) }}>
            <img  src='/header/logo.png' alt="logo"  crop="fill" secure="true" width="90" height="60" />  
        </Button> 
        
        
        <div className={this.classes.search} >

        <InputBase 
            className={this.classes.input}
            placeholder="Buscar"
            classes={{
            root: this.classes.inputRoot,
            input: this.classes.inputInput,
            }}
            margin="dense"
            inputProps={{ 'aria-label': 'search' }}
        />
        <div className={this.classes.searchIcon}>
            <SearchIcon />
        </div>
        </div>


        <Button color="inherit"  onClick={this.login} >Iniciar {this.count} Sesión</Button>    
        </Toolbar>
    </AppBar>

    );
        } 
}

export default StartBar;