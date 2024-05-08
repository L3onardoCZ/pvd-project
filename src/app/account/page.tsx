import SmallHeader from "@/components/SmallHeader";
import SmallFooter from "@/components/SmallFooter";
import Dashboard from "@/components/Dashboard";
import React from 'react'; 


export default function Account(){

    return(
        <>
            <title>Account</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="PVD-project je webová aplikace, která slouží k procvičování Vaší klávesnicové gramotnosti." />
            <meta name="keywords" content="psaní všemi deseti, psani vsemi deseti, PVD, PVD-PROJECT, pvd-project, all ten fingers" />
            <SmallHeader/>
            <Dashboard/>
            <SmallFooter/>
        </>
    )
}
