"use client"
import React, { useState, useRef, useEffect } from 'react';
import { REACT_APP_OPEN_API_TOKEN } from '../../components/constant'
import Tesseract from 'tesseract.js';
import axios from 'axios';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LinearProgress from '@mui/material/LinearProgress';
import { Chat } from '@mui/icons-material';
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
interface Chat {
    text: string;
    user: boolean;
}
const MVP = () => {

    const [image, setImage] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [extractedText, setExtractedText] = useState<string>('');
    const [responseData, setResponseData] = useState<any>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [chatHistory, setChatHistory] = useState<Chat[]>([
        { text: 'Have question ask me?', user: false }
    ]);
    const [apiKey, setApiKey] = useState<string>(REACT_APP_OPEN_API_TOKEN);
    const chatContainerRef = useRef<HTMLUListElement>(null);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const fetchData = async (qa: string) => {
        const userMessage: Chat = { text: qa, user: true };
        const newChatHistory = [...chatHistory, userMessage];
        setChatHistory(newChatHistory);
        const options = {
            method: 'POST',
            url: 'https://open-ai21.p.rapidapi.com/conversationgpt35',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': "b9b96632e3msh454f62c7867ed71p194989jsnee8ada0775b9",
                'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
            },
            data: {
                messages: [
                    {
                        role: 'user',
                        content: `On April 7, 2024, at approximately 3:00 AM, a hit-and-run accident occurred at the intersection of Oak Avenue and Pine Street. A pedestrian, identified as Sarah Smith, was struck by a vehicle while crossing the street. The vehicle fled the scene without stopping.Witnesses described the vehicle as a dark-colored sedan, but license plate information was not obtained. Sarah Smith sustained moderate injuries and was transported to the hospital for treatment. from this content  tell me ${qa}`
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
            console.log(options.headers)
            const response = await axios.request(options);
            const responseMessage: Chat = { text: response.data.result, user: false };
            const updatedChatHistory = [...newChatHistory, responseMessage];
            setChatHistory(updatedChatHistory);

        } catch (error) {
            console.error(error);
        }
    };

    const handleChat = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const chat = new FormData(e.currentTarget);
        const chatText = chat.get("chat").toString();
        if (chatText.trim() != '') {
            const newChatHistory = [...chatHistory, { text: chatText, user: true }];
            setChatHistory(newChatHistory);
            fetchData(chatText);
        }
    }
    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);

        // Extract text from resized image
        const extractedText = await extractTextFromImage(imageUrl);
        setExtractedText(extractedText || 'Text extraction failed.');
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
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory]);
    return (
        < >
            <h1 className="text-white text-3xl font-x mb-4 h-full">Digitalized Records</h1>
            <div className='flex flex-col justify-between '>
                <div className='flex flex-row  '>

                    <span>

                        {
                            image && <Image
                                src={image}
                                alt="Uploaded"
                                width='300'
                                height='400'
                                layout="responsive"
                            />
                        }
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload file
                            <VisuallyHiddenInput type="file" onChange={handleImageUpload} />
                        </Button>
                    </span>
                    <div className=' p-2 flex flex-col    '>
                        <h2 className='text-xl text-white mb-[20px]'>Extracted Text:</h2>
                        {extractedText && (
                            <div>
                                <p className='border text-white mb-[20px] p-2  '>{extractedText}</p>
                            </div>)
                        }

                        {image && !extractedText && <LinearProgress />}

                    </div>

                </div>
                {extractedText && <div className="  p-2">
                    <ul className=" border chat-history list-none p-0  h-[400px] overflow-y-scroll hide-scrollbar">

                        {chatHistory.map((message, index) => {
                            return (
                                <li
                                    key={index}
                                    className={`chat-message flex p-3 rounded-lg mb-2 ${message.user ? 'justify-end bg-gray-200 text-gray-800 ml-[100px]' : 'justify-start bg-blue-500 text-white mr-[100px]'
                                        }`}
                                >
                                    {message.text}
                                </li>
                            )
                        }
                        )}
                    </ul>
                    <form id="chat-form" name="chatform" onSubmit={handleChat} className="p-2 flex flex-row w-full sticky bottom-0 z-50">
                        <input className=" placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full" placeholder="Search for anything..." type="text" name="chat" />

                        <Button className=" w-[60px] ml-2 rounded-lg bg-[#474D84] " type="submit">
                            Send
                        </Button>
                    </form>
                </div>}
                {/* {extractedText &&
                    (<div>
                        <input className="p-2 w-full bg-[#040620] text-white placeholder-white focus:outline-none mb-[20px]" type="text" value={inputValue} onChange={handleInputChange} placeholder='Ask question based on the data' />
                        <button className='py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75' onClick={fetchData}>Ask Query</button>
                        {responseData && (<p className='border '>{responseData.result}</p>)}
                    </div>)
                } */}
            </div >
        </>
    )
}

export default MVP;