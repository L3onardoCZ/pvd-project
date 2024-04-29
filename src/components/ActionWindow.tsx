

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
  import { useState, useEffect } from "react";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
  import ModeToggle from "./ModeToggle";
  import Link from 'next/link';
  import axios from "axios";




export default function ActionWindow(){

    const[isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        axios.post("http://localhost:80/pvd-project/server/isLoggedIn.php")
            .then(function(response) {
                console.log(response.data);
                if(response.data != false) {
                    setIsLoggedIn(true);
                    console.log(isLoggedIn);
                } else {
                    setIsLoggedIn(false);
                    console.log(isLoggedIn);
                }
            })
            .catch(function(error) {
                console.log(error);
                setIsLoggedIn(false);
                console.log(isLoggedIn);
            })
    }, []);

    return(
        <>
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
                            {(isLoggedIn == true) ? (<MenubarItem>Odhlásit se</MenubarItem>) : (<MenubarItem>Přihlásit se</MenubarItem>)}
                            <Link href="./"><MenubarItem>Domů</MenubarItem></Link>
                            <Link href="./account"><MenubarItem>Můj účet</MenubarItem></Link>
                            <MenubarItem>Psát</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </>
    )
}
