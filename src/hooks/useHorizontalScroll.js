import { useEffect, useRef } from 'react';

export default function useHorizontalScroll() {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current

    if (el) {
      const handleScrollWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();

        el.scrollBy({
          left: e.deltaY < 0 ? -50 : 50,
          behaviour: 'smooth'
        });
      }

      el.addEventListener('wheel', handleScrollWheel);
      return () => el.removeEventListener('wheel', handleScrollWheel);
    }
  }, []);

  return elRef;
}
