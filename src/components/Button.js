// import { useEffect, useState } from "react";

// export function Button() {
//     const [isVisible, setIsVisible] = useState(false);
//     useEffect(() => {
//       function toggleVisibility() {
//         if(window.scrollY > 100){
//           setIsVisible(true);
//         }else{
//           setIsVisible(false);
//         }
//       }
//       window.addEventListener("scroll", toggleVisibility);
//       return () => window.removeEventListener("scroll", toggleVisibility);
//     }, []);

//     function scrollToTop() {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//       });
//     }

//     return (
//       isVisible && <button onClick={scrollToTop} className="btn" id="topBtn">Top</button>  
//     );
// }