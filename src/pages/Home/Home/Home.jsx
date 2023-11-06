import { Helmet } from "react-helmet";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Speciality from "../Speciality/Speciality";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Eat-Link | Home</title>
            </Helmet>
            <Banner/>
            <About></About>
            <Speciality></Speciality>
        </div>
    );
};

export default Home;