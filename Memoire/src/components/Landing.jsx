

// function Landing() {
//   return (
// <div className="h-[calc(100vh-90px)] flex  flex-col justify-center items-start pl-16  bg-no-repeat bg-cover" style={{backgroundImage: "url('../assets/bg_images.png')"}}>
//         <p className="text-[4vw] w-2/3 font-bold">&quot;Unlocking the Future of Brands with Creative Alchemy&quot;</p>
//         <p className=" w-2/4 pl-4 mt-3 text-[1.5vw]">&quot;Memoire is a branding and marketing solution company,
// dedicated to boosting your brand&apos;s visibility and influence.
// Let us tailor strategies that make your brand unforgettable.&quot;</p>

// <button className="mt-12 bg-[#f27638] text-white pr-6 pl-6 pt-5 pb-5 rounded-full outline outline-black text-lg" >Contact Us</button>
//     </div>
//   )
// }

// export default Landing
function Landing() {
  return (
    <div className="min-h-[calc(100vh-90px)] flex flex-col justify-center items-center lg:items-start pl-4 lg:pl-16" >
      <p className="text-4xl  leading-tight lg:text-[4vw] w-5/6 lg:w-2/3 font-bold text-center lg:text-left">&quot;Unlocking the Future of Brands with Creative Alchemy&quot;</p>
      <p className="w-5/6 lg:w-2/4 pl-0 lg:pl-4 mt-3 text-lg lg:text-[1.5vw] text-center lg:text-left">&quot;Memoire is a branding and marketing solution company, dedicated to boosting your brand&apos;s visibility and influence. Let us tailor strategies that make your brand unforgettable.&quot;</p>
      <button className="mt-8 lg:mt-12 bg-[#f27638] text-white pr-6 pl-6 pt-4 pb-4 rounded-full outline outline-black text-lg lg:text-xl hover:bg-[#fb905b] ">Contact Us</button>
    </div>
  )
}

export default Landing
