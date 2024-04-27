import ModeToggle from "./ModeToggle"

export default function Header(){
    return(
        <>
            <header className="flex flex-row align-center justify-center w-full gap-10 m-6">
                    <h1>
                        Ahoj vojtisku, toto je header našeho nextjs projektu s ShadCN theme switchem
                    </h1>
                <br />
                    <ModeToggle />
            </header>
        </>
    )

}