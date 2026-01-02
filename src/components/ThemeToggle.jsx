export const ThemeToggle = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="p-2 rounded-md hover:bg-gray-200/20 transition"
    title="Toggles light & dark"
    aria-label="Toggle theme"
    aria-live="polite"
  >
    {theme === "light" ? (
      // Moon icon
       <svg
        className="w-6 h-6 text-primary"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 109.8 9.8z" />
      </svg>
    ) : (
      // Sun icon
      <svg
        className="w-6 h-6 text-primary"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <circle cx="12" cy="12" r="6" />
        <g stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    )}
  </button>
);
