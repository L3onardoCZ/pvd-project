"use client"

import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar";
  import { Button } from "@/components/ui/button"
  import { useState, useEffect } from "react";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
  import ModeToggle from "./ModeToggle";
  import Link from 'next/link';
  import axios from "axios";
 import { link } from "fs";
 import LoginPage from "./LoginPage";
 import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";




export default function ActionWindow(){


    const[isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(Boolean(sessionStorage.getItem("isLoggedIn")));
    })



    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 1,
      });

    return(
        <>
        <motion.div 
            ref={ref}
            initial={{x: 100, opacity: 0 }}
            animate={{x: inView ? 0 : -100,opacity: inView ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
            
            className="bg-[#ffffff75] p-4
                                dark:bg-[#140b0b6c] fixed rounded-full z-40 m-5 flex gap-5">
                <ModeToggle />
                <LoginPage />
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger className="cursor-pointer">Menu</MenubarTrigger>
                        <MenubarContent>
                            <Link href="./"><MenubarItem className="h-auto">Domů</MenubarItem></Link>
                            {( isLoggedIn == true ) ? (<Link href="./account"><MenubarItem>Můj účet</MenubarItem></Link>) : <MenubarItem disabled>Můj účet</MenubarItem>}

                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
             {( isLoggedIn == true ) ? (<Link href="./typing"><Button className="h-auto">Psát</Button></Link>) : (<LoginPage />)}
 
            </motion.div>

        </>
    )
}
