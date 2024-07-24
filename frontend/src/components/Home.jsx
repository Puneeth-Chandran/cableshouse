import React from 'react'

const Home = () => {
  return (
    
            <div className="container electronics mb-4">
                <div className="bg-lighter trending-products">
                    <div className="heading heading-flex">
                        <div className="heading-left">
                            <h2 className="title font-weight-bold mb-1">Electronics</h2>
                            {/* <!-- End .title --> */}
                        </div>
                        {/* <!-- End .heading-left --> */}
                    </div>
                    {/* <!-- End .heading --> */}

                    <div className="tab-content tab-content-carousel position-relative">
                        <div className="tab-pane p-0 fade show active" id="electronic-cell-tab" role="tabpanel" aria-labelledby="electronic-cell-link">
                            <div className="electronic-carousel owl-carousel owl-simple carousel-equal-height row cols-2 cols-md-3 cols-lg-4 cols-xl-5 cols-xxl-6"
                                data-toggle="owl" data-owl-options='{
                                    "nav": false, 
                                    "dots": false,
                                    "margin": 0,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":2
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "576": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":5
                                        },
                                        "1400": {
                                            "items":6
                                        }
                                    }
                                }'>
                               

                                <div className="product d-flex flex-column overflow-hidden">
                                    <figure className="mb-0 product-media bg-white d-flex justify-content-center align-items-center">
                                        <span className="product-label label-sale text-uppercase">Sale</span>
                                        <a href="product.html" className="w-100">
                                            <img src="images/demos/demo-26/products/product-23.jpg" alt="Product" className="product-image" width="192" height="192"/>
                                            <img src="/images/demos/demo-26/products/product-23-2.jpg" alt="Product" className="product-image-hover" width="192"
                                                height="192"/>
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon text-dark btn-wishlist" title="Add to wishlist">
                                                <span>add to wishlist</span>
                                            </a>
                                            <a href="popup/quickView.html" className="btn-product-icon text-dark btn-quickview" title="Quick view">
                                                <span>Quick view</span>
                                            </a>
                                            <a href="#" className="btn-product-icon text-dark btn-compare" title="Compare">
                                                <span>Compare</span>
                                            </a>
                                        </div>
                                        {/* <!-- End .product-action-vertical --> */}
                                    </figure>
                                    {/* <!-- End .product-media bg-white d-flex justify-content-center align-items-center --> */}

                                    <div className="product-body">
                                        <div className="product-cat mb-0 text-light text-left">
                                            <a href="#">Digital Cameras</a>
                                        </div>
                                        {/* <!-- End .product-cat  --> */}
                                        <h3 className="product-title letter-spacing-normal font-size-normal mb-0 text-left">
                                            <a href="product.html">Sony - Alpha a6000 Mirrorless Camera</a>
                                        </h3>
                                        {/* <!-- End .product-title letter-spacing-normal font-size-normal --> */}
                                        <div className="product-price mb-1">
                                            <div className="new-price">$549.99</div>
                                            <div className="old-price font-size-normal">$649.99</div>
                                        </div>
                                        {/* <!-- End .product-price --> */}
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{width: "100%"}}></div>
                                                {/* <!-- End .ratings-val --> */}
                                            </div>
                                            {/* <!-- End .ratings --> */}
                                            <span className="ratings-text ml-2">( 7 Reviews )</span>
                                        </div>
                                        {/* <!-- End .rating-container --> */}
                                        <div className="product-nav product-nav-dots">
                                            <a href="#" style={{background: "#eaeaec;"}}>
                                                <span className="sr-only">Color name</span>
                                            </a>
                                            <a href="#" className="active" style={{background: "#333"}}>
                                                <span className="sr-only">Color name</span>
                                            </a>
                                        </div>
                                        {/* <!-- End .product-nav --> */}
                                    </div>
                                    {/* <!-- End .product-body --> */}
                                    <div className="product-action position-relative visible">
                                        <a href="#" className="btn-product btn-cart text-uppercase text-dark text-decoration-none" title="Add to cart">
                                            <span className="text-dark shadow-none">add to cart</span>
                                        </a>
                                    </div>
                                    {/* <!-- End .product-action --> */}
                                </div>
                                {/* <!-- End .product --> */}


                                
                            </div>
                            {/* <!-- End .owl-carousel --> */}
                        </div>
                        {/* <!-- .End .tab-pane --> */}
                        <div className="tab-pane p-0 fade" id="electronic-computer-tab" role="tabpanel" aria-labelledby="electronic-computer-link">
                            <div className="electronic-carousel owl-carousel owl-simple carousel-equal-height row cols-2 cols-md-3 cols-lg-4 cols-xl-5 cols-xxl-6"
                                data-toggle="owl" data-owl-options='{
                                    "nav": false, 
                                    "dots": false,
                                    "margin": 0,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":2
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "576": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":5
                                        },
                                        "1400": {
                                            "items":6
                                        }
                                    }
                                }'>
                               

                                

                                

                                
                            </div>
                            {/* <!-- End .owl-carousel --> */}
                        </div>
                        {/* <!-- .End .tab-pane --> */}
                        
                    </div>
                    {/* <!-- End .tab-content --> */}
                </div>
            </div>
         
  )
}

export default Home;