import PrimaryButton from "../atoms/PrimaryButton";

const HeroSection = () => {
    return (
        <section className="hero-section | top-background-layer">
            {/* <div className="bottom-background-layer"></div> */}
            <div className="hero-section__container | container | flow">
                <h1 className="heading-1">
                    Data <span className="text-underline">tailored</span> to{" "}
                    <br />
                    your needs
                </h1>
                <PrimaryButton>Learn More</PrimaryButton>
            </div>
        </section>
    );
};

export default HeroSection;
