
import Loader from './Loader';
import { useState, useEffect } from 'react';
import { LuLoader2 } from "react-icons/lu";
import axios from 'axios';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

export default function ManageProduct() {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [categories, setCategories] = useState([]);
  const [expandedCategoryIndex, setExpandedCategoryIndex] = useState(null);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [subcategoryModalOpen, setSubcategoryModalOpen] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  const [catName, setCatName] = useState();
  const [loading, setLoading] = useState(true);
  const [create, iscreating] = useState(false);
  const [progress, setProgress] = useState(0);
  const[loadingContent ,setLoadingContent] = useState('Add Product');
  // Input states for adding categories and subcategories
  const [categoryInput, setCategoryInput] = useState({ name: '', description: ''});
  const [subcategoryInput, setSubcategoryInput] = useState({ name: '', description: '', image: '', category: '' });

  const [display, setDisplay] = useState(true);
  // Function to add a new category
  const addCategory = async () => {
    setLoadingContent("Uploading Image");
    iscreating(true);
  const downloadURL = await handleUpload();
  const newCategory = {
    ...categoryInput,
    image:downloadURL
  };
  setLoadingContent("Creating Category");
    try {
      const response = await axios.post(`${url}/api/category`, newCategory, {
        withCredentials: true // This is essential for cookies
      });

      // Fetch categories after successfully adding a new one
      await fetchCategories();

      // Show response message to the user
      alert(response.data);

      // Close modal and reset form
      setCategoryModalOpen(false);
      setCategoryInput({ name: '', description: '', image: '' });
      setSubcategoryInput({ categoryId: '',name: '', description: '' });
    } catch (error) {
      console.error("Error adding category:", error);
      alert("There was an error adding the category.");
    } finally {
      iscreating(false);
    }
  };


  const addSubcategory = async () => {
    setLoadingContent("Uploading Image");
    iscreating(true);
  const downloadURL = await handleUpload();
  const newSubcategory = {
    ...subcategoryInput,
    image:downloadURL
  };
  console.log(newSubcategory);
    try {
    setLoadingContent("Creating Model");
      iscreating(true);
      const response = await axios.post(`${url}/api/subcategory`, newSubcategory, {
        withCredentials: true // This is essential for cookies
      });

      alert(response.data);

      // Close modal and reset form inputs
      setSubcategoryModalOpen(false);
      setCategoryInput({ name: '', description: '', image: '' });
      setSubcategoryInput({ name: '', description: '', image: '', category: '' });

      // Optionally, fetch categories again if required
      await fetchCategories();

    } catch (error) {
      console.error("Error adding subcategory:", error);
      alert("There was an error adding the subcategory.");
    } finally {
      iscreating(false);
      setLoadingContent("Add Product");
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

  // Fetch categories when the component mounts
  useEffect(() => {
    if (categories.length === 0) {
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
  setDisplay(!(categoryInput.name !== '' && categoryInput.description !== ''));
  };
  const Delete = async (item, id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this item?');
    if (isConfirmed) {
      try {
        const response = await axios.post(`${url}/api/${item}/delete`, { id }, {
          withCredentials: true // This is essential for cookies
        });
        alert(response.data);
        setCategories([]);
      } catch (error) {
        console.error("Error deleting item:", error);
        alert("There was an error deleting the item.");
      }
    }
  };
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
          const { data } = await axios.get(`${url}/api/category/${category._id}`);
          return data;
        })
      );
      setCategories(updatedCategories);
    } catch (error) {
      console.error('Error fetching Products and Models:', error);
    } finally {
      setLoading(false); // Hide loader after data fetching is done
    }
  };


  const handleChangeCat = (e) => {
    if (e.target.files[0]) {
      setCategoryInput({
       ...categoryInput,
       image:e.target.files[0]
      })
    }
  };
  const handleChangeSubCat = (e) => {
    if (e.target.files[0]) {
      setCategoryInput({
       ...subcategoryInput,
       image:e.target.files[0]
      })
    }
  };

  //upload a image
const handleUpload = async () => {
  const { image } = categoryInput;
  if (!image) {
    return null;
  }

  // Start image upload
  const storageRef = ref(storage, `images/${image.name}`);
  const uploadTask = uploadBytesResumable(storageRef, image);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress);
      },
      (error) => {
        console.error('Error uploading image:', error);
        reject(error); // Reject the promise on error
      },
      async () => {
        // When upload is complete, get the download URL and resolve the promise
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadURL); // Resolve with download URL
      }
    );
  });
};
  
  return (
    <>

      {/* Add Category Modal */}
      {categoryModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg md:mt-10 mx-4 md:w-1/2">
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
            <label className='mx-2'>Product Image</label>
            <input
              type="file"
              onChange={handleChangeCat}
              accept='image/*'
              className="w-full my-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
{ loadingContent == "Uploading Image"  && <div className="w-full mb-3 bg-gray-200 rounded-full h-4">
      <div
        className="bg-emerald-500 h-full rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>}
            <div className="flex justify-between">
              <button
                onClick={addCategory}
                disabled={display}
                className={`${display ? 'bg-gray-500' : 'bg-blue-500'} text-white px-4 py-2 rounded-lg flex justify-evenly items-center`}
              >
                {loadingContent}{create?<LuLoader2 className="animate-spin mx-2" /> : ''}
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
        <div className="fixed -inset-10 bg-gray-900 bg-opacity-50 flex justify-center items-center mt-10">
          <div className="bg-white p-8 rounded-lg shadow-lg">
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
              className="border border-gray-300 rounded-lg p-2 mb-4 w-full h-28"
            />
            <label className='mx-2'>Product Image</label>
            <input
              type="file"
              onChange={handleChangeSubCat}
              accept='image/*'
              className="w-full my-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
{ loadingContent == "Uploading Image"  && <div className="w-full mb-3 bg-gray-200 rounded-full h-4">
      <div
        className="bg-emerald-500 h-full rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>}
            <div className="flex justify-between">
              <button
                onClick={addSubcategory}
                disabled={display}
                className={`${display ? 'bg-gray-500' : 'bg-blue-500'} text-white px-4 py-2 rounded-lg flex items-center justify-evenly`}
              >
                {loadingContent == "Add Product"?"Add Model":loadingContent}{create ? <LuLoader2 className="animate-spin mx-2" /> : ''}
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
                Delete('category', category._id);
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
                        className=" w-3/4 h-1/3 object-cover rounded mb-2"
                      />
                    )}
                    <span className='text-md font-bold'>{subcategory.name}</span>
                    <p className='text-sm'>{subcategory.description}</p>
                    <div className="flex space-x-2 mt-2">
                      <button className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600" onClick={() => {
                        Delete('subCategory', subcategory._id);
                      }}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
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
    </>
  )
}
