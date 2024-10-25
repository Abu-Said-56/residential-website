import Floorplan from "../Floorplan/Floorplan";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/ph6hyxz/dillon-kydd-2ke-CPb73a-QY-unsplash.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to HomeNestHub</h1>
                        <p className="mb-5">
                        Explore beautiful homes tailored to your lifestyle. Discover a range of residential options with detailed listings, virtual tours, and expert 
                        guidance to help you find your perfect place.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <Slider></Slider>
                <Floorplan></Floorplan>
            </div>
        </div>

    );
};

export default Home;