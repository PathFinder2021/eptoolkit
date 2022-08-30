import React, { useState } from 'react';

export default function Products({ setCart, cart }) {
    const [products] = useState([

        {
            productName: 'Kitchen window 1',
            description: "1    "
        },
        {
            productName: 'Kitchen window 2',
            description: "2    "
        },
        {
            productName: 'Bathroom window',
            description: "3    "
        },
        {
            productName: 'Living room window',
            description: "4    "
        },
        {
            productName: 'Bedroom window',
            description: "5    "
        },
    ]);


    const addToCart = (product) => {
        let newCart = [...cart];
        let itemInCart = newCart.find(
            (item) => product.productName === item.name
        );
        if (itemInCart) {
            itemInCart.quantity++;
        }
        else {
            itemInCart = {
                ...product,
                quantity: 1,
            };
            newCart.push(itemInCart);
        }
        setCart(newCart);
    };

    return (
        <>
            <h1>Products</h1>
            <div className="products">
                {products.map((products, index) => (
                    <div className="product" key={index}>
                        <h3>{products.productName}</h3>
                        <button onClick={() => addToCart(products)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}