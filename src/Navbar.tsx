import { Heart, Package2, ShoppingBasket, Search } from 'lucide-react';
function Navbar() {
  return (

    <div className='flex w-full justify-between'>
        <div className='text-xl md:text-2xl lg:text-3xl font-bold text-green-900'>
            olly
        </div>

        <div className='flex gap-6 ml-[2rem] items-center'>
        <Heart className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6'/>
        <Package2 className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6'/>
        <ShoppingBasket className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6'/>   
        </div>

        <div className="flex border  overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 w-230 outline-none"
          />
          <button className="bg-orange-400 p-2 w-12">
            <Search className="text-white w-5 h-5" />
          </button>
        </div>
    </div>
    
    
  )
}

export default Navbar