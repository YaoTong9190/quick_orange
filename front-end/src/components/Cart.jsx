import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import useStyles from "./CartStyle";
import CardItem from './CartItem';
const Cart = ({cart, handleEmptyCartQty,handleRemoveCartQty,handleUpdateCartQty}) => {
    const classes = useStyles();
    const EmptyCart = () => (
        <Typography variant="subtitle1">
            You have no items in your cart, <Link to="/" className={classes.link}> start adding some!</Link>
        </Typography>
    );
    if (!cart.line_items) return 'loading...';
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}> 
                        <CardItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveCartQty={handleRemoveCartQty}/>
                    </Grid>

                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal:{cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type = "button" variant="contained" color="secondary" onClick={handleEmptyCartQty}>Empty Cart</Button>
                    <Link style={{ textDecoration: 'none' }}to="/checkout" > <Button className={classes.checkoutButton} size="large" type = "button" variant="contained" color="primary">Checkout</Button></Link>
               
                </div>
            </div>
            
        </>

    );
    console.log(cart);
    
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3' gutterBottom>
                Your Shopping Cart
            </Typography>
            {!cart.line_items.length? <EmptyCart/>: <FilledCart/>}
        </Container>
    );

};
export default Cart;