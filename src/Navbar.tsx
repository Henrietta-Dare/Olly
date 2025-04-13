import { UserRound, Heart, ShoppingCart, Search, Menu, X, Funnel, LayoutGrid, ChevronDown } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <nav className=' w-full py-1 lg:py-10 flex flex-col relative'>

      
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-start w-full gap-9'>
        
       
        <div className='flex items-center justify-between w-full lg:w-auto gap-9'>
          <div className='flex items-center gap-2'>
           
            <button className='lg:hidden' onClick={() => setIsMenuOpen(true)}>
              <Menu className='w-6 h-6' />
            </button>

            
            <div className='text-xl md:text-2xl lg:text-3xl font-bold text-[#2D4C41]'>
              Olly
            </div>
          </div>

         
          <div className='flex lg:flex gap-9 items-center'>
            <Heart className='hidden lg:block w-5 h-5' />
            <UserRound className='w-5 h-5' />
            <ShoppingCart className='w-5 h-5' />
          </div>
        </div>

        <div className='flex overflow-hidden rounded-4xl lg:rounded-lg bg-gray-50 shadow-md w-full lg:flex-1'>
          <input
            type='text'
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='px-4 py-2 w-full outline-none opacity-80 text-sm lg:text-base'
          />
          <button className='lg:bg-[#EBA463] p-2 flex items-center justify-center lg:px-6 lg:rounded-lg'>
            <Search className='text-black lg:text-white w-5 h-5' />
          </button>
        </div>

      </div>

     
      {searchTerm && (
        <div className='w-full mt-3 flex items-center justify-between px-2 lg:max-w-7xl lg:mx-auto'>
          <div className='flex items-center gap-1 text-red-400 text-sm lg:text-base font-semibold'>
            Best Matches
            <ChevronDown className='w-4 h-4' />
          </div>

          
          <div className='flex items-center gap-2'>
            <LayoutGrid className='w-5 h-5' />
            <div className='h-5 w-px bg-gray-300'></div>
            <div className='flex items-center gap-1'>
              <Funnel className='w-5 h-5' />
              <span className='text-[#2D4C41] text-sm lg:text-base font-semibold'>Filter</span>
            </div>
          </div>
        </div>
      )}

      
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden z-50`}>
        <div className='flex items-center justify-between p-4 border-b border-gray-300'>
          <div className='text-xl font-bold text-[#2D4C41]'>Menu</div>
          <button onClick={() => setIsMenuOpen(false)}>
            <X className='w-6 h-6' />
          </button>
        </div>
        <div className='flex flex-col gap-4 p-4 mr-38'>
          <a href='#' className='text-[#2D4C41] text-base font-bold mr-7'>News</a>
          <a href='#' className='text-[#2D4C41] text-base font-bold'>Marketplace</a>
          <a href='#' className='text-[#2D4C41] text-base font-bold'>Template</a>
          <a href='#' className='text-[#2D4C41] text-base font-bold'>Support</a>
          <a href='#' className='text-[#2D4C41] text-base font-bold'>Wishlist</a>
        </div>
      </div>

      
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black opacity-30 lg:hidden z-40'
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}

export default Navbar;

