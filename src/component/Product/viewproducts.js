// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Nav from "../Nav";
// import "./all.css";
// import ProductCard from "./productcard";
// import ClearIcon from "@mui/icons-material/Clear";
// import {
//   FormControl,
//   Button,
//   List,
//   Card,
//   Typography,
//   CardMedia,
//   IconButton,
//   TextField,
//   InputAdornment,
// } from "@mui/material";
// import { Box } from "@mui/system";
// import AddIcon from "@mui/icons-material/Add";
// import { GET_ALL_PRODUCTS, GET_BY_PRODUCT } from "./service/product-service";
// function ViewAllProducts() {
//   const [showForm, setShowForm] = useState(false);
//   const [query, setQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [prop, setProp] = useState([]);
//   const products = selectedCategory
//     ? prop.filter((a) => a.category === selectedCategory)
//     : prop;
//   const cardStyle = {
//     display: "flex",
//     height: "550px",
//   };
//   const handleAddButton = () => {
//     window.location.href = "/addproduct";
//   };
//   const searchProduct = (query) => {
//     const filteredResults = products.filter((product) =>
//       product.productName.toLowerCase().includes(query.toLowerCase())
//     );
//     setProp(filteredResults);
//   };
//   useEffect(() => {
//     if (query === "") {
//       //window.location.href="/viewproducts"
//       setProp((prevProducts) => [...prevProducts]);
//     } else {
//       searchProduct(query);
//     }
//   }, [query, products]);
//   const handleInputChange = (event) => {
//     const newQuery = event.target.value.toLowerCase();
//     setQuery(newQuery);
//     searchProduct(newQuery);
//   };
//   const handleCancel = () => {
//     window.location.href = "/viewproducts";
//   };
//   const handleRefreshButton = () => {
//     window.location.reload();
//   };

//   const handleViewProduct = (category) => {
//     console.log("category", category);
//     axios
//       .get(`${GET_BY_PRODUCT}${category}`)
//       .then((res) => {
//         if (res.data == null) {
//           alert("no data");
//         }
//         setProp(res.data);
//         setShowForm(true);
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   };

//   useEffect(() => {
//     try {
//       axios.get(GET_ALL_PRODUCTS).then((res) => {
//         setProp(res.data);
//         console.log(products);
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   }, []);

//   return (
//     <div>
//       <Nav />
//       <br></br>
//       <br></br>
//       <div className="m-auto">
//         <br />
//         <Box display="flex" justifyContent="space-between" alignItems="center">
//           <Box display="flex" alignItems="center">
//             <FormControl>
//               <TextField
//                 label="Search Products"
//                 variant="outlined"
//                 value={query}
//                 onChange={handleInputChange}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         style={{ color: "rgba(0, 0, 0, 0.5)" }}
//                         onClick={handleRefreshButton}
//                       >
//                         <ClearIcon />
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//                 style={{ marginLeft: "190px" }}
//               />
//             </FormControl>
//           </Box>
//           <Button
//             className="text-center"
//             color="primary"
//             startIcon={<AddIcon />}
//             onClick={handleAddButton}
//           >
//             Add Product
//           </Button>
//         </Box>

//         <div className="parent-container">
//           <div class="sidebar">
//             <List style={{ color: "black" }}>
//               <div>
//                 <Card style={{ cursor: "pointer", margin: "10px" }}>
//                   <CardMedia
//                     style={{ padding: "5px" }}
//                     component="img"
//                     height="70"
//                     image="/images/all.jpg"
//                     onClick={handleCancel}
//                   />
//                   <Typography
//                     align="center"
//                     style={{ fontSize: "14px", marginBottom: "5px" }}
//                   >
//                     All
//                   </Typography>
//                 </Card>
//               </div>

//               <div>
//                 <Card style={{ cursor: "pointer", margin: "10px" }}>
//                   <CardMedia
//                     style={{ padding: "5px" }}
//                     component="img"
//                     height="70"
//                     image="/images/vege.jpg"
//                     onClick={() => handleViewProduct("VEGETABLES")}
//                   />
//                   <Typography
//                     align="center"
//                     style={{ fontSize: "14px", marginBottom: "5px" }}
//                   >
//                     vegetables
//                   </Typography>
//                 </Card>
//               </div>

//               <div>
//                 <Card style={{ cursor: "pointer", margin: "10px" }}>
//                   <CardMedia
//                     style={{ padding: "5px" }}
//                     component="img"
//                     height="70"
//                     image="/images/fruits.jpg"
//                     onClick={() => handleViewProduct("FRUITS")}
//                   />
//                   <Typography
//                     align="center"
//                     style={{ fontSize: "14px", marginBottom: "5px" }}
//                   >
//                     Fruits
//                   </Typography>
//                 </Card>
//               </div>

