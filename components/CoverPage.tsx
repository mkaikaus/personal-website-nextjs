import React, { useState, useEffect } from "react";
import Home from "./Home";
import { Cover } from "./ui/Cover";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/Lamp";

export function CoverPage() {
  const [showHome, setShowHome] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowHome(true);
    }, 1000);
  };

  if (showHome) {
    return (
      
        <Home />
     
    );
  }

  return (
    <main className="bg-[#3B1E54] min-h-screen flex flex-col items-center justify-center">
      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-[#3B1E54] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
      <div className="max-w-7xl w-full space-y-8 text-center">
        
        <h1 className="text-4xl md:text-7xl font-semibold italic text-[#9B7EBD] transition-all duration-300 hover:text-[#F0C1E1]/90">
          Frontend Developer | Maleeha Kaikaus
        </h1>

        <h2 className="text-4xl md:text-5xl font-semibold italic text-[#FFCCEA] transition-all duration-300 hover:text-[#D4BEE4]/90">
          Turning ideas into polished digital interfaces
        </h2>
        
        <div className="mt-12">
          <button
            onClick={handleClick}
            disabled={isTransitioning}
            className={`text-3xl md:text-5xl font-semibold italic text-white 
              transition-all duration-300 
              hover:text-[#FFE3E3] hover:scale-105 
              active:scale-95
              ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <Cover>
              {isTransitioning ? 'Uncovering...' : 'Uncover Details'}
            </Cover>
          </button>
        </div>
      </div>
      </motion.h1>
      </LampContainer>

      {isTransitioning && (
        <div className="fixed inset-0 bg-opacity-20 flex items-center justify-center">
          {/* <div className="text-white text-2xl animate-pulse">
            Uncovering Details...
          </div> */}
        </div>
      )}
    </main>
  );
}


// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Cover } from "./ui/Cover";
// import Link from "next/link";

// export function CoverPage() {
//   const [redirect, setRedirect] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     if (redirect) {
//       const timer = setTimeout(() => {
//         router.push("/Home");
//       }, 2000);

//       return () => clearTimeout(timer);
//     }
//   }, [redirect, router]);

//   const handleClick = () => {
//     setRedirect(true);
//   };

//   return (
//     <main className="bg-[#3B1E54] min-h-screen flex flex-col items-center justify-center p-6">
//       <div className="max-w-4xl w-full space-y-8 text-center">
//         <h1 className="text-4xl md:text-6xl font-semibold italic text-[#FFE3E3] transition-all duration-300 hover:text-[#FFE3E3]/90">
//           Frontend Developer | Maleeha Kaikaus
//         </h1>

//         <h2 className="text-4xl md:text-6xl font-semibold italic text-[#D4BEE4] transition-all duration-300 hover:text-[#D4BEE4]/90">
//           Turning ideas into polished digital interfaces
//         </h2>
        
//         <div className="mt-12">
//           <button
//             onClick={handleClick}
//             disabled={redirect}
//             className={`text-3xl md:text-5xl font-semibold italic text-white 
//               transition-all duration-300 
//               hover:text-[#FFE3E3] hover:scale-105 
//               active:scale-95
//               ${redirect ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//           >
//             <Cover>
//               {redirect ? 'Redirecting...' : 'Uncover Details'}
//             </Cover>
//           </button>
//         </div>
//       </div>

//       {redirect && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="text-white text-2xl animate-pulse">
//             Redirecting to Home...
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }