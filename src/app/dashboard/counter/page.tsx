/* @Import */
import React from 'react';
import type { Metadata } from "next";

/* @Components */
import Counter from '@/components/counter/Counter';

export const metadata: Metadata = {
    title: "Dashboard | Counter page",
    description: "Page about counter",
};

 const DashboardCounter = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen h-full w-full">
             <Counter value={50}/>
        </div>
    )
 }
 export default DashboardCounter;