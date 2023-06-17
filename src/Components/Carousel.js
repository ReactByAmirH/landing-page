import React from "react";

export default function Carousel() {
    return (
        <div className="flex w-full flex-wrap justify-center">
            <div className="bg-red rounded-lg shadow-md mx-8 my-8 overflow-hidden w-1/4">
                <img src="./4.jpg" alt="Placeholder Image" className="w-full h-40 object-cover" />
                <div className="px-6 py-4">
                    <h2 className="font-bold text-xl mb-2 text-center">Card 1</h2>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="px-6 py-4 flex justify-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Learn More</button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md mx-8 my-8 overflow-hidden w-1/4">
                <img src="./3.jpg" alt="Placeholder Image" className="w-full h-40 object-cover" />
                <div className="px-6 py-4">
                    <h2 className="font-bold text-xl mb-2 text-center">Card 2</h2>
                    <p className="text-gray-700 text-base">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="px-6 py-4 flex justify-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Learn More</button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md mx-8 my-8 overflow-hidden w-1/4">
                <img src="./5.jpg" alt="Placeholder Image" className="w-full h-40 object-cover" />
                <div className="px-6 py-4">
                    <h2 className="font-bold text-xl mb-2 text-center">Card 3</h2>
                    <p className="text-gray-700 text-base">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="px-6 py-4 flex justify-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Learn More</button>
                </div>
            </div>
        </div>

    )
}
