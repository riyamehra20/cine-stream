import { useState, useEffect } from 'react'

/**
 
 *
 * @param {string} value 
 * @param {number} delay 
 * @returns {string} 
 */
function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
