import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
const CryptoDropdown = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // State to control dropdown menu visibility
  const currencies = ['BTC', 'ETH', 'LTC'];

  const handleSelectCurrency = (currency:any) => {
    setSelectedCurrency(currency);
    setMenuOpen(false); // Close the dropdown menu after selecting a currency
  };

  return (
    <div className="relative inline-block text-left">
      <div className='w-[40vw] md:w-[100%] ' >
        <button
          type="button"
          className="inline-flex justify-center  w-full rounded-full items-center   border-gray-300 shadow-sm px-4 py-2 bg-black text-[3vw]  md:text-[1vw] font-medium text-white "
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility
        >
            {/* currency photo */}
            {/* <Image src={} alt='' /> */}
          {selectedCurrency ? selectedCurrency : 'Select a currency'}
          <ChevronDown />
        </button>
      </div>

      {menuOpen && ( // Render the dropdown menu only if menuOpen is true
        <div
          className="origin-top-right absolute  right-0 mt-2 w-56 z-10 rounded-[2vw] text-white font-semibold shadow-lg bg-black border border-cyan-400 "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {currencies.map((currency) => (
              <a
                key={currency}
                href="#"
                className="block px-4 py-2 text-[3vw] md:text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleSelectCurrency(currency)}
              >
                {currency}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CryptoDropdown;
