import { Fragment } from "react";
import Layout from "../templates/Layout"
import HeroSection from "../organisms/HeroSection";
import AboutSection from "../organisms/AboutSection";

const Landing = () => {
    return (
        <Fragment>
            <Layout>
                <main>
                    <HeroSection/>
                    <AboutSection/>
                </main>
            </Layout>
        </Fragment>
    );
};

export default Landing;