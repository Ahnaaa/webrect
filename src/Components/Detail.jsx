import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function Detail() {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [recommended, setRecommended] = useState([]);
    const [visibleStart, setVisibleStart] = useState(0);
    const [error, setError] = useState(null);
    const { addToCart } = useContext(CartContext);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) throw new Error("Failed to fetch product");
                const productData = await response.json();
                setProduct(productData);

                const recommendedResponse = await fetch(`https://fakestoreapi.com/products/category/${productData.category}`);
                const recommendedData = await recommendedResponse.json();
                setRecommended(recommendedData.filter(item => item.id !== parseInt(id)));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);
    
      
    const handleNext = () => {
        if (visibleStart + 4 < recommended.length) {
            setVisibleStart(prev => prev + 4);
        }
    };

    const handleBack = () => {
        if (visibleStart - 4 >= 0) {
            setVisibleStart(prev => prev - 4);
        }
    };

    if (loading) return <p>Loading product details...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="bg-light">
        <div className="container pb-5">
            <div className="row">
                <div className="col-lg-5 mt-5">
                    <div className="card mb-3">
                        <img className="card-img img-fluid" src={product.image} alt={product.title}
                          style={{
                                width: "100%",
                                height: "500px",
                                objectFit: "contain",}}  />
                    </div>
                    <div className="row">
                        <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                        </div>
                    </div>
                </div>
                {/* col end */}
                <div className="col-lg-7 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="h2">{product.title}</h1>
                            <p className="h3 py-2">${product.price}</p>
                            <p className="py-2">
                                <i className="fa fa-star text-warning"></i>
                                <span className="list-inline-item text-dark">Rating{product.rating&& product.rating.rate} | 36 Comments</span>
                            </p>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <h6>Category:</h6>
                                </li>
                                <li className="list-inline-item">
                                    <p className="text-muted"><strong>{product.category}</strong></p>
                                </li>
                            </ul>

                            <h6>Description:</h6>
                            <p>{product.description}</p>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <h6>Avaliable Color :</h6>
                                </li>
                                <li className="list-inline-item">
                                    <p className="text-muted"><strong>White / Black</strong></p>
                                </li>
                            </ul>

                           

                            <form action="" method="GET">
                                <input type="hidden" name="product-title" value="Activewear"/>
                                <div className="row">
                                    <div className="col-auto">
                                        <ul className="list-inline pb-3">
                                            <li className="list-inline-item">Size :
                                                <input type="hidden" name="product-size" id="product-size" value="S"/>
                                            </li>
                                            <li className="list-inline-item"><span className="btn btn-success btn-size">S</span></li>
                                            <li className="list-inline-item"><span className="btn btn-success btn-size">M</span></li>
                                            <li className="list-inline-item"><span className="btn btn-success btn-size">L</span></li>
                                            <li className="list-inline-item"><span className="btn btn-success btn-size">XL</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <ul className="list-inline pb-3">
                                            <li className="list-inline-item text-right">
                                                Quantity
                                                <input type="hidden" name="product-quanity" id="product-quanity" value="1"/>
                                            </li>
                                            <li className="list-inline-item"><span className="btn btn-success" id="btn-minus">-</span></li>
                                            <li className="list-inline-item"><span className="badge bg-secondary" id="var-value">1</span></li>
                                            <li className="list-inline-item"><span className="btn btn-success" id="btn-plus">+</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col d-grid">
                                        <button type="button" className="btn btn-success btn-lg" value="buy">Buy</button>
                                    </div>
                                    <div className="col d-grid">
                                        <button type="button" className="btn btn-success btn-lg"   onClick={() => addToCart(product)}>Add To Cart</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>

{/* Ralated Product Make it wrok */}

      <div className="py-5">
        <div className="container">
            <div className="row text-left p-2 pb-3">
                <h4>Related Products</h4>
            </div>

            <div id=" carousel-related-product" className="row">
            {recommended.slice(visibleStart, visibleStart + 4).map(item => (
                <div col className="col-md-3 p-2 pb-3" key={item.id}>
                    <div className="mb-4 product-wap card rounded-0">
                        <div className="card rounded-0">
                            <img className="card-img rounded-0 img-fluid" src={item.image} alt= {item.title}
                            style={{height:"400px", width:"100%", objectFit:"contain",}}
                            
                            />
                            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                <ul className="list-unstyled">
                                    
                                    <li>
                                        <NavLink to ={`/detail/${item.id}`} className="btn btn-success text-white" ><i className="far fa-heart"></i></NavLink>
                                        </li>
                                    <li>
                                    <NavLink to ={`/detail/${item.id}`} className="btn btn-success text-white mt-2" ><i className="far fa-eye"></i></NavLink>
                                        </li>
                                    <li>
                                    <NavLink to ={`/detail/${item.id}`} className="btn btn-success text-white mt-2"> <i className="fas fa-cart-plus"></i></NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className=" card-body">
                            <a href="shop-single.html" className="h3 text-decoration-none">
                                {item.title.substring(0, 12)}</a>
                            <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                <li>M/L/X/XL</li>
                                <li className="pt-2">
                                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                </li>
                            </ul>
                            <ul className="list-unstyled d-flex justify-content-center mb-1">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <span className="list-inline-item text-dark">Rating{item.rating&& item.rating.rate}</span>
                                </li>
                            </ul>
                            <p className="text-center mb-0">${item.price}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
     </div>


    </div>

    


    
    );
}

export default Detail;
