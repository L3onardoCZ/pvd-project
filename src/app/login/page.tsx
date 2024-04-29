import SmallHeader from "@/components/LoginHeader";
import SmallFooter from "@/components/SmallFooter";
import React from 'react';
import LoginPage from "@/components/LoginPage"; 

export default function account(){
    return(
        <>
            <SmallHeader/>
            <LoginPage />
            <SmallFooter/>
        </>
    )
}
