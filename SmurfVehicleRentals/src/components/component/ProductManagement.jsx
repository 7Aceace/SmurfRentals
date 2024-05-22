import React , {useState} from 'react';
import '../../index.css';
import { db, storage } from '../../firebase/fire';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { UserAuth } from '../../context/AuthContext';

const ProductManagement = () => {
  const {user} = UserAuth();  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const [imageError, setImageError] = useState('');

  const [successMsg, setSuccessMsg] = useState('');
  const [uploadError, setUploadError] = useState('');

  const types =['image/jpg', 'image/jpeg', 'image/png', 'image/PNG']
  const handleProductImg=(e)=>{
    let selectedFile = e.target.files[0];
    if(selectedFile){
      if(selectedFile&&types.includes(selectedFile.type)){
        setImage(selectedFile);
        setImageError('');
      }
      else{
        setImage(null);
        setImageError('Please select a valid file type(jpg or png)')
      }
    }
  }

  const handleAddProducts = (e) => {
    e.preventDefault();
    const storageRef = ref(storage, `vehicle-images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
  
    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, 
      (error) => {
        setUploadError(error.message);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          addDoc(collection(db, 'Vehicles'), {
            name,
            description,
            price: Number(price),
            category,
            url: downloadURL
          }).then(() => {
            setSuccessMsg('Vehicle added successfully');
            setName('');
            setDescription('');
            setPrice('');
            setCategory('');
            document.getElementById('file').value = '';
            setImageError('');
            setUploadError('');
            setTimeout(() => {
              setSuccessMsg('');
            }, 3000)
          }).catch((error) => setUploadError(error.message));
        });
      }
    );
  }
 return (

<div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 bg-white">
<h1 className="font-bold text-center">Admin Dashboard of {user?.firstName}</h1>
  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
    <h1 className="text-2xl font-bold mb-4 dark:text-gray-200">Add Vehicle Rentals</h1>
    {successMsg&&<>
      <div className='success-msg'>{successMsg}</div></>

    }
    
    
    <form className="grid grid-cols-1 gap-4" onSubmit={handleAddProducts}>
      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium dark:text-gray-300">
          Vehicle Name
        </label>
        <input
          id="name"
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          placeholder="Enter vehicle name"
          type="text"
          required 
          onChange={(e)=>setName(e.target.value)} value={name}
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-gray-700 font-medium dark:text-gray-300">
          Description
        </label>
        <textarea
          id="description"
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          placeholder="Enter vehicle description"
          required
          onChange={(e)=>setDescription(e.target.value)} value={description}
        ></textarea>
      </div>
      <div>
        <label htmlFor="price" className="block text-gray-700 font-medium dark:text-gray-300">
          Rent Price
        </label>
        <input
          id="price"
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          placeholder="Enter rent price"
          type="number"
          required
          onChange={(e)=>setPrice(e.target.value)} value={price}
        />
      </div>
      <div>
        <label htmlFor="image" className="block text-gray-700 font-medium dark:text-gray-300">
          Image
        </label>
        <input
          id="file"
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          type="file"
          required
          onChange={handleProductImg}
        />
       
        {imageError&& <>
          <br></br>
          <div className='error-msg'>{imageError} 
        
        </div></>}
      </div>
      <div>
        <label htmlFor="category" className="block text-gray-700 font-medium dark:text-gray-300">
          Category
        </label>
        <select
          id="category"
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          required
          onChange={(e)=>setCategory(e.target.value)} value={category}>
          <option value="">Select a category</option>
          <option value="motorcycle">Motorcycle</option>
          <option value="4-seater">4 Seater</option>
          <option value="7-seater">7 Seater</option>
          <option value="Van-12-seater">Van 12 Seater</option>
         
        </select>
      </div>
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-indigo-600 dark:hover:bg-indigo-700"
      >
        Add Product
      </button>
    </form>
    {uploadError && <>
        <div className='error-msg'>{uploadError} 
        <br></br>
        </div></>
      }
  </div>
</div>
  );
};

export default ProductManagement;