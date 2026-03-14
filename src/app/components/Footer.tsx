import { MessageCircle, Send, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Copyright */}
        <div className="text-center">
          <div className="mb-4">
            <span className="text-4xl font-black text-red-600 tracking-tight">
              AdAttack<span className="text-red-600">.</span>
            </span>
          </div>
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} AdAttack. Winning Creatives for eCommerce
          </p>
        </div>
      </div>
    </footer>
  );
}