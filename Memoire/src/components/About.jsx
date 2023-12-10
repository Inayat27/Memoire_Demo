

import aboutImages from '../assets/About-us-page-5.jpeg'
// function About() {
//   return (
//     <div className='flex justify-center box-border m-2'>
//       <img src={aboutImages} alt='image' className='h-[calc(100vh-140px)]'/>
//       <div className='text-center w-1/2'>
//         <p className='font-semibold text-4xl pb-5 text-[#f27638]'>About us</p>
//         <p className=''>
//         &quot;Memoire: Where memories fuel extra ordinary marketing journeys&quot;. At Memoire, we transcend the ordinary to etch lasting memories in the minds of consumers, builds trust, and differentiates the brand from your competitors. We specialize in crafting compelling brand identities and implementing strategic marketing solutions to help businesses grow and succeed.

// <br/>
// <br/>
// We are a team of dedicated professionals passionate about helping brands reach their full potential in the ever-evolving Market. With our expertise and innovative approach, we craft customized marketing solutions tailored to your unique needs and objectives.
// <br/>

// Our team comprises marketing strategists, content creators, graphic designers, social media specialists, and SEO experts, all working in harmony to elevate your brand&apos;s presence in the Market. We stay up-to-date with the latest industry trends and leverage cutting-edge tools and technologies to deliver exceptional results.
//         </p>
//       </div>
//     </div>
//   )
// }

// export default About

function About() {
  return (
    <div className='flex flex-col lg:flex-row justify-center box-border m-2 lg:items-center h-[calc(100vh-90px)] '>
      <img src={aboutImages} alt='image' className='h-[calc(50vh-70px)] lg:h-[calc(100vh-100px)]  lg:w-1/2 object-cover'/>
      <div className='text-center lg:text-left lg:w-1/2 lg:pl-10'>
        <p className='font-semibold text-4xl pb-5 text-[#f27638]'>About us</p>
        <p className='text-sm lg:text-base'>
          &quot;Memoire: Where memories fuel extraordinary marketing journeys&quot;. At Memoire, we transcend the ordinary to etch lasting memories in the minds of consumers, builds trust, and differentiates the brand from your competitors. We specialize in crafting compelling brand identities and implementing strategic marketing solutions to help businesses grow and succeed.
          <br/><br/>
          We are a team of dedicated professionals passionate about helping brands reach their full potential in the ever-evolving Market. With our expertise and innovative approach, we craft customized marketing solutions tailored to your unique needs and objectives.
          <br/><br/>
          Our team comprises marketing strategists, content creators, graphic designers, social media specialists, and SEO experts, all working in harmony to elevate your brand&apos;s presence in the Market. We stay up-to-date with the latest industry trends and leverage cutting-edge tools and technologies to deliver exceptional results.
        </p>
      </div>
    </div>
  );
}

export default About;
