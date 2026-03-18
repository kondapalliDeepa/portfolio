import { useEffect, useRef, useState } from 'react'
import { cn } from '../lib/utils'

function Reveal({ children, className, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700',
        visible ? 'animate-enter opacity-100' : 'translate-y-5 opacity-0',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Reveal