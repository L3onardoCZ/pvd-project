"use client"

import { Button } from "@/components/ui/button"
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
import axios from "axios";
import { useEffect, useState } from "react";
import RegisterPage from "./RegisterPage";
import AccountSettingsPage from "./AccountSettingsPage";


export default function LoginPage() {
 
  axios.defaults.withCredentials = true;

  const[isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        axios.post("http://localhost/pvd-project/server/isLoggedIn.php")
            .then(function(response) {
                console.log(response.data);
                setIsLoggedIn(response.data.boolean);
                sessionStorage.setItem("jmeno", response.data.jmeno);
                sessionStorage.setItem("prijmeni", response.data.prijmeni);
            })
            .catch(function(error) {
                console.log(error);
                setIsLoggedIn(false);
            })
      }, []);
 

  const[email, setEmail] = useState("");
  const[heslo, setHeslo] = useState("");

  const[showError, setShowError] = useState(false);

  const handleLogin = () => {

    let data = {
      "email": email,
      "heslo": heslo
    }
    
    axios.post("http://localhost/pvd-project/server/login.php", data)
    .then(function(response) {
        console.log(response.data);
        if(response.data !== false) {
          sessionStorage.setItem("jmeno", response.data.jmeno);
          sessionStorage.setItem("prijmeni", response.data.prijmeni);
          window.location.reload();
        } else {
          setShowError(true);
        }
    })
    .catch(function(error) {
        console.log(error);
        alert("Nelze se připojit k serveru, zkuste to prosím později.");
        window.location.reload();
    })
  }

  
  
  return (
    <Dialog>
      <DialogTrigger asChild>
      {(isLoggedIn == true) ? (<AccountSettingsPage />) : (<Button variant="outline" className="">Přihlásit se</Button>)}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Přihlásit se</DialogTitle>
          <DialogDescription>
            Vyplň e-mail a heslo.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              E-mail
            </Label>
            <Input
              id="e-mail"
              placeholder="jan.novak@gmail.com"
              className="col-span-3"
              type="e-mail"
              onChange={(event) => {setEmail(event.target.value); setShowError(false)}}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Heslo
            </Label>
            <Input
              id="heslo"
              placeholder="Heslo"
              className="col-span-3"
              type="password"
              onChange={(event) => {setHeslo(event.target.value); setShowError(false)}}
            />
          </div>
          {showError && <p className="text-red-500">Zadal/a jste špatně e-mail nebo heslo. Zkuste to znovu.</p>}
        </div>
        <DialogFooter>
          <RegisterPage />
          <Button className="grow" type="submit" onClick={handleLogin}>Přihlásit se</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
