import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center p-5 justify-between bg-white-200 mt-2 mb-2 rounded-xl">

      <div className="flex p-3">
        <img src={item.image} className="h-36 w-36 rounded-lg" alt="" />
      </div>
      <div className="ml-10 flex-grow">
        <div className="space-y-3">
          <h1 className="text-xl text-black-700 font-semibold">{item.title}</h1>
          <h1>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</h1>
          <div className="flex justify-between items-baseline">
            <p className="text-green-700 font-bold">${item.price}</p>
            <div
              onClick={removeFromCart}
              className="text-xl text-red-700 font-semibold cursor-pointer"
            >
              <MdDelete />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CartItem;
