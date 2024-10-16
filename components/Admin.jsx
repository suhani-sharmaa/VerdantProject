import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import { LuLoader2 } from "react-icons/lu";
const Admin = () => {
 const [adminDetails, setAdminDetails] = useState({
  name: '',
  email: ''
 });
 const navigate = useNavigate();
 const url = import.meta.env.VITE_BACKEND_URL;
 const [categories, setCategories] = useState([]);
 const [expandedCategoryIndex, setExpandedCategoryIndex] = useState(null);
 const [categoryModalOpen, setCategoryModalOpen] = useState(false);
 const [subcategoryModalOpen, setSubcategoryModalOpen] = useState(false);
 const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
 const [catName, setCatName] = useState();
 const [loading, setLoading] = useState(true);
 const[create , iscreating] = useState(false);
 const authToken = localStorage.getItem('authToken');
 // Input states for adding categories and subcategories
 const [categoryInput, setCategoryInput] = useState({ name: '', description: '', image: '' });
 const [subcategoryInput, setSubcategoryInput] = useState({ name: '', description: '', image: '' });

 const [display, setDisplay] = useState(true);
 // Function to fetch all categories and their subcategories
 const fetchCategories = async () => {
  try {
   setLoading(true);
   const response = await axios.get(`${url}/api/category`);
   const categoriesData = response.data;

   const updatedCategories = await Promise.all(
    categoriesData.map(async (category) => {
     if (!category.subcategories) {
      category.subcategories = [];
     }
     const subcategoryResponse = await axios.get(`${url}/api/category/${category.name}`);
     category.subcategories = subcategoryResponse.data;
     return category;
    })
   );

   setCategories(updatedCategories);
  } catch (error) {
   console.error('Error fetching Products and Models:', error);
  } finally {
   setLoading(false); // Hide loader after data fetching is done
  }
 };

 //function to get the admin data from db
 const getAdmin = async () => {
  try {
   const responce = await axios.get(`${url}/auth/admin`, {
    headers: {
     "Content-Type": "application/json",
     "token": `${authToken}`
    }
   });
   const details = responce.data;
   setAdminDetails({
    name: details.name,
    email: details.email
   })
  } catch (err) {
   console.log(err);
   location.reload();
   // navigate('/adminLogin');
  }
 }
 // Function to add a new category
 const addCategory = async () => {
  const newCategory = {
    ...categoryInput,
    subcategories: []
  };

  try {
   iscreating(true);
    const response = await axios.post(`${url}/api/category`, newCategory, {
      headers: {
        "Content-Type": "application/json",
        "token": authToken
      }
    });

    // Fetch categories after successfully adding a new one
    await fetchCategories();

    // Show response message to the user
    alert(response.data);

    // Close modal and reset form
    setCategoryModalOpen(false);
    setCategoryInput({ name: '', description: '', image: '' });
  } catch (error) {
    console.error("Error adding category:", error);
    alert("There was an error adding the category.");
  }finally{
   iscreating(false);
  }
};


const addSubcategory = async () => {

 const newSubcategory = {
   ...subcategoryInput
 };

 try {
  iscreating(true);
   const response = await axios.post(`${url}/api/subcategory`, newSubcategory, {
     headers: {
       "Content-Type": "application/json",
       "token": authToken
     }
   });

   alert(response.data);

   // Close modal and reset form inputs
   setSubcategoryModalOpen(false);
   setSubcategoryInput({ name: '', description: '', image: '', category: '' });

   // Optionally, fetch categories again if required
   await fetchCategories();

 } catch (error) {
   console.error("Error adding subcategory:", error);
   alert("There was an error adding the subcategory.");
 } finally{
  iscreating(false);
 }
};


 // Toggle the visibility of subcategories for a specific category
 const toggleDropdown = (index) => {
  if (expandedCategoryIndex === index) {
   setExpandedCategoryIndex(null); // Hide subcategories
  } else {
   setExpandedCategoryIndex(index); // Show subcategories
  }
 };
 window.addEventListener('close', () => {
  localStorage.removeItem('authToken');
 })

 // Fetch categories when the component mounts
 useEffect(() => {
  if(!authToken || authToken === '') {
   navigate('/adminLogin');
  }
  getAdmin();
  if(categories.length === 0) {
   fetchCategories();
  }
 });
 const onchange = (e) => {
  setCategoryInput({ ...categoryInput, [e.target.name]: e.target.value });
  setSubcategoryInput(prevState => ({
   ...prevState,
   ...selectedCategoryIndex,
   category: catName,
   [e.target.name]: e.target.value
  }));
  setDisplay(!(categoryInput.name !== '' && categoryInput.description !== '' && categoryInput.image !== ''));
 };
 const Delete = async (item , id) => {
  const isConfirmed = window.confirm('Are you sure you want to delete this item?');
  if (isConfirmed) {
    try {
      const response = await axios.post(`${url}/api/${item}/delete`, {
        id: id
      }, {
        headers: {
          "Content-Type": "application/json",
          "token": authToken
        }
      });
      alert(response.data);
      setCategories([]);
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("There was an error deleting the item.");
    }
  }
};

 return (
  <div className="min-h-screen bg-gradient-to-r from-green-400 to-green-600 flex flex-col justify-center items-center p-8">
   {/* Admin Details Section */}
   <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-6xl my-8 mt-12">
    <h2 className="text-3xl font-bold text-gray-700 mb-4 text-center">Admin Information</h2>
    <div className="flex items-center justify-between">
     <div className="flex justify-evenly w-full">
      <h3 className="w-fit text-xl font-bold">Name : {!loading ? adminDetails.name : "loading..."}</h3>
      <p className="text-xl font-bold">Email: {!loading ? adminDetails.email : "loading..."}</p>
     </div>
    </div>
   </div>
   <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-6xl">
    <h2 className="text-3xl font-bold text-gray-700 mb-4 border-b-2 pb-2">Available Products</h2>
    <div className="flex flex-col space-y-4 mb-6">
     {loading && <Loader />}
     {!loading && categories.length == 0 && <p className='w-full text-center text-3xl'>No Products Available</p>}

     {categories.map((category, index) => (
      <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col">
       {/* First row: Image, Name, Description */}
       <div className="flex items-center h-full">
        {category.image && (
         <img src={category.image} alt={category.name} className="h-fit w-1/6 object-cover rounded-l" />
        )}
        <div className="flex-1 text-center px-4">
         <strong className="text-lg">{category.name}</strong>
         <p>{category.description}</p>
        </div>
       </div>

       {/* Second row: Add Subcategory, Delete buttons */}
       <div className="flex justify-start mt-4">
        <button
         className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 m-2"
         onClick={() => {
          setSubcategoryModalOpen(true);
          setSelectedCategoryIndex(index);
          setCatName(category.name);
         }}
        >
         Add Model
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 m-2" onClick={() => {
                       Delete('category',category._id);
        }}>Delete</button>
       </div>

       {/* Toggle Show/Hide Subcategories */}
       <button
        className="text-blue-500 hover:underline mt-2"
        onClick={() => toggleDropdown(index)}
       >
        {expandedCategoryIndex === index ? 'Hide Models' : 'Show Models'}
       </button>

       {/* Subcategories */}
       {expandedCategoryIndex === index && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
         {category.subcategories.map((subcategory, subIndex) => (
          <div key={subIndex} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
           {subcategory.image && (
            <img
             src={subcategory.image}
             alt={subcategory.name}
             className="w-20 h-20 object-cover rounded mb-2"
            />
           )}
           <span>{subcategory.name}</span>
           <p>{subcategory.description}</p>
           <div className="flex space-x-2 mt-2">
            <button className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600" onClick={()=>{
              Delete('subCategory' , subcategory._id);
            }}>Delete</button>
           </div>
          </div>
         ))}
        </div>
       )}
      </div>
     ))}
    </div>
    {/* Add Category Button */}
    <div className="w-full flex justify-center">
     <button
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      onClick={() => setCategoryModalOpen(true)}
     >
      Add Product
     </button>
    </div>
   </div>

   {/* Add Category Modal */}
   {categoryModalOpen && (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
     <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
      <h3 className="text-lg font-bold mb-4">Add New Product</h3>
      <input
       type="text"
       placeholder="Category Name"
       name='name'
       value={categoryInput.name}
       onChange={onchange}
       className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
      />
      <textarea
       placeholder="Category Description"
       name="description"
       value={categoryInput.description}
       onChange={onchange}
       className="border border-gray-300 rounded-lg p-2 mb-4 w-full h-40"
      />
      <input
       type="text"
       name="image"
       placeholder="Enter Image URL"
       value={categoryInput.image}
       onChange={onchange}
       className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
      />
      <div className="flex justify-between">
       <button
        onClick={addCategory}
        disabled={display}
        className={`${display ? 'bg-gray' : 'bg-blue'}-500 text-white px-4 py-2 rounded-lg flex justify-evenly items-center`}
       >
        Add Product{create?<LuLoader2 className="animate-spin mx-2"/>:''}
       </button>
       <button
        onClick={() => { setCategoryModalOpen(false) }}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
       >
        Cancel
       </button>
      </div>
     </div>
    </div>
   )}

   {/* Add Subcategory Modal */}
   {subcategoryModalOpen && (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center mt-10">
     <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
      <h3 className="text-lg font-bold mb-4">Add New Model</h3>
      <input
       type="text"
       placeholder="Category Name"
       value={catName}
       disabled={true}
       className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
      />
      <input
       type="text"
       name='name'
       placeholder="Subcategory Name"
       value={subcategoryInput.name}
       onChange={onchange}
       className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
      />
      <textarea
       placeholder="Subcategory Description"
       value={subcategoryInput.description}
       name='description'
       onChange={onchange}
       className="border border-gray-300 rounded-lg p-2 mb-4 w-full h-40"
      />
      <input
       type="text"
       name='image'
       placeholder="Enter Image URL"
       value={subcategoryInput.image}
       onChange={onchange}
       className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
      />
      <div className="flex justify-between">
       <button
        onClick={addSubcategory}
        disabled={display}
        className={`${display ? 'bg-gray' : 'bg-blue'}-500 text-white px-4 py-2 rounded-lg flex items-center justify-evenly`}
       >
        Add Model{create?<LuLoader2 className="animate-spin mx-2"/>:''}
       </button>
       <button
        onClick={() => { setSubcategoryModalOpen(false) }}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
       >
        Cancel
       </button>
      </div>
     </div>
    </div>
   )}
  </div>
 );
};

export default Admin;
