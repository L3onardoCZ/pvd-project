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

export default function LoginPage() {

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
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-none h-fit">{(isLoggedIn == false ? "Přihlásit se" : "Odhlásit se")}</Button>
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
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
