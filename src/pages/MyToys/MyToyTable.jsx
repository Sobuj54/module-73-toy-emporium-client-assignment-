import { FaPen, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyToyTable = ({ loadedToy, count, allToys, setAllToys }) => {
  const { _id, seller, toy, subCategory, price, quantity, email } = loadedToy;

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/addedToys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount === 1) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = allToys.filter((toys) => toys._id !== id);
              setAllToys(remaining);
            }
          });
        }
      });
  };

  return (
    <>
      {/* row 1 */}
      <tr>
        <th>{count}</th>
        <td>{toy}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{seller}</td>
        <td>{email}</td>
        <td className=" w-2/12 space-x-2">
          <button className="btn btn-success text-white">
            <FaPen />
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-error text-white">
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyToyTable;
