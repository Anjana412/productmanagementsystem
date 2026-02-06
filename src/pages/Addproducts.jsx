import axios from 'axios';
import React, { useState } from 'react'

const Addproducts = () => {
    const [formData,setformData]=useState({
        name:"",
        price:"",
        category:"",
        description:""
    });




    const id = localStorage.getItem('id');

    const handleChange =(e)=>{
        setformData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:4000/product/addproduct',formData);
            setformData(response.data);
            console.log(response);
            


        }
        catch(e){
            console.log(e);
            
        }




    }
  return (
  <>
    <div className='h-full w-screen flex justify-center py-32'>
        <form onSubmit={handleSubmit} className='justify-center items-center '>
            <div className='flex-1'>
            <label className='text-2xl'> Product name:</label>
            <input type="text" placeholder='Enter your product name' name='name'  value={formData.name} onChange={handleChange} className='border rounded m-5'  required/>
            </div> 

            <div className='flex-1'>
            <label className='text-2xl'> Price: </label>
            <input type="text" placeholder='Enter your price' name='price' onChange={handleChange} className='border rounded m-5' value={formData.price} required/>
            </div> 

            <div className='flex-1'>
            <label className='text-2xl'> Categoy: </label>
            <input type="text" placeholder='product category' name='category' onChange={handleChange}   value={formData.category} className='border rounded m-5' required/>
            </div> 

            <div className='flex-1'>
            <label className='text-2xl'> description: </label> 
            <input type="text" placeholder='Add a description' name='description' onChange={handleChange} value={formData.description}  className='border rounded m-5' required/>
            </div>

            <button type='submit' className='border rounded-2xl p-2 ms-48 mt-9'>Submit</button>  
        </form>

    </div>
    </>
  )
}

export default Addproducts