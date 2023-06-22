import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModels";

const contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req,res) => {
    let newContact = new contact(req.body);
    
    res.status(200).json(newContact);
    try {
        await newContact.save(); 
        res.status(200).json(newContact);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
