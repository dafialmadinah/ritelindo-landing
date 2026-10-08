import { Wordmark } from "@/shared/ui/wordmark";
import { navigation } from "@/shared/config/navigation";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Wordmark light />
        <p>
          Rak minimarket, rak toko, rak gudang, dan jasa interior untuk
          kebutuhan retail Anda.
        </p>
        <nav aria-label="Navigasi footer" className="footer-links">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Ritelindo Group</span>
        <span>Demo website. Logo dan aset foto bersifat ilustratif.</span>
      </div>
    </footer>
  );
}
