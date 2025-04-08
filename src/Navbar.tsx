import { Heart, Package2, ShoppingBasket, Search } from 'lucide-react';
function Navbar() {
  return (

    <div className='flex w-full justify-between gap-10'>
        <div className='text-xl md:text-2xl lg:text-3xl font-bold text-[#2D4C41]'>
            olly
        </div>

        <div className='flex gap-10 ml-[2rem] items-center'>
        <Heart className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6'/>
        <Package2 className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6'/>
        <ShoppingBasket className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6'/>   
        </div>

        <div className="flex overflow-hidden rounded bg-gray-200">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 w-230 outline-none opacity-28"
          />
          <button className="bg-[#EBA463] p-2 w-30 rounded flex items-center justify-center">
            <Search className="text-white w-5 h-5"  />
          </button>
        </div>
    </div>
    
    
  )
}

export default Navbar