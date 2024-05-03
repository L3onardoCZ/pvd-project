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

export default function AccountSettingsPage() {

    axios.defaults.withCredentials = true;

    const handleLogout = () => {
        axios.post("http://localhost:80/pvd-project/server/logout.php")
            .then(function(response) {
                sessionStorage.removeItem("jmeno");
                sessionStorage.removeItem("prijmeni");
                alert("Odhlášení proběhlo úspěšně.");
                window.location.reload();
            })
            .catch(function(error) {
                console.log(error);
                alert("Něco se pokazilo.");
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
          <DialogTitle>Nastavení účtu</DialogTitle>
          <DialogDescription>
            Nastavte si svůj účet.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Button onClick={handleLogout} className="h-fit w-fit">Odhlásit se</Button>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
