import { create, deleteRecord, find, findById, update } from "../db/queries.js";

export const getAllProducts= async (req,res)=>{
    try {
        const products= await find(); 
        return res.status(200).json({ products });
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error occured"});
    }
};

export const getProduct= async (req,res)=>{
    const id=req.params.id;
    try {
        const product= await findById(id); 
        return res.status(200).json({ product });
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error occured"});
    }
};

export const createProduct= async (req,res)=>{
    const {title, description, price}=req.body;
    
    if (!title || !description || !price){
        return res.status(403).json({message: "Input parameters were not provided"})
    }
    try {

        const product= await create(title,description,price);
        return res.status(201).json({product});

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error occured"});
    }
   
};
export const updateProduct= async (req,res)=>{

    const {title, description, price}=req.body;
    const id=req.params.id;
    
    if (!title || !description || !price){
        return res.status(403).json({message: "Input parameters were not provided"})
    }
    try {

        const product= await update(title,description,price,id);
        return res.status(201).json({product});

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error occured"});
    }
};

export const deleteProduct= async (req,res)=>{
    const id=req.params.id;
    try {
        const product= await deleteRecord(id);
        return res.status(200).json({product});

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error occured"});
    }

};