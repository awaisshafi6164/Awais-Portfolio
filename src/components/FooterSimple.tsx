import { Github, Linkedin, Twitter, Instagram, Codepen } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Codepen, href: 'https://codepen.io', label: 'CodePen' },
];

const FooterSimple = () => {
  return (
    <footer className="py-6 px-6 text-center">
      {/* Mobile social links */}
      <div className="flex justify-center gap-6 mb-6 lg:hidden">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-primary transition-colors"
            aria-label={social.label}
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>
      
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-slate text-xs hover:text-primary transition-colors"
      >
        <p className="mb-2">© 2025 All Rights Reserved</p>
        <p>Designed & Built by Muhammad Awais Shafi</p>
      </a>
    </footer>
  );
};

export default FooterSimple;
