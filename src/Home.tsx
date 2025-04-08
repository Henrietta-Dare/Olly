import { Star } from 'lucide-react';

function Home() {
return (
  <div className='w-full py-6 space-y-12'>
    <div className='flex space-x-3 px-[5.5rem] md:space-x-8 font-medium mt-1 md:ml-[-2rem] ml-[-5.5rem] lg:ml-[-5.5rem]'>
         <span className='text-gray-900  font-bold opacity-10'>News</span>
         <span className='text-black-900 font-bold'>Marketplace</span>
         <span className='text-gray-900 font-bold opacity-10'>Templates</span>         
         <span className='text-gray-900 font-bold opacity-10'>Support</span>
     </div>
    
   <div className='flex w-[100%]  flex-col lg:flex-row gap-8'>
    <div 
    style={{
       backgroundImage:'url(/hoodie.webp)',
       backgroundSize: 'auto',  
       position: 'relative',
       backgroundPosition: 'center top',
       backgroundRepeat: 'repeat',

     }} 
     className='relative bg-[#f7f7f7] p-8 rounded-lg shadow-sm overflow-hidden lg:px-98'>
    
    <h1 className=' text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D4C41] mb-2 relative lg:right-90 '>
      Shopping This Spring 
    </h1>
    </div>

    <div className='lg:basis-1/3 flex flex-col space-y-6'>
    <div className='bg-[#f7f7f7] p-6 rounded-lg shadow-sm'>
    <h2 className='text-base md:text-lg font-semibold mb-4 lg:mr-17'>
   Have a promo code?
    </h2>
    <div className='flex'>
    <input
    type='text'
    placeholder='Enter promo code'
    className='flex-1 px-3 py-2 border border-gray-300 rounded outline-none'
    />
    <button className='bg-[#EBA463] text-white rounded hover:bg-orange-500 transition overflow-hidden'>
   Apply
    </button>
    </div>
    <p 
    className='text-xs md:text-sm text-[#EBA463] mt-4 cursor-pointer hover:underline lg:mr-14'>
   All promotions and coupons
    </p>
    </div>
  
  <div 
  style={{
    backgroundImage:'url(/stars.WEBP)',
    backgroundSize: 'cover',  
    position: 'relative',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',

  }} 
  className='bg-[#f7f7f7] p-6 rounded-lg shadow-sm relative'>
  <h2 className='text-sm md:text-md font-semibold mb-2 mt-6 lg:mr-35'>Free Shipping</h2>
  <p className='text-xs md:text-sm text-gray-600 lg:mr-19'>by courier to the house</p>
  <div className='absolute top-0 right-0 text-2xl md:text-3xl opacity-10'>
  </div>
  </div>
  </div>
 </div>

 <div className='text-center md:text-left lg:text-left'>
  <h2 className='text-xl md:text-2xl font-bold text-black-800 mb-4]'>
    All Sellers
  </h2>
</div>

<div className='flex flex-col md:flex-row gap-6'>
<div className='relative bg-white p-6 rounded-lg shadow-md flex-1 h-45'>


<div className='absolute top-3 right-4 flex space-x-1 opacity-90 text-gray-400'>
<Star className='w-10 h-8'/>
</div>

<div className='absolute lg:flex lg:left-45 lg:mt-11 lg:space-x-1 lg:opacity-90 hidden'>
<Star className='w-10 h-8'/>
</div>

<div className='absolute lg:flex lg:left-35 lg:mt-15 lg:space-x-1 lg:opacity-90 lg:text-gray-400 hidden'>
<Star className='w-10 h-8'/>
</div>

<div className='absolute bottom-1 left-4 flex space-x-1 opacity-90 text-gray-400'>
<Star className='w-10 h-8'/>
</div>

<h3 className='text-lg md:text-xl font-semibold mb-2 relative z-10 lg:right-15'>
Until the End of the Month
</h3>
<p className='text-gray-600 text:-xs md:text-sm relative z-10 lg:right-30'>
For all categories
</p>
<div className='absolute bottom-4 right-6 text-[1.5rem] md:text-[2rem] font-bold text-gray-300 opacity-70 leading-none select-none pointer-events-none'>40%</div>
</div>

<div className='bg-[#2D4C41] text-white p-6 rounded-lg shadow-md flex-1'>
  
<h3 className='text-lg md:text-xl font-semibold mb-2 lg:right-33 relative' >
Lifeproof
</h3>
<p className='text-xs md:text-sm lg:right-30 relative'>
Original gadgets
</p>
</div>

<div 
style={{
  backgroundImage:'url(/bags.webp)',
  backgroundSize: 'cover',  
  position: 'relative',
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',

}} 
className='bg-white p-6 rounded-lg shadow-md flex-1'>
<h3 className='text-lg md:text-xl font-semibold mb-2 lg:right-28 relative'>
Skyway Store
</h3>
<p className='text-gray-600 text-xs md:text-sm lg:right-34 relative md:mt-[-0.5rem]'>
Brand store
</p>
</div>

</div>
</div>
     
  
)
}

export default Home