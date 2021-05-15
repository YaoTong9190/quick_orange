import React from 'react';
import {Card,CardMedia,CardContent, CardActions,Typography, IconButton, Button, Modal} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import useStyles from './ProductStyles';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import Comment from './Comment';



function Product({product, onAddToCart}) {
    const classes = useStyles();
    
   const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


    return (
     
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        {product.price.formatted_with_symbol}
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{__html: product.description}} variant='body2' color="textSecondary" />
                        
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton arial-label='Add to Cart' onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
                <IconButton>
                    <ContactMailOutlinedIcon />
                </IconButton>
                <Button onClick={handleClick} style={{ textDecoration: 'none',marginLeft: "auto" }} size="middle" type = "button" variant="contained" color="primary">See Details</Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
                    <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        {product.price.formatted_with_symbol}
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{__html: product.description}} variant='body2' color="textSecondary" />
                    <Comment/>
                </div>
            </CardContent>
                </Popover>
            </CardActions>
            
            
            
        </Card>
       
        
    );
}

export default Product
