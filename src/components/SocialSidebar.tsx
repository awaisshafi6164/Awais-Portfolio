import { Github, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/awaisshafi6164', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-awais-shafi', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/__iawais', label: 'Instagram' },
];

const SocialSidebar = () => {
  return (
    <>
      {/* Left sidebar - Social links */}
      <div className="hidden lg:flex fixed left-10 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-slate">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-primary hover:-translate-y-1 transition-all duration-200"
            aria-label={social.label}
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>

      {/* Right sidebar - Email */}
      <div className="hidden lg:flex fixed right-10 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-slate">
        <a
          href="mailto:awaisshafi.pk@gmail.com"
          className="text-slate hover:text-primary transition-colors duration-200 font-mono text-xs tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
        >
          awaisshafi.pk@gmail.com
        </a>
      </div>
    </>
  );
};

export default SocialSidebar;
