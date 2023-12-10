
// import strategize  from '../assets/'
import grow  from '../assets/diagram-THIN2.png'
import aqu  from '../assets/acquisition-THIN-1.png'
import puzz from '../assets/puzzle-THIN-1.png'

// function Crafts() {
//   return (
//     <div className=" h-[calc(100vh-90px)] flex  gap-4 justify-center items-center flex-wrap">
//         <div className='h-96 flex flex-col items-center p-5'>
//             <img  className='h-[5vw]' src={grow} alt='strategy'/>
//             <p className='mt-5 text-[#f27638] mb-5 font-semibold text-xl'>strategize</p>
//             <ul>
//                 <li>Go-to-Market Strategy</li>
//                 <li>Brand Name</li>
//                 <li>Brand Architecture</li>
//                 <li>Brand Strategy</li>
//             </ul>
//         </div>
//         <div className='h-96 flex flex-col items-center p-5'>
//             <img  className='h-[5vw]' src={aqu} alt='strategy'/>
//             <p className='mt-5 text-[#f27638] mb-5 font-semibold text-xl'> Grow</p>
//             <ul>
                // <li>Search Engine Optimization</li>
                // <li>Email Marketing</li>
                // <li>Social Media Marketing</li>
                // <li>Pay Per Click</li>
                // <li>Digital Marketing</li>
//             </ul>
//         </div>
//         <div className='h-96 flex flex-col items-center p-5'>
//             <img className='h-[5vw]' src={puzz}/>
//             <p className='mt-5 text-[#f27638] mb-5 font-semibold text-xl'> Build</p>
//             <ul >
//                 <li>Packaging Design Media Feed Design</li>
//                 <li>Social Logo Design</li>
//                 <li>Marketing Collateral Design</li>
//                 <li>Brand book</li>
//                 <li>Brand & Product Photoshoot</li>
//                 <li>Website Design</li>
//             </ul>
//         </div>
//         <div className='h-96 flex flex-col items-center p-5'>
//             <img  className='h-[5vw]' src={grow} alt='strategy'/>
//             <p className='mt-5 text-[#f27638] mb-5 font-semibold text-xl'> Engage</p>
//             <ul>
//                 <li>Theme Or Hashtags</li>
//                 <li>Influence Marketing</li>
//                 <li>Product Placements</li>
//                 <li>Creative Campaigns</li>
//                 <li>Corporate Giveaways</li>
//                 <li>Building Social followers</li>
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default Crafts


function Crafts() {
    return (
      <div className="min-h-[calc(100vh-90px)] flex flex-wrap justify-center gap-4 items-center p-4 lg:p-0">
        <div className='h-80 lg:h-96 flex flex-col items-center p-5 w-full sm:w-1/2 lg:w-1/5'>
          <img className='h-12 sm:h-[5vw]' src={grow} alt='strategy'/>
          <p className='mt-5 text-[#f27638] mb-3 font-semibold text-xl'>Grow</p>
          <ul className="text-xs sm:text-sm lg:text-base">
            <li>Go-to-Market Strategy</li>
            <li>Brand Name</li>
            <li>Brand Architecture</li>
            <li>Brand Strategy</li>
          </ul>
        </div>
        <div className='h-80 lg:h-96 flex flex-col items-center p-5 w-full sm:w-1/2 lg:w-1/5'>
          <img className='h-12 sm:h-[5vw]' src={puzz} alt='strategy'/>
          <p className='mt-5 text-[#f27638] mb-3 font-semibold text-xl'>strategize</p>
          <ul className="text-xs sm:text-sm lg:text-base">
          <li>Search Engine Optimization</li>
                <li>Email Marketing</li>
                <li>Social Media Marketing</li>
                <li>Pay Per Click</li>
                <li>Digital Marketing</li>
          </ul>
        </div>
        <div className='h-80 lg:h-96 flex flex-col items-center p-5 w-full sm:w-1/2 lg:w-1/5'>
          <img className='h-12 sm:h-[5vw]' src={aqu} alt='strategy'/>
          <p className='mt-5 text-[#f27638] mb-3 font-semibold text-xl'>Build</p>
          <ul className="text-xs sm:text-sm lg:text-base">
          <li>Packaging Design Media Feed Design</li>
                <li>Social Logo Design</li>
                <li>Marketing Collateral Design</li>
                <li>Brand book</li>
                <li>Brand & Product Photoshoot</li>
                <li>Website Design</li>
          </ul>
        </div>
        <div className='h-80 lg:h-96 flex flex-col items-center p-5 w-full sm:w-1/2 lg:w-1/5'>
          <img className='h-12 sm:h-[5vw]' src={grow} alt='strategy'/>
          <p className='mt-5 text-[#f27638] mb-3 font-semibold text-xl'>Engage</p>
          <ul className="text-xs sm:text-sm lg:text-base">
           <li>Theme Or Hashtags</li>
               <li>Influence Marketing</li>
               <li>Product Placements</li>                <li>Creative Campaigns</li>
              <li>Corporate Giveaways</li>
               <li>Building Social followers</li>
          </ul>
        </div>
        
      </div>
    )
  }
  
  export default Crafts
  