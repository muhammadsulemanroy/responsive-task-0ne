import { RxHamburgerMenu , RxCross2} from "react-icons/rx";
import Section from "./Section";
import ApproachSection from "./ApproachSection";
import ResultsSection from "./ResultsSection";


const LandingPage = () => {
   
return (
    <>
    <div className="flex justify-around min-h-[10rem] items-center">
    <div className="flex min-w-[20%]">
        <h5>Transmission</h5>
    </div>
    

    <div className="md:hidden" >
        <RxHamburgerMenu className=" text-2xl" />
    </div>

    <div className="flex min-w-[20%] justify-between max-md:hidden">
        <h6>Home</h6>
        <h6>About</h6>
        <h6>Contact</h6>
    </div>
</div>

<Section/>
<ApproachSection/>
<ResultsSection/>
</>
)
}

export default LandingPage;