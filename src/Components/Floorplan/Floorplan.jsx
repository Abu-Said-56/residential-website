import { IoMdCheckmarkCircle } from "react-icons/io";

const Floorplan = () => {
    return (
        <div>
            <div className="gap-10 my-5 py-5 bg-orange-50 mx-5 rounded-lg">
                <h3 className="text-4xl font-serif text-center py-4">Detailed Floor Plan</h3>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.ibb.co.com/3yG9628/floor-plan.gif"
                        className="max-w-full rounded-lg shadow-sm" />
                    <div className="w-full">
                        <p className="flex justify-start gap-2 text-lg py-2"><span className="text-xl"><IoMdCheckmarkCircle /> </span>Custom concrete flooring with glass chips</p>
                        <p className="flex justify-start gap-2 text-lg py-2"><span className="text-xl"><IoMdCheckmarkCircle /> </span>7,219 square-feet of patios / decks</p>
                        <p className="flex justify-start gap-2 text-lg py-2"><span className="text-xl"><IoMdCheckmarkCircle /> </span>Ipe wood decks</p>
                        <p className="flex justify-start gap-2 text-lg py-2"><span className="text-xl"><IoMdCheckmarkCircle /> </span>Control system operating lighting, shades</p>
                        <p className="flex justify-start gap-2 text-lg py-2"><span className="text-xl"><IoMdCheckmarkCircle /> </span>Lighting system designed by David Sin</p>
                        <p className="flex justify-start gap-2 text-lg py-2"><span className="text-xl"><IoMdCheckmarkCircle /> </span>Torrance steel windows</p>
                        <p className="flex justify-start gap-2 text-lg py-2"><span className="text-xl"><IoMdCheckmarkCircle /> </span>Ten-foot exterior doors</p>
                        <p className="flex justify-start gap-2 text-lg py-2"><span className="text-xl"><IoMdCheckmarkCircle /> </span>140-foot “airplane-wing” shading structure</p>
                        <p className="flex justify-start gap-2 text-lg py-2"><span className="text-xl"><IoMdCheckmarkCircle /> </span>Ten-kilovolt (KV) photovoltaic (PV) system</p>
                        <p className="flex justify-start gap-2 text-lg py-2"><span className="text-xl"><IoMdCheckmarkCircle /> </span>Three-and-a-half-inch solid maple stairs</p>
                        <p className="flex justify-start gap-2 text-lg py-2"><span className="text-xl"><IoMdCheckmarkCircle /> </span>Custom teak doors with Starfire glass slits</p>                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Floorplan;