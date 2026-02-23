import Hero from "../components/hero";
import HomeCards from "../components/homecard";
import Joblisting from "../components/joblisting";
import Viewalljobs from "../components/viewalljobs";

const Homepage = () => {
    return (
        <>
        <Hero />
        <HomeCards />
        <Joblisting isHome={true}/>
        <Viewalljobs />
        </>
    )
};

export default Homepage;