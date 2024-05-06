"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ImageUpload from "./ImageUpload"
import { useState, useEffect } from "react"
import axios from "axios"
 
export default function AccountTab() {

  const[showError, setShowError] = useState(false);

  const[aktualniJmeno, setAktualniJmeno] = useState("");
  const[aktualniPrijmeni, setAktualniPrijmeni] = useState("");
  const[aktualniEmail, setAktualniEmail] = useState("");

  useEffect(() => {
    axios.post("http://localhost/pvd-project/server/account_load.php")
      .then(function(response) {
        setAktualniJmeno(response.data.jmeno);
        setAktualniPrijmeni(response.data.prijmeni);
        setAktualniEmail(response.data.email);
        sessionStorage.setItem("jmeno", response.data.jmeno);
        sessionStorage.setItem("prijmeni", response.data.prijmeni);
      })
      .catch(function(error) {
        console.log(error);
      })
  }, []);

  const[noveJmeno, setNoveJmeno] = useState("");
  const[novePrijmeni, setNovePrijmeni] = useState("");
  const[novyEmail, setNovyEmail] = useState("");

  useEffect(() => {
    setNoveJmeno(String(aktualniJmeno));
    setNovePrijmeni(String(aktualniPrijmeni));
    setNovyEmail(String(aktualniEmail));
  }, [aktualniJmeno, aktualniPrijmeni, aktualniEmail])

  const handleAccountChange = () => {

    sessionStorage.setItem("jmeno", noveJmeno);
    sessionStorage.setItem("prijmeni", novePrijmeni);

    let data = {
      "jmeno": noveJmeno,
      "prijmeni": novePrijmeni,
      "email": novyEmail
    }

    axios.post("http://localhost/pvd-project/server/account_change.php", data)
      .then(function(response) {
        console.log(response.data);
        if(response.data != false) {
          window.location.reload();
        } else setShowError(true);
      })
      .catch(function(error) {
        console.log(error);
        alert("Nelze se připojit k serveru.");
        window.location.reload();
      })
  }

  const handlePasswordChange = () => {
    
  }

  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Účet</TabsTrigger>
        <TabsTrigger value="password">Heslo</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Můj účet</CardTitle>
            <CardDescription>
              Zde můžete změnit své údaje. Klikněte na tlačítko "uložit" po dokončení změn.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Jméno</Label>
              <Input id="name" defaultValue={aktualniJmeno} onChange={(event) => {setNoveJmeno(event.target.value); setShowError(false)}} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Příjmení</Label>
              <Input id="name" defaultValue={aktualniPrijmeni} onChange={(event) => {setNovePrijmeni(event.target.value); setShowError(false)}} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">E-mail</Label>
              <Input id="username" defaultValue={aktualniEmail} onChange={(event) => {setNovyEmail(event.target.value); setShowError(false)}} />
              {showError && <p className="text-red-500">Musíte mít vyplněna všechna pole.</p>}
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleAccountChange}>Uložit</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Heslo</CardTitle>
            <CardDescription>
              Zde můžete změnit své heslo. Po dokončení změn klikněte na tlačítko "uložit heslo.""
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Aktuální heslo</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Nové heslo</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Uložit heslo</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
