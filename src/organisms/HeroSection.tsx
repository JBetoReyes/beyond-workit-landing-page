import PrimaryButton from "../atoms/PrimaryButton";

const HeroSection = () => {
    return (
        <section className="hero-section">
            {/* <div className="bottom-background-layer"></div> */}
            <div className="hero-section__background">
                <div className="container">
                    <div className="hero-section__content | flow">
                        <h1 className="heading-1">
                            Data <span className="text-underline">tailored</span> to{" "}
                            <br />
                            your needs
                        </h1>
                        <PrimaryButton>Learn More</PrimaryButton>
                    </div>
                </div>
            </div>
            <img className="hero-section__image" src="/assets/images/image-hero.webp" alt="Iphone 11" />
        </section>
    );
};

export default HeroSection;
