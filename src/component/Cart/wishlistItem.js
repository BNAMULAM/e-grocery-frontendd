import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ADD_TO_CART_URL, WISHLIST_DELETE_URL } from "./services/cart-service";

const WishlistItem = ({ item, products }) => {
  
  const handleAddToCart2 = async () => {
    const cartDTO = {
      productId: products[0].productId,
      totalPrice: products[0].price,
      userid: localStorage.getItem("userId"),
      userName: localStorage.getItem("userName"),
    };

    try {
      const response = await axios.post(ADD_TO_CART_URL, cartDTO);
      console.log(response.data, "adding data");

      await axios.delete(`${WISHLIST_DELETE_URL}${item.wishlistId}`);
      toast.success("Item added to cart successfully!", { autoClose: 600 });
      setTimeout(() => {
        window.location.reload();
      }, 800);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveClick = async () => {
    try {
      const response = await axios.delete(
        `${WISHLIST_DELETE_URL}${item.wishlistId}`
      );
      console.log(response.data, "deleting data");
      toast.error("Item removed successfully!", { autoClose: 600 });
      setTimeout(() => {
        window.location.reload();
      }, 800);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      {products.map((product) => (
        <Card
          className="shadow"
          style={{ width: "15rem", textAlign: "center", marginBottom: "60px" }}
        >
          <Card.Img
            variant="top"
            src={`data:image/jpeg;base64,${product.image}`}
            style={{ height: "16rem" }}
          />
          <Card.Body>
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>
              {products.description}
              <br />
              Price: ₹{product.price}
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <Button variant="danger" onClick={handleRemoveClick}>
                Remove
              </Button>
              <Button variant="primary" onClick={handleAddToCart2}>
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default WishlistItem;
