import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata = {
  title: 'AI Real Estate Blog - Tips & Insights',
  description:
    'Expert insights on AI automation for real estate agents in India. Guides, case studies and tips to grow your real estate business with AI.',
  alternates: {
    canonical: '/blog/'
  },
  openGraph: {
    title: 'AI Real Estate Blog - Tips & Insights | YAML AI',
    description:
      'Guides and insights on AI automation for Indian real estate agents, brokerages and growing property teams.',
    url: 'https://yamlai.in/blog/'
  }
};

const posts = [
  {
    href: '/blog/ai-agents-real-estate-india/',
    title: 'How AI Agents Are Transforming Real Estate in India',
    description:
      'Discover how AI agents help Indian real estate professionals automate lead generation, follow-ups and property inquiries.',
    date: 'June 3, 2026',
    tag: 'Real estate automation'
  }
];

export default function BlogPage() {
  return (
    <>
      <section className="blue-wash pt-32">
        <div className="container-x pb-20">
          <SectionHeader
            eyebrow="Blog"
            title={
              <>
                Practical AI automation insights for <span className="sentence-accent">real estate</span>.
              </>
            }
            copy="Guides, workflows and examples for agents, brokerages and business owners who want faster response times and less manual follow-up."
          />
        </div>
      </section>
      <section className="section-pad">
        <div className="container-x grid gap-5">
          {posts.map((post) => (
            <Link
              className="premium-card-motion block rounded-[2rem] border border-line bg-white p-7 shadow-soft"
              href={post.href}
              key={post.href}
            >
              <p className="text-sm font-bold text-skybrand">{post.tag}</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.04em] text-ink">{post.title}</h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-600">{post.description}</p>
              <p className="mt-6 text-sm font-semibold text-slate-500">{post.date}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
