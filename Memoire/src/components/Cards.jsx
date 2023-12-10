

// function Cards() {
//   return (
//     <div className="h-[calc(100vh-90px)] text-white flex items-center pl-5 pr-5 gap-2">
//       <div className="bg-[#f27638] h-[220px] p-3 w-2/4  rounded-xl">

//         <p className="font-semibold text-center"> Expertise & Experience</p>
//         <p className="text-center mt-6"> Our team of marketing experts, including content creators, graphic designers, social media specialists, and SEO experts, work seamlessly to boost your brand&apos;s presence with the latest industry trends.</p>
//       </div>
//       <div className="bg-[#f27638] h-[220px] p-3 w-2/4 rounded-xl">
        
//         <p className="font-semibold text-center">Optimize & Generates </p>
//         <p className="text-center mt-6"> We create a strategy that generates targeted results by effectively reaching and engaging your desired audience..</p>


//       </div>
//       <div className="bg-[#f27638] h-[220px] p-3 w-2/4 rounded-xl">
//         <p className="font-semibold text-center">Grow</p>
//         <p className="text-center mt-6">We grow your online presence through brand awareness, expanding your faster reach and faster engagement.</p>
//       </div>
//     </div>
//   )
// }

// export default Cards


function Cards() {
  return (
    <div className="mt-[100px] flex flex-col  lg:flex-row text-white gap-6 lg:gap-0 h-[calc(100vh-90px)]">
      <div className="bg-[#f27638] mt-3 h-[220px] lg:h-[calc(100vh-300px)] p-3 ml-2 mr-2 lg:w-1/3 rounded-xl flex flex-col justify-center">
        <p className="font-semibold text-center">Expertise & Experience</p>
        <p className="text-center mt-6 ">
          Our team of marketing experts, including content creators, graphic designers, social media specialists, and SEO experts, work seamlessly to boost your brand&apos;s presence with the latest industry trends.
        </p>
      </div>
      <div className="bg-[#f27638] h-[220px] lg:h-[calc(100vh-300px)] p-3  ml-2 mr-2 lg:w-1/3 rounded-xl flex flex-col justify-center">
        <p className="font-semibold text-center">Optimize & Generates</p>
        <p className="text-center mt-6">
          We create a strategy that generates targeted results by effectively reaching and engaging your desired audience.
        </p>
      </div>
      <div className="bg-[#f27638] h-[220px] lg:h-[calc(100vh-300px)] p-3  ml-2 mr-2 lg:w-1/3 rounded-xl flex flex-col justify-center">
        <p className="font-semibold text-center">Grow</p>
        <p className="text-center mt-6">
          We grow your online presence through brand awareness, expanding your faster reach and faster engagement.
        </p>
      </div>
    </div>
  );
}

export default Cards;
