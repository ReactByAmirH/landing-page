import React from "react";

export default function Footer() {
    return (
        <>
            <footer class="bg-gray-900 text-gray-500 mt-32 ">
                <div class="container mx-auto flex items-center justify-center px-6 py-4">
                 
                    <div class="flex items-center ">
                        <a href="#" class="mx-3 hover:text-gray-300"> Facebook<i class="fab fa-facebook"></i></a>
                        <a href="#" class="mx-3 hover:text-gray-300"> instagram <i class="fab fa-twitter"></i>
                         </a>
                        <a href="#" class="mx-3 hover:text-gray-300"> Linkdin <i class="fab fa-instagram"></i></a>
                    </div>
                    
                </div>
                <div className="flex items-center justify-center">
                        <br /><br />
                    <p class="text-sm text-green-600">تمام حقوق محفوظ است © 2023</p>

                    </div>
            </footer>
        

        </>
    )
}
