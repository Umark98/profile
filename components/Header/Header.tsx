import React, { useRef, useState, useEffect, useContext } from "react";
import Logo from "./Headercomp/Logo";
import DesktopMenu from "./Headercomp/DesktopMenu";
import IconMenu from "./Headercomp/IconMenu";
import MobileMenu from "./Headercomp/MobileMenu";
import { motion } from "framer-motion";
import AppContext from "../AppContextFolder/AppContext";

// Utility function to add a class to an element (fixed typo)
const addClass = (ref: any, myclass: string) => {
  ref.current?.classList.add(myclass);
};

const Header = (props: { finishedLoading: boolean, sectionsRef: any }) => {
  const RefNavBar = useRef<HTMLDivElement>(null);
  const [ShowElement, setShowElement] = useState(false);
  const [rotate, setRotate] = useState<boolean>(false);
  const context = useContext(AppContext);
  const scrollSizeY = useRef<number>(0);

  // Handle scroll event to hide or show the navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (scrollSizeY.current === 0) {
        scrollSizeY.current = currentScrollY;
      } else if (currentScrollY > 50) {
        if (currentScrollY > scrollSizeY.current) {
          if (RefNavBar.current) {
            RefNavBar.current.classList.remove("translate-y-0");
            RefNavBar.current.classList.add("-translate-y-full");
          }
        } else {
          if (RefNavBar.current) {
            RefNavBar.current.classList.add("translate-y-0");
            RefNavBar.current.classList.remove("-translate-y-full");
          }
        }
        scrollSizeY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Control body overflow when rotating the menu
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = rotate ? "hidden" : "auto";
    }
  }, [rotate]);

  // Show element after a delay for animation effect
  useEffect(() => {
    setTimeout(() => {
      setShowElement(true);
    }, 1400); // Delay for animation
  }, []);

  return (
    <>
      {/* Mobile visible Navbar component, controlling ShowElement state to hide itself and rotate itself */}
      <MobileMenu rotate={rotate} setRotate={setRotate} setShowElement={setShowElement} ShowElement={ShowElement} />
      
      {/* Navbar */}
      <motion.div
        ref={RefNavBar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { delay: props.finishedLoading ? 0 : 9.4, duration: 0.6 } }} // Adjusted transition
        className={`w-full fixed ${ShowElement ? `bg-opacity-70 shadow-xl` : `bg-opacity-0 `} bg-AAprimary flex justify-between px-6 sm:px-12 py-2 sm:py-4 transition duration-4000 translate-y-0 z-20`}
      >
        {/* Logo */}
        <Logo finishedLoading={props.finishedLoading} />
        
        {/* Icon Menu */}
        <IconMenu
          rotate={rotate}
          setRotate={setRotate}
          setShowElement={setShowElement}
          ShowElement={ShowElement}
          finishedLoading={props.finishedLoading}
        />

        {/* Desktop Menu */}
        <DesktopMenu finishedLoading={props.finishedLoading} />
      </motion.div>
    </>
  );
};

export default Header;
