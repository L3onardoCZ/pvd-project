import Card from "./Card";


export default function CardSection(){
    return(
        <>

            <section className="flex flex-row px-20 justify-around pt-40">
                <Card heading="Leon Suchý" paragraph="vytvořil frontend webových stránek pomocí technologií jako je Tailwind CSS, Next.js a Framer Motion. Pro styling použil Tailwind CSS, který mu umožnil rychle vytvářet a spravovat styly. Framework Next.js poskytl prostředí pro tvorbu statických i dynamických webů s podporou server-side renderingu. Kromě toho integroval knihovnu Framer Motion pro plynulé a esteticky příjemné animace. O použití shadcn není mnoho informací, ale pravděpodobně se jedná o interní nástroj či rozšíření, kterému tato osoba dala přednost."/>
                <Card heading="Vojtěch Reiss" paragraph="se zaměřil na backend webových stránek. Použil technologie jako PHP a MySQL pro vytvoření a správu databáze. Pracoval s PHP pro serverovou logiku a komunikaci s databází MySQL, což mu umožnilo dynamicky generovat obsah stránek a zpracovávat uživatelské požadavky. Pro nasazení webu zvolil platformu hostinger.com, která poskytuje hostingové služby a umožňuje jednoduché nasazení webových aplikací."/>
                <Card heading="Rostyslav Kupstov" paragraph="se specializuje na grafický design a navrhuje uživatelské rozhraní webové stránky. Navrhl grafický design stránky, včetně rozvržení, barev, typografie a vizuálních prvků. Dále vytvořil logo pro samotnou stránku, které reprezentuje její identitu a charakter. Jeho práce spočívala v tom, jak efektivně kombinovat estetiku a funkčnost, aby vytvořil přitažlivý a uživatelsky přívětivý design."/>
            </section>
        </>
    )
}