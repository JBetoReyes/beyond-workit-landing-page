import { Fragment } from "react";
import Layout from "../templates/Layout"
import HeroSection from "../organisms/HeroSection";

const Landing = () => {
    return (
        <Fragment>
            <Layout>
                <main>
                    <HeroSection/>
                </main>
            </Layout>
        </Fragment>
    );
};

export default Landing;