import { useEffect } from 'react'

function isInViewport(el, marginBottom = 32) {
  const rect = el.getBoundingClientRect()
  return rect.top < window.innerHeight - marginBottom && rect.bottom > 0
}

function markVisible(el) {
  el.classList.add('visible')
}

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markVisible(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )

    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        if (isInViewport(el)) markVisible(el)
        observer.observe(el)
      })
    }

    observeAll()
    requestAnimationFrame(observeAll)
    const timer = setTimeout(observeAll, 150)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])
}
