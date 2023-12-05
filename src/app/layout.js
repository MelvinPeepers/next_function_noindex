// import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }

const handler = async (event, context) => {
  console.time("functionExecution"); // Start measuring function execution time

  // Simulate some async operation (e.g., waiting for 1 second)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.timeLog("functionExecution", "Async operation completed"); // Log time after async operation

  const message = "Hello from Netlify Function using mjs file!";

  console.timeLog("functionExecution", "Message generated"); // Log time after message generation

  const response = {
    statusCode: 200,
    body: JSON.stringify({ message }),
  };

  console.timeEnd("functionExecution"); // End measuring function execution time and display the total time

  return response;
};

export { handler };
