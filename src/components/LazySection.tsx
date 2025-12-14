import { useEffect, useRef, useState, ReactNode, useMemo, memo } from 'react';

interface LazySectionProps {
  children: ReactNode;
  threshold?: number;
}

function LazySection({ children, threshold = 0.1 }: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const observerOptions = useMemo(() => ({
    threshold,
    rootMargin: '50px'
  }), [threshold]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      observerOptions
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [observerOptions]);

  return (
    <div ref={ref}>
      {isVisible ? children : <div style={{ minHeight: '200px' }} />}
    </div>
  );
}

export default memo(LazySection);
