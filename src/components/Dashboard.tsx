import AccountTab from "./AccountTab"
import Leaderboard from "./Leaderboard"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
   


export default function Dashboard(){
    return(
        <>
            <div className="w-full flex justify-center gap-8">
                <p>Placement</p>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    2
                </h1>
                <p>Top WPM</p>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    350
                </h1>
                <p>Excercises</p>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    24
                </h1>
            </div>
            <div className="w-full flex justify-center gap-8 mt-8">
                <AccountTab/>
                <Leaderboard/>
            </div>
        </>
    )
}