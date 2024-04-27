import ModeToggle from "./ModeToggle"

export default function Header(){
    return(
        <>
            <header className="flex flex-row align-center justify-center w-full gap-10 bg-[#0099ff] text-6xl font-white text-white">
                    <h1 className="mt-10 color-">
                        NÁZEV PROJEKTU
                    </h1>
            </header>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,160L24,170.7C48,181,96,203,144,229.3C192,256,240,288,288,256C336,224,384,128,432,101.3C480,75,528,117,576,144C624,171,672,181,720,176C768,171,816,149,864,154.7C912,160,960,192,1008,213.3C1056,235,1104,245,1152,234.7C1200,224,1248,192,1296,181.3C1344,171,1392,181,1416,186.7L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
            </svg>
        </>
    )

}