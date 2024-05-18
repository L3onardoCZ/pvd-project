export default function SmallFooter(){
    return(
        <>

                <div>
                    <div className="flex w-full justify-center">
                        <h3 className="absolute z-40 mt-[17%] text-white">© 2024</h3>
                    </div>
                    <footer className="footerWave bottom-0 w-full relative"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className="fill-cyan-700 dark:fill-cyan-800" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,261.3C384,256,480,224,576,197.3C672,171,768,149,864,170.7C960,192,1056,256,1152,256C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg></footer>
                </div>

        </>
    )
}