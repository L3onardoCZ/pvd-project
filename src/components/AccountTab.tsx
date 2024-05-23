// @ts-nocheck
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
import { useRouter } from 'next/navigation'
 
export default function AccountTab({isLoggedIn}) {
  /* tohle si kdyžtak zakomentářuj */
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn == false) {
      router.push('/');
    }
  }, [isLoggedIn]);
  /* tohle si kdyžtak zakomentářuj */
  const[showError, setShowError] = useState(false);
  const[showPasswordError, setShowPasswordError] = useState(false);
  const[showPassword1Error, setShowPassword1Error] = useState(false);
  const[showSuccess, setShowSuccess] = useState(false);
  const[emailError, setEmailError] = useState(false);

  const[aktualniJmeno, setAktualniJmeno] = useState("");
  const[aktualniPrijmeni, setAktualniPrijmeni] = useState("");
  const[aktualniEmail, setAktualniEmail] = useState("");

  const[aktualniHeslo, setAktualniHeslo] = useState("");

  useEffect(() => {

    axios.post("http://localhost/pvd-project/server/account_load.php")
      .then(function(response) {
        setAktualniJmeno(response.data.jmeno);
        setAktualniPrijmeni(response.data.prijmeni);
        setAktualniEmail(response.data.email);
      })
      .catch(function(error) {
        console.error(error);
      })
  }, []);

  const[noveJmeno, setNoveJmeno] = useState("");
  const[novePrijmeni, setNovePrijmeni] = useState("");
  const[novyEmail, setNovyEmail] = useState("");

  const[noveHeslo, setNoveHeslo] = useState("");
  const[potvrditHeslo, setPotvrditHeslo] = useState("");

  useEffect(() => {
    setNoveJmeno(String(aktualniJmeno));
    setNovePrijmeni(String(aktualniPrijmeni));
    setNovyEmail(String(aktualniEmail));
  }, [aktualniJmeno, aktualniPrijmeni, aktualniEmail])

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

  const handleAccountChange = () => {

    let data = {
      "jmeno": noveJmeno,
      "prijmeni": novePrijmeni,
      "email": novyEmail
    }

    axios.post("http://localhost/pvd-project/server/account_change.php", data)
      .then(function(response) {
        console.log(response.data);
        if(response.data != false && response.data != "email") {
          alert("Aby se projevily změny na Vašem účtu, budete teď odhlášeni. Po odhlášení se znovu přihlaste.");
          handleLogout();
        } else if(response.data == "email") {
          setEmailError(true);
        } else setShowError(true);
      })
      .catch(function(error) {
        console.error(error);
        alert("Nelze se připojit k serveru.");
        window.location.reload();
      })
  }

  const handlePasswordChange = () => {

    if(noveHeslo == potvrditHeslo) {
      let data = {
        "aktualniHeslo": aktualniHeslo,
        "noveHeslo": noveHeslo
      }
      
      axios.post("http://localhost/pvd-project/server/password_change.php", data)
        .then(function(response) {
          console.log(response.data);
          if(response.data != true) {
            setShowPasswordError(true);
          } else {
            setShowSuccess(true);
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          }
        })
        .catch(function(error) {
          console.error(error);
          alert("Nelze se připojit k serveru. Zkuste to prosím později.");
        })
    } else setShowPassword1Error(true);
  }

  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account">Účet</TabsTrigger>
        <TabsTrigger value="password">Heslo</TabsTrigger>
        <TabsTrigger value="profile_picture">Obrázek</TabsTrigger>
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
              {emailError && <p className="text-red-500">Tento e-mail už je přiřazen k jinému účtu.</p>}
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
              Zde můžete změnit své heslo. Po dokončení změn klikněte na tlačítko "uložit heslo."
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Aktuální heslo</Label>
              <Input id="current" type="password" onChange={(event) => {setAktualniHeslo(event.target.value); setShowPasswordError(false)}}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Nové heslo</Label>
              <Input id="new" type="password" onChange={(event) => {setNoveHeslo(event.target.value); setShowPasswordError(false); setShowPassword1Error(false)}}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Potvrďte nové heslo</Label>
              <Input id="submitpassword" type="password" onChange={(event) => {setPotvrditHeslo(event.target.value); setShowPasswordError(false); setShowPassword1Error(false)}}/>
              {showPassword1Error && <p className="text-red-500">Zadaná hesla se neshodují.</p>}
              {showPasswordError && <p className="text-red-500">Aktuální heslo je zadáno špatně. Zkuste to prosím znovu.</p>}
              {showSuccess && <p className="text-lime-500">Heslo bylo úspěšně změněno.</p>}
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handlePasswordChange}>Uložit heslo</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="profile_picture">
        <Card>
          <CardHeader>
            <CardTitle>Profilový obrázek</CardTitle>
            <CardDescription>
              Zde si můžete nahrát svůj vlastní profilový obrázek.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
              <Label htmlFor="pictureinput" className="cursor-pointer">Zvolte si obrázek</Label>
              <ImageUpload />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
