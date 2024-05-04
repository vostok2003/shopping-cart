import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-7xl w-full px-4">
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="md:col-span-1">
              <div className="grid grid-cols-1 gap-4">
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between items-center bg-white shadow-md rounded-md p-4">
                    <CartItem item={item} itemIndex={index} />
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col justify-between space-y-5 bg-white shadow-md rounded-md p-4">
                  <div>
                    <div className="font-semibold text-lg text-green-800">Your Cart</div>
                    <div className="text-6xl font-extrabold text-green-800">Summary</div>
                    <div className="text-lg text-green-800">Total Items: {cart.length}</div>
                  </div>
                  <div>
                    <p>Total Amount: ${totalAmount}</p>
                    <button className="bg-green-700 hover:bg-green-600 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 px-6 py-3">
                      CheckOut Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4"> Your Cart is Empty!</h1>
            <Link to="/" className="bg-green-700 hover:bg-green-600 rounded-lg text-white transition duration-300 ease-linear border-2 border-green-600 font-bold hover:text-green-700 px-6 py-3">
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
