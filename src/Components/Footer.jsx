import React from 'react'

 function Footer() {
  return (
        <div class="bg-dark" id="tempaltemo_footer">

           <div className="container">
            <div className="row">

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-success border-bottom pb-3 border-light logo">ThYThY Shop</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li>
                            <i className="fas fa-map-marker-alt fa-fw"></i>
                            Phnom Penh
                        </li>
                        <li>
                            <i className="fa fa-phone fa-fw"></i>
                            <a className="text-decoration-none" href="tel:096-261-5438">096-261-5438</a>
                        </li>
                        <li>
                            <i className="fa fa-envelope fa-fw"></i>
                            <a className="text-decoration-none" href="mailto:promvuthy44@.com">promvuthy44@gmail.com</a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                    <li><a className="text-decoration-none" href="/shop">Bag</a></li>
                    <li><a className="text-decoration-none" href="/shop">Men's Shirt</a></li>
                        <li><a className="text-decoration-none" href="/shop">Women's Shirt</a></li>
                        <li><a className="text-decoration-none" href="/shop">Popular Dress</a></li>
                        <li><a className="text-decoration-none" href="/shop">Electronic Accessories</a></li>
                        <li><a className="text-decoration-none" href="/shop">Jewelry</a></li>
                    </ul>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li><a className="text-decoration-none" href="/Homepage">Home</a></li>
                        <li><a className="text-decoration-none" href="/About">About Us</a></li>
                        <li><a className="text-decoration-none"  href="https://maps.app.goo.gl/63GZTuSjdcSGnp737" target="_blank" rel="noopener noreferrer">Shop Locations</a></li>
                        <li><a className="text-decoration-none" href="/Contact">FAQs</a></li>
                        <li><a className="text-decoration-none" href="/Contact">Contact</a></li>
                    </ul>
                </div>

            </div>

            <div className="row text-light mb-4">
                <div className="col-12 mb-3">
                    <div className="w-100 my-3 border-top border-light"></div>
                </div>
                <div className="col-auto me-auto">
                    <ul className="list-inline text-left footer-icons">
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" rel= "noopener noreferrer" href="http://facebook.com/"> <i className="fab fa-facebook-f fa-lg fa-fw"> </i> </a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" rel= "noopener noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" rel= "noopener noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" rel= "noopener noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="col-auto">
                    <label className="sr-only" for="subscribeEmail">Email address</label>
                    <div className="input-group mb-2">
                        <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address"/>
                        <div className="input-group-text btn-success text-light">Subscribe</div>
                    </div>
                </div>
            </div>
        </div>
       </div> 
  )
}
export default Footer;