//               <div>
//                 <Card style={{ cursor: "pointer", margin: "10px" }}>
//                   <CardMedia
//                     style={{ padding: "5px" }}
//                     component="img"
//                     height="70"
//                     image="/images/grains.jpg"
//                     onClick={() => handleViewProduct("GRAINS")}
//                   />
//                   <Typography
//                     align="center"
//                     style={{ fontSize: "14px", marginBottom: "5px" }}
//                   >
//                     Grains
//                   </Typography>
//                 </Card>
//               </div>
//               <div>
//                 <Card style={{ cursor: "pointer", margin: "10px" }}>
//                   <CardMedia
//                     style={{ padding: "5px" }}
//                     component="img"
//                     height="70"
//                     image="/images/other.jpg"
//                     onClick={() => handleViewProduct("OTHER")}
//                   />
//                   <Typography
//                     align="center"
//                     style={{ fontSize: "14px", marginBottom: "5px" }}
//                   >
//                     All Snacks
//                   </Typography>
//                 </Card>
//               </div>
//               <div>
//                 <Card style={{ cursor: "pointer", margin: "10px" }}>
//                   <CardMedia
//                     style={{ padding: "5px" }}
//                     component="img"
//                     height="70"
//                     image="/images/dairy.jpg"
//                     onClick={() => handleViewProduct("DAIRY")}
//                   />
//                   <Typography
//                     align="center"
//                     style={{ fontSize: "14px", marginBottom: "5px" }}
//                   >
//                     Dairy
//                   </Typography>
//                 </Card>
//               </div>
//               <div>
//                 <Card style={{ cursor: "pointer", margin: "10px" }}>
//                   <CardMedia
//                     style={{ padding: "5px" }}
//                     component="img"
//                     height="70"
//                     image="/images/meat.jpg"
//                     onClick={() => handleViewProduct("MEAT")}
//                   />
//                   <Typography
//                     align="center"
//                     style={{ fontSize: "14px", marginBottom: "5px" }}
//                   >
//                     Meat
//                   </Typography>
//                 </Card>
//               </div>
//               <div>
//                 <Card style={{ cursor: "pointer", margin: "10px" }}>
//                   <CardMedia
//                     style={{ padding: "5px" }}
//                     component="img"
//                     height="70"
//                     image="/images/sea.jpg"
//                     onClick={() => handleViewProduct("SEAFOOD")}
//                   />
//                   <Typography
//                     align="center"
//                     style={{ fontSize: "14px", marginBottom: "5px" }}
//                   >
//                     SeaFood
//                   </Typography>
//                 </Card>
//               </div>
//             </List>
//           </div>
//         </div>

