import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GithubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Justdevang/repos?sort=updated&per_page=6');
        const data = await response.json();
        // Filter out forks if desired
        const filteredRepos = data.filter(repo => !repo.fork);
        setRepos(filteredRepos);
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    if (!loading && repos.length > 0) {
      const ctx = gsap.context(() => {
        gsap.utils.toArray('.repo-card').forEach((el, i) => {
          gsap.fromTo(
            el,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: i * 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, [loading, repos]);

  return (
    <section id="github" ref={sectionRef} className="section bg-[var(--bg)]">
      <div className="container">
        {/* Section Label */}
        <div className="mb-12">
          <span className="section-label">( open source )</span>
          <h2 className="heading-lg mt-4">
            GitHub<br />
            <em style={{ fontStyle: 'italic' }}>Repositories.</em>
          </h2>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <span className="font-mono text-[11px] animate-pulse uppercase tracking-[0.2em]">Fetching Repos...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-card group relative p-8 border border-[var(--border)] hover:border-[var(--text)] transition-colors duration-500"
                style={{ textDecoration: 'none' }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] tracking-widest text-[var(--text-muted)] uppercase">
                      {repo.language || 'Code'}
                    </span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>

                  <h3 className="font-display text-[22px] font-bold tracking-tight mb-4 group-hover:text-[var(--text-muted)] transition-colors">
                    {repo.name.replace(/-/g, ' ')}
                  </h3>

                  <p className="font-mono text-[11px] leading-relaxed text-[var(--text-muted)] line-clamp-3 mb-8 flex-1">
                    {repo.description || 'No description provided for this repository.'}
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                      <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase">{repo.stargazers_count} stars</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase">{repo.forks_count} forks</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/Justdevang"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-[0.2em] uppercase border-b border-current pb-1 hover:opacity-50 transition-opacity"
          >
            Explore all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default GithubRepos;
