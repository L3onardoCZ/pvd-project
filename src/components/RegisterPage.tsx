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
  
  const handleRegistrace = () => {
    let data = {
      "email": email,
      "heslo": heslo,
      "jmeno": jmeno,
      "prijmeni": prijmeni
    }

    axios.post("http://localhost:80/pvd-project/server/register.php", data)
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
  }
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-none h-auto bg-red-600 hover:bg-red-800">Registrace</Button>
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
              onChange={(event) => setEmail(event.target.value)}
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
              onChange={(event) => setHeslo(event.target.value)}
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
              onChange={(event) => setJmeno(event.target.value)}
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
              onChange={(event) => setPrijmeni(event.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleRegistrace}>Zaregistrovat se</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
