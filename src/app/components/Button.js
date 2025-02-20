'use client'
const Button = () => {
    const handleClick = () => alert('Button di Klik');

    return(
        <>
          <button onClick={handleClick} className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition font-semibold shadow-lg">Cart</button>
        </>
    )
}

export default Button

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>VPS Ubuntu</title>
//     <script src="https://cdn.tailwindcss.com"></script>
// </head>
// <body class="bg-gray-900 text-white">
//     <div class="flex flex-col items-center justify-center min-h-screen text-center p-6">
//         <h1 class="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Welcome to Your VPS</h1>
//         <p class="text-xl mb-2">You are running on an <span class="text-blue-400 font-semibold">Ubuntu VPS</span>.</p>
//         <p class="text-gray-400 mb-6">Fast, secure, and reliable. Ready for your next project.</p>
//         <div class="mt-6 flex space-x-4">
//             <button class="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition font-semibold shadow-lg">Learn More</button>
//             <button class="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition font-semibold shadow-lg">Get Started</button>
//         </div>
//         <div class="absolute bottom-6 text-gray-500 text-sm">Powered by Ubuntu & Tailwind CSS</div>
//     </div>
// </body>
// </html>
