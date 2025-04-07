import { Star } from 'lucide-react';


function Home() {
  return (
<div className='px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-48 py-6 space-y-12'>
   
    <div className='flex space-x-8 font-medium mt-10 ml-[-2rem]'>
        <span className='text-gray-900  font-light'>News</span>
        <span className='text-black-900 font-bold'>Marketplace</span>
        <span className='text-gray-900 font-light'>Templates</span>
        <span className='text-gray-900 font-light'>Support</span>
    </div>

    <div className='flex flex-col lg:flex-row gap-8'>
        <div className='flex-1 relative bg-[#f7f7f7] p-8 rounded-lg shadow-sm overflow-hidden'>

        <div className='absolute top-4 left-4 flex space-x-1 opacity-10 text-gray-400'>
            <Star className='w-10 h-10'/>
            <Star className='w-10 h-8'/>
            <Star className='w-10 h-5'/>
            </div>


            <div className='absolute bottom-4 right-4 flex space-x-2 text-gray-400'>
            <Star className='w-10 h-10'/>
            <Star className='w-6 h-6'/>
            </div>

            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 mb-4'>
                Shopping This Spring
            </h1>
            

            
        </div>
    
      <div className='flex-1 flex flex-col space-y-6'>
      <div className='bg-[#f7f7f7] p-6 rounded-lg shadow-sm '>
      <h2 className='text-base md:text-lg font-semibold mb-4'>
        Have a promo code?
      </h2>
      <div className='flex'>
        <input
          type='text'
          placeholder='Enter promo code'
          className='flex-1 px-4 py-2 border border-gray-300 rounded-l-full outline-none'
        />
        <button className='bg-orange-400 text-white rounded-r-full px-4 hover:bg-orange-500 transition'>
          Apply
        </button>
      </div>
      <p className='text-xs md:text-sm text-orange-400 mt-2 cursor-pointer hover:underline'>
        All promotions and coupons
      </p>
      </div>
      
      <div className='bg-[#f7f7f7] p-6 rounded-lg shadow-sm relative'>
       <h2 className='text-sm md:text-md font-semibold mb-2'>Free Shipping</h2>
       <p className='text-xs md:text-sm text-gray-600'>by courier to the house</p>
       <div className='absolute top-0 right-0 text-2xl md:text-3xl opacity-10'>

       </div>
      </div>
      </div>
    </div>
    
     <div className='text-center md:text-left'>
        <h2 className='text-xl md:text-2xl font-bold text-black-800 mb-4'>
            All Sellers
        </h2>
     </div>

     <div className='flex flex-col md:flex-row gap-6'>
     <div className='relative bg-white p-6 rounded-lg shadow-md flex-1 h-45 '>
     <div className='absolute top-4 left-4 flex space-x-1 opacity-20 text-gray-400'>
            <Star className='w-10 h-10'/>
            <Star className='w-10 h-8'/>
            <Star className='w-10 h-5'/>
            </div>



        <h3 className='text-lg md:text-xl font-semibold mb-2 relative z-10'>
         Until the End of the Month
        </h3>
        <p className='text-gray-600 text:-xs md:text-sm relative z-10'>
         For all categories
        </p>
        <div className='absolute bottom-4 right-6 text-[1.5rem] md:text-[2rem] font-bold text-gray-300 opacity-40 leading-none select-none pointer-events-none'>40%</div>
     </div>
      

      <div className='bg-green-900 text-white p-6 rounded-lg shadow-md flex-1'>
        <h3 className='text-lg md:text-xl font-semibold mb-2' >
            Lifeproof
            </h3>
        <p className='text-xs md:text-sm'>
            Original gadgets
            </p>
      </div>

    
    <div className='bg-white p-6 rounded-lg shadow-md flex-1'>
        <h3 className='text-lg md:text-xl font-semibold mb-2'>
          Skyway Store
        </h3>
        <p className='text-gray-600 text-xs md:text-sm'>
            Brand store
        </p>
    </div>




     </div>


    






</div>


  )
}

export default Home