import React from 'react';
import { Shield, FileText, Scale, Globe } from 'lucide-react';

const pillars = [
  {
    title: 'Safety & Compliance',
    desc: 'Guidance on equipment standards, operations, and safety protocols across modes.',
    icon: Shield,
    color: 'from-orange-400 to-amber-500',
  },
  {
    title: 'Policy & Rulemaking',
    desc: 'Track active dockets, comment deadlines, and recently finalized rules.',
    icon: FileText,
    color: 'from-fuchsia-400 to-pink-500',
  },
  {
    title: 'Legal & Enforcement',
    desc: 'Case updates, interpretations, and enforcement advisories that impact carriers.',
    icon: Scale,
    color: 'from-sky-400 to-cyan-500',
  },
  {
    title: 'Global Standards',
    desc: 'International frameworks and harmonization efforts for intermodal networks.',
    icon: Globe,
    color: 'from-emerald-400 to-teal-500',
  },
];

export default function PillarCards() {
  return (
    <section id="highlights" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Regulatory Highlights</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70">
            A streamlined hub of the most-referenced areas. Jump in through these quick-entry cards.
          </p>
        </div>
        <a
          href="#matrix"
          className="hidden rounded-md border border-white/20 px-3 py-2 text-sm font-medium text-white/80 transition hover:border-orange-400 hover:text-orange-300 md:inline-block"
        >
          Explore the Matrix
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map(({ title, desc, icon: Icon, color }) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.08]"
          >
            <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${color} opacity-20 blur-2xl`} />
            <div className="relative z-10">
              <div className="mb-4 inline-flex rounded-lg bg-white/10 p-2 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="mt-4 text-sm font-medium text-orange-300 opacity-0 transition group-hover:opacity-100">
                Learn more →
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
