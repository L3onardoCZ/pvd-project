import "./waveShadow.css"

export default function Footer(){
    return(
        <>
            <div className="flex w-full justify-center">
                <h3 className="absolute z-40 mt-[17%] text-white">© 2024</h3>
            </div>
            <footer className="footerWave"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className="fill-cyan-700 dark:fill-cyan-800" d="M0,224L60,229.3C120,235,240,245,360,234.7C480,224,600,192,720,186.7C840,181,960,203,1080,224C1200,245,1320,267,1380,277.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg></footer>
        </>
    )
}