export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <a
      aria-label="Ritelindo Group, beranda"
      className={`wordmark ${light ? "wordmark--light" : ""}`}
      href="#top"
    >
      <span className="wordmark-mark">R</span>
      <span>
        Ritelindo<small>Group</small>
      </span>
    </a>
  );
}
