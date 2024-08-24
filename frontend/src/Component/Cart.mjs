/* eslint-disable jsx-a11y/img-redundant-alt */

const Cart = ({ cart }) => {
  return (
    <div>
      <center >
        
        <h2 className="headin">Cart</h2>
      </center>
      <div className="c">
        {cart.map((product) => (
          <div key={product._id} style={{ width: "25%" }}>
            <div className="card" >
              <div className="img">
                <img src={product.imageUrl} alt="Card image" />
              </div>
              <p>
                <ul className="item">
                  <li className="title">{}</li>

                  <li>Bread: {product.bread}</li>
                  <li>color: {product.color}</li>
                  <li>Price: {product.price}</li>
                </ul>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
