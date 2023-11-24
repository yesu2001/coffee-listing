import "./App.css";
import bgPic from "./assets/bg-cafe.jpg";
import CoffeeCollection from "./components/CoffeeCollection";

function App() {
  return (
    <div className="h-full pb-[100px]">
      {/* Image container */}
      <div className="flex-[o.5] overflow-hidden flex-shrink-0">
        <img
          className="w-full h-full object-fill"
          src={bgPic}
          alt="Your Alt Text"
        />
      </div>

      {/* Rest of your content */}
      <div className="flex items-center justify-center xs:mt[-50px] sm:mt-[-100px] mx-[100px]">
        {/* Your other content goes here */}
        <CoffeeCollection />
      </div>
    </div>
  );
}

export default App;

// <div className=" min-h-screen">
//   <div>
//     <img src={bgPic} alt="coffee store picture" />
//   </div>
//   <CoffeeCollection />
// </div>