//         <div>
//           {showForm ? (
//             <div className="product-list" style={{ marginLeft: "170px" }}>
//               {prop.length > 0 ? (
//                 prop.map((a) => <ProductCard key={a.productId} product={a} />)
//               ) : (
//                 <div className="no-products-msg">No products available</div>
//               )}
//             </div>
//           ) : (
//             <div className="product-list" style={{ marginLeft: "170px" }}>
//               {products.length > 0 ? (
//                 products.map((a) => (
//                   <ProductCard key={a.productId} product={a} />
//                 ))
//               ) : (
//                 <div className="no-products-msg">No products available</div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
// export default ViewAllProducts;
import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import "./all.css";
import ProductCard from "./productcard";
import ClearIcon from "@mui/icons-material/Clear";
import {
  FormControl,
  Button,
  List,
  Card,
  Typography,
  CardMedia,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import { GET_ALL_PRODUCTS, GET_BY_PRODUCT } from "./service/product-service";
function ViewAllProducts() {
  const [showForm, setShowForm] = useState(false);
  const [prop, setProp] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }
  const handleAddButton = () => {
    window.location.href = "/addproduct";
  };
  const filteredProducts = prop.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log("searchTerm:", searchTerm);
  console.log("filteredProducts:", filteredProducts);

  const handleCancel = () => {
    window.location.href = "/viewproducts";
  };

  const handleViewProduct = (category) => {
    console.log("category", category);
    axios
      .get(`${GET_BY_PRODUCT}${category}`)
      .then((res) => {
        if (res.data == null) {
          alert("no data");
        }
        setProp(res.data);
        setShowForm(true);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    try {
      axios.get(GET_ALL_PRODUCTS).then((res) => {
        setProp(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <Nav />
      <br></br>
      <br></br>
      <div className="m-auto">
        <br />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <FormControl style={{ height: "50px" }}>
              <TextField
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                style={{ marginLeft: "192px" }}
                placeholder="Search"
              />
            </FormControl>
          </Box>
          <Button
            className="text-center"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleAddButton}
          >
            Add Product
          </Button>
        </Box>
        <div className="parent-container">
          <div class="sidebar">
            <List style={{ color: "black" }}>
              <div>
                <Card style={{ cursor: "pointer", margin: "10px" }}>
                  <CardMedia
                    style={{ padding: "5px" }}
                    component="img"
                    height="70"
                    image="/images/all.jpg"
                    onClick={handleCancel}
                  />
                  <Typography
                    align="center"
                    style={{ fontSize: "14px", marginBottom: "5px" }}
                  >
                    All
                  </Typography>
                </Card>
              </div>
              <div>
                <Card style={{ cursor: "pointer", margin: "10px" }}>
                  <CardMedia
                    style={{ padding: "5px" }}
                    component="img"
                    height="70"
                    image="/images/vege.jpg"
                    onClick={() => handleViewProduct("VEGETABLES")}
                  />
                  <Typography
                    align="center"
                    style={{ fontSize: "14px", marginBottom: "5px" }}
                  >
                    vegetables
                  </Typography>
                </Card>
              </div>
              <div>
                <Card style={{ cursor: "pointer", margin: "10px" }}>
                  <CardMedia
                    style={{ padding: "5px" }}
                    component="img"
                    height="70"
                    image="/images/fruits.jpg"
                    onClick={() => handleViewProduct("FRUITS")}
                  />
                  <Typography
                    align="center"
                    style={{ fontSize: "14px", marginBottom: "5px" }}
                  >
                    Fruits
                  </Typography>
                </Card>
              </div>              <div>
                <Card style={{ cursor: "pointer", margin: "10px" }}>
                  <CardMedia
                    style={{ padding: "5px" }}
                    component="img"
                    height="70"
                    image="/images/grains.jpg"
                    onClick={() => handleViewProduct("GRAINS")}
                  />
                  <Typography
                    align="center"
                    style={{ fontSize: "14px", marginBottom: "5px" }}
                  >
                    Grains
                  </Typography>
                </Card>
              </div>
              <div>
                <Card style={{ cursor: "pointer", margin: "10px" }}>
                  <CardMedia
                    style={{ padding: "5px" }}
                    component="img"
                    height="70"
                    image="/images/other.jpg"
                    onClick={() => handleViewProduct("OTHER")}
                  />
                  <Typography
                    align="center"
                    style={{ fontSize: "14px", marginBottom: "5px" }}
                  >
                    All Snacks
                  </Typography>
                </Card>
              </div>
              <div>
                <Card style={{ cursor: "pointer", margin: "10px" }}>
                  <CardMedia
                    style={{ padding: "5px" }}
                    component="img"
                    height="70"
                    image="/images/dairy.jpg"
                    onClick={() => handleViewProduct("DAIRY")}
                  />
                  <Typography
                    align="center"
                    style={{ fontSize: "14px", marginBottom: "5px" }}
                  >
                    Dairy
                  </Typography>
                </Card>
              </div>
              <div>
                <Card style={{ cursor: "pointer", margin: "10px" }}>
                  <CardMedia
                    style={{ padding: "5px" }}
                    component="img"
                    height="70"
                    image="/images/meat.jpg"
                    onClick={() => handleViewProduct("MEAT")}
                  />
                  <Typography
                    align="center"
                    style={{ fontSize: "14px", marginBottom: "5px" }}
                  >
                    Meat
                  </Typography>
                </Card>
              </div>
              <div>
                <Card style={{ cursor: "pointer", margin: "10px" }}>
                  <CardMedia
                    style={{ padding: "5px" }}
                    component="img"
                    height="70"
                    image="/images/sea.jpg"
                    onClick={() => handleViewProduct("SEAFOOD")}
                  />
                  <Typography
                    align="center"
                    style={{ fontSize: "14px", marginBottom: "5px" }}
                  >
                    SeaFood
                  </Typography>
                </Card>
              </div>
            </List>
          </div>
        </div>

        <div>
          {showForm ? (
            <div className="product-list" style={{ marginLeft: "170px" }}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.productId} product={product} />
                ))
              ) : (
                <div className="no-products-msg">No products available</div>
              )}
            </div>
          ) : (
            <div className="product-list" style={{ marginLeft: "170px" }}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.productId} product={product} />
                ))
              ) : (
                <div className="no-products-msg">No products available</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ViewAllProducts;


