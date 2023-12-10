import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <button onClick={toggleSidebar} className="bg-blue-500 text-white px-4 py-2">
      
      </button>
      <div className={`sidebar ${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 h-full bg-gray-200 w-64 z-50 transition-transform duration-300 ease-in-out`}>
        {/* Sidebar content */}
        <ul className="p-4">
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </div>
      {isOpen && <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;
