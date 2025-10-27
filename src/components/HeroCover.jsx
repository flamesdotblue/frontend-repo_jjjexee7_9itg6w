import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle radial gradient to enhance readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-orange-400" />
          Live Regulatory Resource
        </div>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Intermodal Regulatory Center
        </h1>
        <p className="mt-4 max-w-2xl text-sm/relaxed text-white/80 sm:text-base">
          Explore the latest rules, guidance, and insights that shape intermodal operations. A
          cleaner layout, clearer navigation, and an immersive hero make it easier to find what you need.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#highlights"
            className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-100"
          >
            Browse Highlights
          </a>
          <a
            href="#resources"
            className="rounded-md border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-orange-400 hover:text-orange-300"
          >
            Key Resources
          </a>
        </div>
      </div>
    </section>
  );
}
