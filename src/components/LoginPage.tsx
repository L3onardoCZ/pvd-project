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
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
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
