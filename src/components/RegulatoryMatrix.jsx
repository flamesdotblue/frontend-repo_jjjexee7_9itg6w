import React from 'react';
import { ExternalLink } from 'lucide-react';

const sections = [
  {
    name: 'Federal Agencies',
    items: [
      { label: 'FMCSA', link: 'https://www.fmcsa.dot.gov/' },
      { label: 'PHMSA', link: 'https://www.phmsa.dot.gov/' },
      { label: 'FRA', link: 'https://railroads.dot.gov/' },
      { label: 'MARAD', link: 'https://www.maritime.dot.gov/' },
    ],
  },
  {
    name: 'Rulemaking Dockets',
    items: [
      { label: 'Regulations.gov', link: 'https://www.regulations.gov/' },
      { label: 'Federal Register', link: 'https://www.federalregister.gov/' },
      { label: 'Unified Agenda', link: 'https://www.reginfo.gov/public/do/eAgendaMain' },
    ],
  },
  {
    name: 'International',
    items: [
      { label: 'IMO', link: 'https://www.imo.org/' },
      { label: 'UNECE', link: 'https://unece.org/' },
      { label: 'ISO', link: 'https://www.iso.org/' },
    ],
  },
  {
    name: 'Safety & Security',
    items: [
      { label: 'TSAC', link: 'https://home.treasury.gov/policy-issues/offices/terrorism-and-financial-intelligence' },
      { label: 'NTSB', link: 'https://www.ntsb.gov/' },
      { label: 'TSA Surface', link: 'https://www.tsa.gov/for-industry/surface-transportation' },
    ],
  },
];

export default function RegulatoryMatrix() {
  return (
    <section id="matrix" className="relative mx-auto max-w-6xl px-6 pb-16">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Quick-Link Matrix</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/70">
          A clean, two-tone grid that surfaces the most relevant institutional links for intermodal stakeholders.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <div key={section.name} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-4 text-lg font-semibold text-white">{section.name}</h3>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-md border border-transparent bg-white/0 px-3 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                  >
                    <span>{item.label}</span>
                    <ExternalLink className="h-4 w-4 text-white/40 transition group-hover:text-orange-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
