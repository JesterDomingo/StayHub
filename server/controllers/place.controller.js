import fs from 'fs';
import express from 'express'
import auth from '../../client/auth/auth-helper.js';
import path from 'path';
const app = express();

import  Place  from '../models/place.model.js'

const uploadPhoto = async(req, res) => {
    try
    {
        const uploadedFiles = [];
        for(let i=0; i<req.files.length; i++)
        {
            const {path, originalname} = req.files[i];

            const extension = originalname.split(".");
            const ext = extension[extension.length-1];

            const newPath = path + "." + ext;
            fs.renameSync(path, newPath);

            uploadedFiles.push(newPath.replace("uploads\\", ""));
        }

        res.status(200).json(uploadedFiles);

    }
    catch(error)
    {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during file upload' });
    }
};

const addNewPlace = async(req, res) => {
    try
    {
        const {title, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price, user} = req.body;
        const userData = user;

        const placeDoc = await Place.create({
            owner: userData._id,
            title, address, photos:addedPhotos, 
            description, perks, extraInfo, 
            checkIn, checkOut, maxGuests, price
        })

        res.status(201).json(placeDoc);


    }
    catch(error)
    {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while saving place' });
    }
}

const getPlaces = async(req, res) => {
    try
    {
        const limit =  20;


        const places = await Place.find().limit(limit);
        res.status(200).json(places);
    }
    catch(error)
    {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while getting all places' });
    }
}

const getPlaceData = async(req, res) => {
    try
    {
        const {id} = req.params;
        const data = await Place.findById({_id:id});
        res.json(data);

    }
    catch(error)
    {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while editing place' })
    }
}

const getUserPlaces = async(req, res) => {
    try
    {
        const {id} = req.query;
        
        const data = await Place.find({owner: id});
        res.status(200).json(data);
    }
    catch(error)
    {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while getting all places' });
    }
}


export default { uploadPhoto, addNewPlace, getPlaces, getPlaceData, getUserPlaces};