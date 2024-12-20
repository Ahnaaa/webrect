import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

function Homepage() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeCategory, setActiveCategory] = useState("all");


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
    

  return (
    <div>
        
    {/* Modal */}
    <div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="w-100 pt-1 mb-5 text-right">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="" method="get" class="modal-content modal-body border-0 p-0">
                <div class="input-group mb-2">
                    <input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ..."/>
                    <button type="submit" class="input-group-text bg-success text-light">
                        <i class="fa fa-fw fa-search text-white"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>



    {/* Start Banner Hero */}
    <div id="template-mo-zay-hero-carousel" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="container">
                    <div class="row p-5">
                   
                        <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img class="img-fluid" src="./assets/img/banner_img_02.jpg" alt=""
                            style={{height:"500px",width:"100%", objectFit:"contain",}}
                            />
                        </div>
                        <div class="col-lg-6 mb-0 d-flex align-items-center">
                            <div class="text-align-left align-self-center">
                                <h1 class="h1 text-success"><b>Thy</b> Store</h1>
                                <h3 class="h2">Glow your style by shop at our store</h3>
                                <p>
                                    ThyThy Shop s your ultimate style destination, blending modern trends with timeless elegance. Explore our curated collection of clothing, jewelry, shoes, and more—where fashion meets individuality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="carousel-item">
                <div class="container">
                    <div class="row p-5">
                        <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img class="img-fluid" src="./assets/img/banner_img_03.jpg" alt=""
                            style={{height:"500px",width:"100%", objectFit:"contain",}}
                            />
                        </div>
                        <div class="col-lg-6 mb-0 d-flex align-items-center">
                            <div class="text-align-left">
                                <h1 class="h1">Unique product</h1>
                                <h3 class="h2"> Explore our curated collection of clothing </h3>
                                <p>
                                Brings you the latest in fashion with a touch of sophistication. From trendy apparel to statement jewelry and footwear, we make every outfit unforgettable. Thank you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
            <i class="fas fa-chevron-left"></i>
        </a>
        <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
            <i class="fas fa-chevron-right"></i>
        </a>
    </div>
    {/* End Banner Hero */}


    {/* Start Categories of The Month */}
    <section class="container py-5">
        <div class="row text-center pt-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">Categories of The Month</h1>
                <p>
                Step into the spotlight with ThyShop's Categories of the Month! This month's handpicked favorites feature must-have styles in clothing, dazzling jewelry, sleek monitors, versatile shoes, and standout football shoes. Elevate your wardrobe and lifestyle with trending essentials designed to impress."
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-4 p-5 mt-3">
            <a href="/men"onClick={(e) => { e.preventDefault(); setActiveCategory("men");}}>
            <img src="./assets/img/category_img_2-3.jpg"  className="rounded-circle img-fluid border" alt="Category"/> </a>
            <h5 className="text-center mt-3 mb-3">Men</h5>
            <p className="text-center"> 
                <a  href="Shop"
              className=" btn btn-success" onClick={() => { setActiveCategory("men");}} > 
                Go Shop </a>
            </p>
              

            </div>
            <div class="col-12 col-md-4 p-5 mt-3">
                <a href="/shoes"> <img src="./assets/img/category_img_3-3.jpg" alt='' class="rounded-circle img-fluid border"/> </a>
                <h2 class="h5 text-center mt-3 mb-3">Women</h2>
                <p class="text-center"><a href="Shop" class="btn btn-success">Go Shop</a></p>
            </div>
            <div class="col-12 col-md-4 p-5 mt-3">
                <a href="/"><img src="./assets/img/category_img_1.jpg" alt='' class="rounded-circle img-fluid border"/></a>
                <h2 class="h5 text-center mt-3 mb-3">Accessories</h2>
                <p class="text-center"><a href="Shop" class="btn btn-success">Go Shop</a></p>
            </div>
        </div>
    </section>
    {/* End Categories of The Month */}


    {/* Start Featured Product */}
    <section class="bg-light">
        <div class="container py-5">
            <div class="row text-center py-3">
                <div class="col-lg-6 m-auto">
                    <h1 class="h1">Featured Product</h1>
                    <p>
                        The holiday campaign's capture freind and loved one under
                        sparkling lights in the shopping store. Most comfortable shirt is here.
                    </p>
                </div>
            </div>
            <div class="row">
            {products.length > 0 ? (
                        products.slice(1, 4).map((product) => (
                <div class="col-12 col-md-4 mb-4">
                    <div class="card h-100">
                    <NavLink to ={`/detail/${product.id}`}>
                            <img src={product.image} className="card-img-top" alt="..."  style={{
                            width: "100%",
                            height: "250px",
                            objectFit: "contain",
                            borderRadius: "8px",
                            }}/>
                        </NavLink>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                              <p>
                                {product.rating && product.rating.rate} 
                                <i className="fa fa-star text-warning"></i>

                              </p>
                                <li class="text-muted text-right">${product.price}</li>
                            </ul>
                            <p class="h2 text-decoration-none text-dark">
                                {product.title.substring(0,20)} </p>
                            <p class="card-text">
                                {product.description.substring(0,152)}...
                            </p>
                            <p class="text-muted">Reviews{product.reviews}</p>
                        </div>
                    </div>
                </div>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </div>
    </section>
    </div>
  )
}

export default Homepage
