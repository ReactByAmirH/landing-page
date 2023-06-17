import React from "react";

export default function Contact() {
  return(

   <div>
<div className="max-w-4xl mx-auto  px-16">
  <h2 className="text-center mt-10 text-3xl font-bold">Contact Us</h2>
  <form className="mt-10">
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
          Name
        </label>
        <input id="grid-name" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Jane Doe"/>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
          Email
        </label>
        <input id="grid-email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="jane@example.com"/>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-message">
          Message
        </label>
        <textarea id="grid-message" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter your message"></textarea>
      </div>
    </div>
    <div className="flex justify-center">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Send
      </button>
    </div>
  </form>
</div>

   </div>
  )
}
