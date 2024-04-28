'use client'

import ModeToggle from "./ModeToggle";
import ScrollBar from "./ScrollBar";
import AnimatedTextWord from "./AnimatedTextWord";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Modal from "./modal";
import { useState } from "react";
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

import "./titanonefont.css";
import "./waveShadow.css";



export default function Header(){

    const[mujUcetModalIsOpen, setMujUcetModalIsOpen] = useState(false);

    const openMujUcetModal = () => setMujUcetModalIsOpen(true);
    const closeMujUcetModal = () => setMujUcetModalIsOpen(false);
    
    return(
        <> 
            <ScrollBar />
            <div className="bg-[#ffffff75] p-4
                            dark:bg-[#140b0b6c] fixed rounded-full z-40 m-5 flex gap-5">
                <ModeToggle />
                <Avatar>
                    <AvatarImage src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>Menu</MenubarTrigger>
                        <MenubarContent>
                            <a href="#header"><MenubarItem>Domů</MenubarItem></a>
                            <MenubarItem onClick={openMujUcetModal}>Můj účet</MenubarItem>
                            <MenubarItem>Psát</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
            <header id="header" className="flex flex-col justify-center w-full bg-gradient-to-b from-cyan-500 to-cyan-700 font-white text-white p-[90px]
                                dark:from-cyan-950 dark:to-cyan-800">
                    <div className="mt-[200px] tracking-widest font-medium text-9xl first">
                        <AnimatedTextWord text="WEB PROJEKT"/>
                    </div>
                    <div className="font-light mt-4 text-xl sticky"><AnimatedTextWord text="Created by: Leon Suchý, Vojtěch Reiss, Rostislav Kupstov"/></div>
            </header>
            <div className="headerWave"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className="fill-cyan-700 dark:fill-cyan-800" fill-opacity="1" d="M0,256L60,240C120,224,240,192,360,181.3C480,171,600,181,720,165.3C840,149,960,107,1080,112C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg></div>

            {mujUcetModalIsOpen && (<Modal />)}
        </>
    )

}



