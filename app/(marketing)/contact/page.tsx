/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="px-6 md:px-10 lg:px-16 py-16" id="book">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B0B0C]">Book an appointment</h1>
          <p className="mt-6 text-lg text-[#0B0B0C]/80">
            Prefer email? Write to <a className="underline" href="mailto:info@mach13.tech">info@mach13.tech</a>.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <a
            href="https://www.picktime.com/9581da74-ab62-43f5-a00c-68aacec5895b"
            className="ptbkbtn inline-flex items-center justify-center"
            target="_blank"
            rel="noreferrer"
            style={{ float: 'none' }}
          >
            <img
              src="https://www.picktime.com/img/widgetButtons/BookingPage/picktime-book-online-black.png"
              alt="Book an appointment with Mach13"
              className="h-12 w-auto"
            />
          </a>
          <p className="text-sm text-[#0B0B0C]/60">
            Opens the Picktime booking page in a new tab.
          </p>
        </div>
        <div className="rounded-lg border border-[#EDEDED] bg-white p-6 text-sm text-[#0B0B0C]/70">
          <p>
            Want prep material ahead of the call? Let us know the documents or production lines you want to discuss and we&apos;ll review before the meeting.
          </p>
          <p className="mt-3">
            You can also connect via LinkedIn: <Link className="underline" href="https://www.linkedin.com/in/daksh-patel-ai/">Daksh Patel</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
