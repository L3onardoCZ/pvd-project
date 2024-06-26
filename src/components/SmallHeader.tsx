// @ts-nocheck
"use client"

import "./titanonefont.css";
import ActionWindow from "./ActionWindow";

export default function SmallHeader({isLoggedIn, jmeno, prijmeni}){
    return(
        <>  
            <ActionWindow isLoggedIn={isLoggedIn} jmeno={jmeno} prijmeni={prijmeni}/>
            <div className="headerWave"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className="fill-cyan-700 dark:fill-cyan-800" fill-opacity="1" d="M0,192L26.7,176C53.3,160,107,128,160,122.7C213.3,117,267,139,320,128C373.3,117,427,75,480,69.3C533.3,64,587,96,640,101.3C693.3,107,747,85,800,69.3C853.3,53,907,43,960,42.7C1013.3,43,1067,53,1120,48C1173.3,43,1227,21,1280,37.3C1333.3,53,1387,107,1413,133.3L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg></div>
           
        </>
    )
}