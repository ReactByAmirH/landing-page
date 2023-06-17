
import React from "react"
export default function About() {
    return (
        <section class="flex items-center justify-between py-8">
            <div class="w-full md:w-1/2 px-4">
                <img className="w-full rounded-lg" src='2.jpg' alt="Placeholder Image" />
            </div>
            <div class="w-full md:w-1/2 px-4">
                <h2 class="text-3xl font-bold mb-4">Section Title</h2>
                <p class="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales consequat pharetra. Nam mattis velit vel sem rutrum luctus. Mauris sit amet arcu lobortis, convallis eros id, euismod ex. Praesent at pulvinar enim. Fusce vel tellus sed ante commodo dignissim in quis tellus.</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
            </div>
        </section>
    )
}