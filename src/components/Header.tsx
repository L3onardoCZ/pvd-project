import ModeToggle from "./ModeToggle"

export default function Header(){
    return(
        <>  <div className="bg-cyan-500 p-4">
                <ModeToggle />
            </div>
            <header className="flex flex-col justify-center w-full bg-gradient-to-b from-cyan-500 to-cyan-700 font-white text-white p-[90px]">
                    <h1 className="mt-[200px] tracking-widest font-medium text-8xl">
                        WEB PROJEKT
                    </h1>
                    <p className="font-light mt-4 text-xl">Created by: Leon Suchý, Vojtěch Reiss, Rostislav Kupstov</p>
            </header>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0e7490" fill-opacity="1" d="M0,256L60,240C120,224,240,192,360,181.3C480,171,600,181,720,165.3C840,149,960,107,1080,112C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </>
    )

}