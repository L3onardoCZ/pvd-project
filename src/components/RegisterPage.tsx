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

export default function RegisterPage() {

  const[email, setEmail] = useState("");
  const[heslo, setHeslo] = useState("");
  const[jmeno, setJmeno] = useState("");
  const[prijmeni, setPrijmeni] = useState("");

  const[showSuccess, setShowSuccess] = useState(false);
  const[showError, setShowError] = useState(false);
  
  const handleRegistrace = () => {
    let data = {
      "email": email,
      "heslo": heslo,
      "jmeno": jmeno,
      "prijmeni": prijmeni
    }

    axios.post("http://localhost/pvd-project/server/register.php", data)
      .then(function(response) {
        console.log(response.data);
        setShowSuccess(false);
        setShowError(false);
        (response.data != false) ? setShowSuccess(true) : setShowError(true);
      })
      .catch(function(error) {
        console.log(error);
      })
  }
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-none h-auto bg-red-600 hover:bg-red-800 text-white hover:text-white">Registrace</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Registrace</DialogTitle>
          <DialogDescription>
            Vyplň všechna pole níže.
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
              onChange={(event) => {setEmail(event.target.value); setShowError(false); setShowSuccess(false)}}
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
              onChange={(event) => {setHeslo(event.target.value); setShowError(false); setShowSuccess(false)}}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Jméno:
            </Label>
            <Input
              id="jmeno"
              placeholder="Jan"
              className="col-span-3"
              type="text"
              onChange={(event) => {setJmeno(event.target.value); setShowError(false); setShowSuccess(false)}}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Příjmení
            </Label>
            <Input
              id="Příjmení"
              placeholder="Novák"
              className="col-span-3"
              type="text"
              onChange={(event) => {setPrijmeni(event.target.value); setShowError(false); setShowSuccess(false)}}
            />
          </div>
          {showSuccess && <p className="text-lime-500">Registrace proběhla úspěšně. Nyní zavřete okno registrace a přihlaste se.</p>}
          {showError && <p className="text-red-500">Účet s tímto e-mailovým účtem již existuje. Zkuste prosím jiný e-mail.</p>}
        </div>
        <DialogFooter>
          <Button className="text-white bg-lime-500 hover:bg-lime-700" onClick={handleRegistrace}>Zaregistrovat se</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
