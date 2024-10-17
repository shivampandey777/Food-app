import {v2 as cloudinary} from 'cloudinary';
import {Request, Response} from 'express';
import dotenv from 'dotenv';
import { dot } from 'node:test/reporters';
dotenv.config();

cloudinary.config({
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    cloud_name: process.env.CLOUD_NAME,
});

export default cloudinary;