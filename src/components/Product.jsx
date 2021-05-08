import React from 'react';
import {Card,CardMedia,CardContent, CardActions,Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import useStyles from './ProductStyles';

function Product({product, onAddToCart}) {
    const classes = useStyles();
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

            </CardActions>
        </Card>
    )
}

export default Product