/* eslint-disable @next/next/no-img-element */
"use client";

import Script from "next/script";

const PICKTIME_URL = "https://www.picktime.com/9581da74-ab62-43f5-a00c-68aacec5895b";

export default function PicktimeWidget() {
  return (
    <>
      <a
        href={PICKTIME_URL}
        className="fixed right-0 top-1/2 z-[9999] -translate-y-1/2"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book an appointment with Mach13 via Picktime"
      >
        <img
          src="https://www.picktime.com/img/widgetButtons/BookingPage/picktime-book-online-right-black.png"
          alt="Book an appointment with Mach13"
        />
      </a>
      <Script src="https://www.picktime.com/assets/booking.js" strategy="lazyOnload" data-picktime="1" />
    </>
  );
}
