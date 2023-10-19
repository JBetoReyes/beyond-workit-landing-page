import AboutCard, {AboutCardProps} from "../atoms/AboutCard";

const AboutSection = () => {
    const aboutCards: Pick<AboutCardProps, 'title' | 'text'>[] = [
        {
            title: "Actionable Insights",
            text:
                "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.",
        },
        {
            title: "Data driven decisions",
            text: "Make data driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.",
        },
        {
            title: "Always affordable",
            text: "Always affordable pricing scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
        }
    ];
    return (
        <section className="about">
            <div className="container">
                <div className="about__card-list | switcher">
                    {aboutCards.map((aboutCard, index) => (
                        <AboutCard key={index} cardNumber={(index + 1).toString()} {...aboutCard} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
