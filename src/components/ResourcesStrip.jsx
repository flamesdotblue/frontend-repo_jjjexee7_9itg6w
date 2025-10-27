import React from 'react';

const resources = [
  {
    title: 'Compliance Calendar',
    desc: 'Key dates and deadlines you can download and share with your team.',
    cta: 'View Calendar',
    href: '#',
  },
  {
    title: 'Templates & Checklists',
    desc: 'Editable SOPs, audit sheets, and training materials for quick adoption.',
    cta: 'Browse Toolkit',
    href: '#',
  },
  {
    title: 'Contact & Support',
    desc: 'Reach out to our regulatory affairs team for clarifications or help.',
    cta: 'Get in Touch',
    href: '#',
  },
];

export default function ResourcesStrip() {
  return (
    <section id="resources" className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0b0b0b] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Helpful Resources</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Practical tools to turn policy into action while keeping teams aligned.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {resources.map((r) => (
            <div key={r.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-base font-semibold text-white">{r.title}</h3>
              <p className="mt-2 text-sm text-white/70">{r.desc}</p>
              <a
                href={r.href}
                className="mt-4 inline-flex items-center rounded-md bg-white px-3 py-2 text-xs font-semibold text-black transition hover:bg-orange-100"
              >
                {r.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
