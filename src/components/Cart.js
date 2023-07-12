import React, { useEffect, useState } from "react";
import {
    DecCartQuantity,
    deleteCartItems,
    getCardDetails,
    incCartQuantity,
} from "../api/axios";
import axios from "axios";
import { link } from "react-router-dom";
import Header from "../includes/header";
import Button from"react-bootstrap/Button";
import './../includes/spinner.css';

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);
    var totalCartPrice = 0;
    const retriveCart = async () => {
        const response = await getCardDetails();
        setProducts(response.data);
    };
    useEffect(() => {
        retriveCart();
        setTimeout(() => {
            setIsLoaded(false)
        }, 1000);
    },[]);
    const handleDecrement = async (item) => {
        const response = await DecCartQuantity(item);
        console.log(response.status);
        window.location.reload(false);
    };
    const handleIncrement = async (item) => {
        const response = await incCartQuantity(item);
        console.log(response.status);
        window.location.reload(false);
    };
    const deleteCartItem = (e, cart_id) => {
        e.preventDefault();
        console.log(cart_id);
        const response = deleteCartItems(cart_id);
        window.location.reload(false);
    };
    const data = Array.from(products);
    return (
        <>
            <Header />
            {isLoaded ? <div><center><div className="loading-spinner"></div></center></div>:
            <div className="table-responsive" style={{backgroundColor: "#CCdabb", height: "700px"}}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th> Product</th>
                            <th className="text-center"> Price</th>
                            <th className="text-center"> Quantity</th>
                            <th className="text-center"> Total Price</th>
                            <th> Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            totalCartPrice += item.price * item.quantity;
                            return (
                                <tr>
                                    <td width="10%"> {item.productName}</td>
                                    <td width="10%"> {item.price}</td>
                                    <td width="15%">
                                        <div className="input-group">
                                            <button type="button" onClick={() => handleDecrement(item)}
                                            className="input-group-text"> - </button>
                                            {item.quantity}
                                            <button type="button" onClick={() => handleIncrement(item)}
                                            className="input-group-text"> + </button>
                                        </div>
                                    </td>
                                    <td width="10%">{item.price * item.quantity}</td>
                                    <td width="10%">
                                        <button type="button" onClick={(e) => deleteCartItem(e, item.id)}> Remove</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="row">
                    <div className="col-md-8"></div>
                    <div className="col-md-4">
                        <dic className="card card-body mt-3">
                            <h4> Sub Total:
                                <span className=" 'float-end."> {totalCartPrice}</span>
                            </h4>
                            {/* <hr />
                            <Link to="/checkout" className=" 'btn btn-primary"> Checkout</Link> */}
                        </dic>
                    </div>
                </div>
            </div>
}
        </>
    );
};

export default Cart;