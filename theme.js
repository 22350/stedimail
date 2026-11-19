// Light or dark background, from Settings (Paul, 2026-11-18). Runs in <head> before the page draws, so a
// light page never flashes dark first. Dark is the default; style.css is dark unless <html> has .light.
try { if (localStorage.getItem('stedimail-theme') === 'light') document.documentElement.classList.add('light'); } catch {}
