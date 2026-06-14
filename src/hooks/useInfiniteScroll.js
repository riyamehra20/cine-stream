import { useEffect, useRef, useCallback } from 'react'

/**
 
 *
 * @param {Function} onIntersect 
 * @param {boolean}  hasMore    
 * @returns {React.RefObject} sentinelRef - attach to bottom <div>
 */
function useInfiniteScroll(onIntersect, hasMore) {
  const sentinelRef = useRef(null)

  const handleIntersect = useCallback(
    (entries) => {
      const [entry] = entries
      if (entry.isIntersecting && hasMore) {
        onIntersect()
      }
    },
    [onIntersect, hasMore]
  )

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,       // viewport
      rootMargin: '0px',
      threshold: 0.1,
    })

    observer.observe(sentinel)

    return () => {
      if (sentinel) observer.unobserve(sentinel)
    }
  }, [handleIntersect])

  return sentinelRef
}

export default useInfiniteScroll
