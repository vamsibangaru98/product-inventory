import axios from "axios";

const carturl = "http://localhost:3000/cart";
export const addDetailsToCard = async (product) => {
    console.log(product);
    return await axios.post(carturl, product);
};
export const getCardDetails = async () => {
    return await axios.get(carturl);
};
export const deleteCartItems = async (id) => {
    return await axios.delete(carturl + "/" + id);
};
export const deleteCartItem = async () => {
    return await axios.delete(carturl);
};
export const DecCartQuantity = async (item) => {
    return await axios.put(carturl + "/" + item.id, {
        productName: item.productName,
        quantity: item.quantity >= 1 ? item.quantity - 1 : 0,
        price: item.price,
        manufacturer: item.manufacturer,
        productDescription: item.productDescription,
    });
};
export const incCartQuantity = async (item) => {
    console.log(item);
    return await axios.put(carturl + "/" + item.id, {
        productName: item.productName,
        quantity: item.quantity + 1,
        price: item.price,
        manufacturer: item.manufacturer,
        productDescription: item.productDescription,
    });
};