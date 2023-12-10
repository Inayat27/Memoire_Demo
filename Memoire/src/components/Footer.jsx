
import Quotes from './Quotes'
import Logo from '../assets/MemoireLogo.png'

// function Footer() {
//   return (
//     <div className='h-[calc(100vh-200px)]'>
//       <Quotes />

//       <div className='bg-black text-white flex items-center mt-5  h-1/2 justify-around'>
//         <div>
//           <img src={Logo} alt='Logo' className='w-[25vw] h-[10vh]' />
//         </div>
//         <div className='flex  flex-col items-start'>
//           <p className='font-semibold text-2xl'>Address</p>
//           <div>
//             <p className='w-2/3'><i className='material-icons'>location_on</i>408, Kamdhenu Commerz Building, Sector-13, Kharghar, Navi Mumbai - 410210.</p></div>
//         </div>

//         <div className='flex flex-col items-center '>
//           <p className='font-semibold text-2xl'>Contact</p>

//           <div><i className='material-icons'>call</i><span className='pl-2'>+91-12345658868</span></div>
//           <div><i className='material-icons'>call</i>
//             <span className='pl-2'>+91-12345658868</span></div>
//           <div><i className='material-icons'>mail</i>
//             <span className='pl-2'>XYZ@gmail.com</span></div>


//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer

function Footer() {
  return (
    <div className='h-[calc(100vh-200px)]'>
      <Quotes />

      <div className='bg-black text-white flex flex-col lg:flex-row items-center justify-around mt-5 h-auto lg:h-1/2'>
        <div className='mb-5 lg:mb-0'>
          <img src={Logo} alt='Logo' className='w-[25vw] h-auto lg:w-auto lg:h-[10vh]' />
        </div>
        <div className='flex flex-col items-center lg:items-start'>
          <p className='font-semibold text-xl lg:text-2xl'>Address</p>
          <div className='text-center lg:text-left'>
            <p className='w-2/3 lg:w-full'><i className='material-icons'>location_on</i>408, Kamdhenu Commerz Building, Sector-13, Kharghar, Navi Mumbai - 410210.</p>
          </div>
        </div>

        <div className='flex flex-col items-center lg:items-start'>
          <p className='font-semibold text-xl lg:text-2xl'>Contact</p>

          <div className='flex items-center'>
            <i className='material-icons'>call</i><span className='pl-2'>+91-12345658868</span>
          </div>
          <div className='flex items-center'>
            <i className='material-icons'>call</i>
            <span className='pl-2'>+91-12345658868</span>
          </div>
          <div className='flex items-center'>
            <i className='material-icons'>mail</i>
            <span className='pl-2'>XYZ@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

