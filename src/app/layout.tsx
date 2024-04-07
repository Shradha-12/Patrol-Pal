'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Layout from "../components/layout";

import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Dashboard } from "@mui/icons-material";
import DetailView from "./details/page";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className=" " lang="en">
      <body className="">
        <Layout />
        {children}
      </body>
    </html>
  );
}
