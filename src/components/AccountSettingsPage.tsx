// @ts-nocheck
"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function AccountSettingsPage({isLoggedIn, jmeno, prijmeni}) {

    useEffect(() => {
      axios.post("http://localhost/pvd-project/server/image_load.php")
        .then(function(response) {
          if(response.data != false) {
            setCestaKObrazku(response.data);
          }
        })
        .catch(function(error) {
          console.error(error);
        })
    }, []);

    const[cestaKObrazku, setCestaKObrazku] = useState("");

    axios.defaults.withCredentials = true;

    const handleLogout = () => {
        axios.post("http://localhost/pvd-project/server/logout.php")
            .then(function(response) {
                window.location.reload();
            })
            .catch(function(error) {
                console.error(error);
                alert("Nelze se připojit k serveru. Zkuste to prosím později.");
                window.location.reload();
            })
    }
    
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Avatar>
            <AvatarImage className="cursor-pointer" src={(cestaKObrazku == "" ? "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" : "http://localhost/pvd-project" + cestaKObrazku)} />
            <AvatarFallback className="cursor-pointer" style={{fontSize: '10px'}}>Avatar</AvatarFallback>
        </Avatar>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{jmeno + " " + prijmeni}</DialogTitle>
          <DialogDescription>
            Nastavení účtu
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Link href="./account"><Button>Můj účet</Button></Link>
            <Button onClick={handleLogout} className="w-fit bg-red-500 text-white hover:bg-red-700">Odhlásit se</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
