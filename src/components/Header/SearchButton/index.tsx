// import { Search } from '@/components/Icons'
// import { SearchButtonWrapper } from './SearchButton.styled'

// export default function SearchButton() {
//   return (
//     <SearchButtonWrapper>
//       <Search />
//     </SearchButtonWrapper>
//   )
// }

import { useState, useEffect } from 'react'
import { Search } from '@/components/Icons'
import { SearchButtonWrapper } from './SearchButton.styled'

export default function SearchButton() {
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  // Close the search input when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      const searchWrapper = document.querySelector('.search')
      if (searchWrapper && !searchWrapper.contains(e.target)) {
        setIsActive(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <SearchButtonWrapper className={`search ${isActive ? 'active' : ''}`}>
      <div className="search__field">
        <input
          type="text"
          className="search__input"
          placeholder="Search..."
          style={{ width: isActive ? '300px' : '40px' }}
        />
      </div>
      <div className="search__button" onClick={handleToggle}>
        <Search />
      </div>
    </SearchButtonWrapper>
  )
}
