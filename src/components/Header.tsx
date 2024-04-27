import ModeToggle from "./ModeToggle"

export default function Header(){
    return(
        <>
            <header className="flex flex-row align-center justify-center w-full gap-10 mt-10">
                    <h1>
                        Ahoj vojtisku, toto je header našeho nextjs projektu postaveny na shadcn knihovne s tailwindem, tady vedle je nejaky theme switch
                    </h1>
                <br />
                    <ModeToggle />
            </header>
        </>
    )

}