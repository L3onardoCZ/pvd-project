import SmallHeader from "@/components/SmallHeader";
import SmallFooter from "@/components/SmallFooter";
import Dashboard from "@/components/Dashboard";
import React from 'react'; 
import IsLoggedIn from "@/components/IsLoggedIn";

export default function Account(){

    return(
        <>
            <IsLoggedIn>
                <SmallHeader/>
                <Dashboard/>
                <SmallFooter/>
            </IsLoggedIn>
        </>
    )
}
