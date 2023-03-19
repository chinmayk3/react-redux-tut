import React from "react";

function Home() {
  return (
    <div>
        <div className="add-to-cart">
        <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png"
            width={50}
            height={50}
          />
        </div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg"
            width={100}
            height={100}
          />
        </div>
        <div className="text-wrapper item">
          <span>iPhone</span>
          <span>Price : 1,30,000</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home