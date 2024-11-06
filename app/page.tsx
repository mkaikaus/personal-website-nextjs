// app/page.js (or your main component file)

"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import { CoverPage } from "@/components/CoverPage"; // Adjust the path as necessary
import Home from "@/components/Home"; // Your existing Home component

export default function Page() {
  const router = useRouter(); // Initialize the router
  const [showCover, setShowCover] = useState(true); // State to manage cover visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCover(false); // Hide the cover after 500 milliseconds
      router.push("/"); // Redirect to the homepage
    }, 500); // Delay of 500 milliseconds

    // Clean up the timer on unmount
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      {/* {showCover ? <CoverPage /> : <Home />} Conditional rendering */}

      {/* <CoverPage /> */}
      <Home />
    </>
  );
}