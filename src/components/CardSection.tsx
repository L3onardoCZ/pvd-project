import Card from "./Card";

export default function CardSection(){
    return(
        <>
            <section className="flex flex-row px-20 justify-around">
                <Card heading="Lorem Ipsum" paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc auctor. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Aliquam in lorem sit amet leo accumsan lacinia. Aliquam erat volutpat. Mauris metus."/>
                <Card heading="Lorem Ipsum" paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc auctor. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Aliquam in lorem sit amet leo accumsan lacinia. Aliquam erat volutpat. Mauris metus."/>
            </section>
        </>
    )
}