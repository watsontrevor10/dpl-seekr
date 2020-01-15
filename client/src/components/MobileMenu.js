import React, { useState } from 'react';


const MobileMenu = () => {

  const [showMenu, setShowMenu] = useState(false)

  const displayMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className="mobile-menu" onClick={displayMenu}>
        {
          showMenu
            ? (
              <div className="menu">
                <button> home </button>
                <button> username </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    </>
  )
}

export default MobileMenu;