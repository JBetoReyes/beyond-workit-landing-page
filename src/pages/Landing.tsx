import { Fragment } from "react";
import Layout from "../templates/Layout"
import HeroSection from "../organisms/HeroSection";
import AboutSection from "../organisms/AboutSection";
import Testimonial from "../organisms/TestimonialSection";

const Landing = () => {
    return (
        <Fragment>
            <Layout>
                <main>
                    <HeroSection/>
                    <AboutSection/>
                    <Testimonial />
                </main>
            </Layout>
        </Fragment>
    );
};

export default Landing;