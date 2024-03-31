import { Helmet } from "react-helmet";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Speciality from "../Speciality/Speciality";
import TopProduct from "../TopProduct/TopProduct";


const Home = () => {
    return (
        <div className="sm:p-2">
            <Helmet>
                <title>Eat-Link | Home</title>
            </Helmet>
            <Banner/>
            <TopProduct></TopProduct>
            <About></About>
            <Speciality></Speciality>
        </div>
    );
};

export default Home;