

function Product(){

    const product1 = "PRODUCT1";
    const product2 = "PRODUCT2";

    return (
        <ul>
            <li> { product1.toUpperCase() } </li>
            <li> { product2.toUpperCase() } </li>
        </ul>
    );
}

export default Product;