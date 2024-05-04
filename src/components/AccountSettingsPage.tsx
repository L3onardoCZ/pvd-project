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

export default function AccountSettingsPage() {
  
    const jmeno = sessionStorage.getItem("jmeno");
    const prijmeni = sessionStorage.getItem("prijmeni");

    axios.defaults.withCredentials = true;

    const handleLogout = () => {
        axios.post("http://localhost/pvd-project/server/logout.php")
            .then(function(response) {
                sessionStorage.removeItem("jmeno");
                sessionStorage.removeItem("prijmeni");
                window.location.reload();
            })
            .catch(function(error) {
                console.log(error);
                alert("Nelze se připojit k serveru. Zkuste to prosím později.");
                window.location.reload();
            })
    }
    
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Avatar>
            <AvatarImage className="cursor-pointer" src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" />
            <AvatarFallback>CN</AvatarFallback>
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
