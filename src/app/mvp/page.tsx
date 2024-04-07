"use client"
import React, { useState, useRef } from 'react';
import Tesseract from 'tesseract.js';
import axios from 'axios';
import { Button } from '@mui/material';

const MVP = () => {
    const [image, setImage] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [extractedText, setExtractedText] = useState<string>('');
    const [responseData, setResponseData] = useState<any>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const fetchData = async () => {
        const options = {
            method: 'POST',
            url: 'https://open-ai21.p.rapidapi.com/conversationgpt35',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'b9b96632e3msh454f62c7867ed71p194989jsnee8ada0775b9',
                'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
            },
            data: {
                messages: [
                    {
                        role: 'user',
                        content: `On April 7, 2024, at approximately 3:00 AM, a hit-and-run accident occurred at the intersection of Oak Avenue and Pine Street. A pedestrian, identified as Sarah Smith, was struck by a vehicle while crossing the street. The vehicle fled the scene without stopping.Witnesses described the vehicle as a dark-colored sedan, but license plate information was not obtained. Sarah Smith sustained moderate injuries and was transported to the hospital for treatment. from this content  tell me ${inputValue}`
                    }
                ],
                web_access: false,
                system_prompt: '',
                temperature: 0.9,
                top_k: 5,
                top_p: 0.9,
                max_tokens: 256
            }
        };

        try {
            const response = await axios.request(options);
            setResponseData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);

        // Resize image
        const resizedImageUrl = await resizeImage(imageUrl);
        setImage(resizedImageUrl);

        // Extract text from resized image
        const extractedText = await extractTextFromImage(resizedImageUrl);
        setExtractedText(extractedText || 'Text extraction failed.');
    };

    const resizeImage = async (imageUrl: string): Promise<string> => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                if (!ctx) throw new Error('Canvas context is null.');

                // Set canvas dimensions
                const maxWidth = 400; // Set your desired maximum width
                const maxHeight = 300; // Set your desired maximum height
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width *= maxHeight / height;
                        height = maxHeight;
                    }
                }

                canvas.width = width;
                canvas.height = height;

                // Draw image on canvas
                ctx.drawImage(img, 0, 0, width, height);

                // Convert canvas to data URL
                const resizedImageUrl = canvas.toDataURL('image/jpeg');

                resolve(resizedImageUrl);
            };

            img.src = imageUrl;
        });
    };

    const extractTextFromImage = async (imageUrl: string): Promise<string | null> => {
        try {
            const { data: { text } } = await Tesseract.recognize(imageUrl);
            return text;
        } catch (error) {
            console.error('Error extracting text:', error);
            return null;
        }
    };

    return (
        <div className="flex flex-col ml-64 mt-[60px] p-10 border">
            <div className="   ">
                <span className="text-2xl text-white">Digitalized Records</span>
                <div className='flex flex-row justify-between '>
                    <div className='flex flex-row  '>
                        <span>   <input type="file" onChange={handleImageUpload} />{image && <img src={image} alt="Uploaded" />}
                        </span>
                        <div className=' p-2 flex flex-col    '>
                            <h2 className='text-xl text-white mb-[20px]'>Extracted Text:</h2>
                            {extractedText && (
                                <div>
                                    <p className='border text-white mb-[20px] p-2'>{extractedText}</p>
                                </div>)
                            }
                            {extractedText &&
                                (<div>
                                    <input className="p-2 w-full bg-[#040620] text-white placeholder-white focus:outline-none mb-[20px]" type="text" value={inputValue} onChange={handleInputChange} placeholder='Ask question based on the data' />

                                    <button className='py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75' onClick={fetchData}>Ask Query</button>
                                    {responseData && (<p className='border '>{responseData.result}</p>)}

                                </div>)
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MVP;