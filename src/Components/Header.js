import React from "react";

export default function Header() {
    return (
        <>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    <div className="flex items-center order-first mr-4">
                        <img className="h-8 w-8" src="1.jpg" alt="Logo" />
                        <div className=" flex justify-center ml-36 space-x-16">
                            <a href="#" className="text-Lg font-medium text-white hover:text-gray-300">Home</a>
                            <a href="#" className="text-Lg font-medium text-gray-300 hover:text-white">About</a>
                            <a href="#" className="text-Lg font-medium text-gray-300 hover:text-white">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
            
        </>
    );
}

