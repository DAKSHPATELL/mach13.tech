'use client';

import { useEffect, useState } from 'react';

interface Props {
  label?: string;
  url?: string; // your Picktime booking URL
  variant?: 'primary' | 'outline' | 'floating';
  className?: string;
}

export default function PickTimeButton({
  label = 'Book a 15-minute appointment',
  url = 'https://www.picktime.com/9581da74-ab62-43f5-a00c-68aacec5895b',
  variant = 'primary',
  className = '',
}: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // load Picktime script once
    if (document.querySelector('script[data-picktime="1"]')) {
      setReady(true);
      return;
    }
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.picktime.com/assets/booking.js';
    s.setAttribute('data-picktime', '1');
    s.onload = () => setReady(true);
    document.body.appendChild(s);
  }, []);

  const base =
    'inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition';
  const styles =
    variant === 'primary'
      ? 'bg-[#0A2540] text-white hover:bg-[#0A2540]/90 focus:ring-[#0A2540]'
      : variant === 'outline'
      ? 'bg-white text-[#0A2540] border border-[#0A2540] hover:bg-[#0A2540]/5 focus:ring-[#0A2540]'
      : 'fixed right-3 bottom-3 z-[9999] bg-[#0A2540] text-white shadow-lg hover:bg-[#0A2540]/90 focus:ring-[#0A2540]';
  const readinessStyles = ready ? '' : 'opacity-70 pointer-events-none cursor-wait';

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={[base, styles, readinessStyles, className].join(' ').trim()}
      aria-label={label}
      aria-disabled={!ready}
      tabIndex={ready ? 0 : -1}
      data-picktime-ready={ready ? 'true' : 'false'}
    >
      {label}
    </a>
  );
}
