export function ThemeScript() {
  // Inject a tiny inline script to set theme before hydration to avoid flashes.
  const code = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      var useDark = stored ? stored === 'dark' : prefersDark;
      var root = document.documentElement;
      if (useDark) root.classList.add('dark'); else root.classList.remove('dark');
    } catch (e) {}
  })();`
  return <script dangerouslySetInnerHTML={{ __html: code }} />
}
