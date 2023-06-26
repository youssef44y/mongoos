const express = require('express')
const Contact = require('../models/contactSchema')
const router = express.Router()
 

router.post('/users',async (req,res) => {
    try{
        const newContact = new Contact(req.body)
        await newContact.save()
        res.status(200).json({msg:"success", newContact})
    }catch (err) {res.status(500).json({msg:err.message})}
})

router.get('/users',async (req,res) => {
    try{
        const newContact =  Contact.find()
        
        await newContact.save()
        res.status(200).json({msg:"success", newContact})
    }catch (err) {res.status(500).json({msg:err.message})}
})
router.get('/users/:id',async (req,res) => {
    try{
        const newContact = await Contact.findById(req.params.id)
        if(!newContact)return res.status(404).json({msg:"contact not found"})
        res.status(200).json({msg:"success", newContact})
    }catch (err) {res.status(500).json({msg:err.message})}
})
router.put('/users/:id',async (req,res) => {
    try{
        const newContact = await Contact.findByIdAndUpdate({_id: req.params.id},{...req.body})
        if(!newContact)return res.status(404).json({msg:"contact not found"})
        res.status(200).json({msg:"contact updated", newContact:{...newContact ,...req.body}})
    }catch (err) {res.status(500).json({msg:err.message})}
})
router.delete('/users/:id',async (req,res) => {
    try{
        const newContact = await Contact.findByIdAndDelete(req.params.id)
        if(!newContact)return res.status(404).json({msg:"contact not found"})
        res.status(200).json({msg:"contact deleted", newContact})
    }catch (err) {res.status(500).json({msg:err.message})}
})



module.exports = router


