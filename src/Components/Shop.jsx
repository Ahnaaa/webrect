import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function Shop() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortOption, setSortOption] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const { addToCart } = useContext(CartContext);


    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data); // Initially show all products
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []); // Run only once on component mount


    useEffect(() => {
        const sortProducts = () => {
            let sortedProducts = [...products];
    
            if (sortOption === "A to Z") {
                sortedProducts.sort((a, b) => a.title.localeCompare(b.title)); 
            }
    
            setFilteredProducts(sortedProducts);
        };
    
        sortProducts();
    }, [sortOption, products]); // Runs whenever sortOption or products change

    useEffect(() => {
        if (activeCategory === "all") {
            setFilteredProducts(products);
        } else if (activeCategory === "men") {
            setFilteredProducts(
                products.filter((product) => product.category === "men's clothing")
            );
        } else if (activeCategory === "women") {
            setFilteredProducts(
                products.filter((product) => product.category === "women's clothing")
            );
        }else if (activeCategory === "jewelery") {
            setFilteredProducts(
                products.filter((product) => product.category === "jewelery")
            );
        } else if (activeCategory === "electronics") {
            setFilteredProducts(
                products.filter((product) => product.category === "electronics")
            );
        }else {
            setFilteredProducts(
                products.filter((product) => product.category === activeCategory)
            );
        }
    }, [activeCategory, products]);
    
    
  
    if (loading) return <p>Loading products...</p>;


  return (
    <div>
        <div className="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="w-100 pt-1 mb-5 text-right">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="" method="get" className="modal-content modal-body border-0 p-0">
                <div className="input-group mb-2">
                    <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..."/>
                    <button type="submit" className="input-group-text bg-success text-light">
                        <i className="fa fa-fw fa-search text-white"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>


    {/*} Start Content  */}
    <div className="container py-5">
        <div className="row">

            <div className="col-lg-3">
                <h1 className="h2 pb-4">Categories</h1>
                <ul className="list-unstyled templatemo-accordion">
                    <li className="pb-3">
                        <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#gender1" data-bs-toggle="collapse" aria-controls="gender"
                        >
                            Gender
                            <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </a>
                        <ul id="gender1" className="collapse show list-unstyled pl-3">
                            <li><a className="text-decoration-none" href="#men" onClick={(e) => {
                                    e.preventDefault();
                                    setActiveCategory("men");
                                }}
                            >Men</a> </li>
                            <li><a className="text-decoration-none" href="#women" onClick={(e) => {
                                    e.preventDefault();
                                    setActiveCategory("women");
                                }}
                                >Women</a></li>
                                
                        </ul>
                    </li>
                    <li className="pb-3">
                            <a
                                className="collapsed d-flex justify-content-between h3 text-decoration-none"
                                href="#collapseSale"
                                data-bs-toggle="collapse" 
                            >
                                Sale
                                <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                            </a>
                            <ul id="collapseSale" className="collapse list-unstyled pl-3">
                                <li><a className="text-decoration-none" href="jewelery" onClick={(e) => {
                                    e.preventDefault();
                                    setActiveCategory("jewelery");
                                }}
                                >jewelery</a></li>
                                <li><a className="text-decoration-none" href="electronics"  onClick={(e) => {
                                    e.preventDefault();
                                    setActiveCategory("electronics");
                                }}
                                >Electronics</a></li>
                            </ul>
                        </li>

                    <li className="pb-3">
                        <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#prodcut">
                            Product
                            <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </a>
                        <ul id="collapseThree" className="collapse list-unstyled pl-3">
                            <li><a className="text-decoration-none" href="#bag">Bag</a></li>
                            <li><a className="text-decoration-none" href="#sweather">Sweather</a></li>
                            <li><a className="text-decoration-none" href="#sunclassName">Sunglass</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="col-lg-9">
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-inline Detail-3 pt-1">
                            <li className="list-inline-item">
                                <a className="h3 text-dark text-decoration-none mr-3" href="#all"onClick={(e) => {
                                    e.preventDefault();
                                    setActiveCategory("all");
                                }}>All</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="h3 text-dark text-decoration-none mr-3" href="/men"onClick={(e) => {
                                    e.preventDefault();
                                    setActiveCategory("men");
                                }}>Men's</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="h3 text-dark text-decoration-none" href="#women" onClick={(e) => {
                                    e.preventDefault();
                                    setActiveCategory("women");
                                }}>Women's</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6 pb-4">
                    <div className="d-flex">
                        <select
                            className="form-control"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                        >
                            <option value="">Featured</option>
                            <option value="A to Z">A to Z</option>
                            <option value="Item">Item</option>
                        </select>
                    </div>
                    </div>



                </div>


                {/*Cart Item */}
                <div className="row">
                {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                        <div className="col-md-4" key={product.id}>
                            <div className="card mb-4 product-wap rounded-0">
                                <div className="card rounded-0">
                                    <NavLink to ={`/detail/${product.id}`} >
                                    <img
                                    src={product.image}
                                    className="card-img rounded-0 img-fluid"
                                    alt={product.title}
                                    style={{
                                        width: "100%",
                                        height: "400px",
                                        objectFit: "contain",}}                                          
                                
                                    />
                                     </NavLink>
                                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul className="list-unstyled">
                                        <li>

                                        <NavLink to ={`/detail/${product.id}`} className="btn btn-success text-white" >
                                            <i className="far fa-heart"></i>
                                        </NavLink>
                                        </li>

                                        <li>
                                        <NavLink to ={`/detail/${product.id}`} className="btn btn-success text-white mt-2">
                                        <i className="far fa-eye"></i>
                                         </NavLink>
                                        </li>

                                        <li>
                                            <button onClick={() => addToCart(product)} className="btn btn-success text-white mt-2" >
                                            <i className="fas fa-cart-plus"></i>
                                            </button>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="card-body">
                                <a href="Detail" className="h3 text-decoration-none">
                                {product.title.substring(0,12)}
                                </a>
                                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                <li>M/L/X/XL</li>
                                <li className="pt-2">
                                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"> </span>
                                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                </li>
                                </ul>
                              <p className="lead text-warning text-center">
                                 {product.rating && product.rating.rate}
                                <i className="fa fa-star"> </i>
                              </p>
                                <p className="text-center mb-0">${product.price}</p>
                            </div>
                            </div>
                        </div>
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>


                <div div="row">
                    <ul className="pagination pagination-lg justify-content-end">
                        <li className="page-item disabled">
                            <a className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#1" tabindex="-1">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#2">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#3">3</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    {/*} End Content  */}

    {/*} Start Brands  */}
    <section className="bg-light py-5">
        <div className="container my-4">
            <div className="row text-center py-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Our Brands</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div className="col-lg-9 m-auto tempaltemo-carousel">
                    <div className="row d-flex flex-row">
                        {/*}Controls */}
                        <div className="col-1 align-self-center">
                            <a className="h1" href="#multi-item-example" role="button" data-bs-slide="prev">
                                <i className="text-light fas fa-chevron-left"></i>
                            </a>
                        </div>
                        {/*}End Controls */}

                        {/*}Carousel Wrapper */}
                     
                        {/*}End Carousel Wrapper */}

                        {/*}Controls */}
                        <div className="col-1 align-self-center">
                            <a className="h1" href="#multi-item-example" role="button" data-bs-slide="next">
                                <i className="text-light fas fa-chevron-right"></i>
                            </a>
                        </div>
                        {/*}End Controls */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*} End Brands */}



    </div>
  )
}

export default Shop
