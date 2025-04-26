import Experience from "./components/Experience";
import WorkSection from "./components/WorkSection";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";

export default function Home() {
  return (
    <>
    
 <div className="" id="main-container">
  <div className="hero-section w-full sticky">
    <Navbar/>
    <Introduction/>
    </div>
    <div className="">
    {/* <SkillSection/> */}
    
  <WorkSection/> 
    </div>
  <Experience/>
    
    </div>



    </>
  );
}
