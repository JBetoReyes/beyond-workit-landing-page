import Card from "../atoms/Card";

const TestimonialSection = () => {
    return (
        <section className="testimonial">
            <div className="container">
                <div className="testimonial__content">
                    <img
                        src="./assets/images/image-founder.webp"
                        alt="The founder of workit smiling"
                    />
                    <Card
                        header="Be the first to test"
                        content="Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become beta tester for our app and kickstart your company. Apply for access below and I'll be in touch to schedule a call."
                        ctaText="Apply for access"
                    />
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
