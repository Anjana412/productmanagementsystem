import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Viewproducts = () => {
    const [products,setproducts]=useState();
    const [editid,setEditid] = useState(null);

    const fetchproducts = async()=>{
        try {
            const res = await axios.get(`http://localhost:4000/product/viewproduct`,formData);
            setproducts(res.data);
            } catch (error) {
            console.log("Error fetching", error);
            } 
    };
        useEffect(()=>{
            fetchproducts();
        },[]);
        console.log(products);
        
    }

    const handleEdit = async(id,products)=>{ 

        const editiongtask= await axios.get(`http://localhost:4000/product/viewproduct/${id}`,products)


        setEditId(products._id);
        setFormData({
            name:products.name,
            price:products.price,
            category:products.category,
            description:products.description,


        })
    }

    const handleDelete =async (id)=>{
        try{
            const prodcttodelete = await axios.delete(`http://localhost:4000/product/delete/${id}`,products);
            console.log("product deleted");
            

        }
        catch(e){
            console.log(e);
            
        }
    }

    
 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`http://localhost:4000/product/viewproduct`,formData);
      if(editid){
        handleEdit(id,products)
      }
 
      
    } catch (error) {
      console.log(error.message);
    }
  };
   


  return (<>
  <ul>
    
        {products.map((product)=>{
            <li>
            <div key={product._id}>
                <h3>{product.name}</h3>
                <h3>{product.price}</h3>
                <h3>{product.category}</h3>
                <h3>{product.description}</h3>
            
            <button onClick={()=> handleEdit(product)}>edit</button>
            <button onClick={()=>handleDelete(product)}>delete</button>
            </div>
            </li>

        })
    }
    

    </ul>
    </>
  )


export default Viewproducts














