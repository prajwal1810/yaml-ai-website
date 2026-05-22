const paths = {
  message: [
    'M4.75 6.75A3.75 3.75 0 0 1 8.5 3h7A3.75 3.75 0 0 1 19.25 6.75v4.5A3.75 3.75 0 0 1 15.5 15h-4.25L6 19v-4.25a3.75 3.75 0 0 1-1.25-2.8v-5.2Z',
    'M8 8h8M8 11h5'
  ],
  phone: [
    'M6.5 4.5 9.6 6l-1 3.1c1.1 2.2 2.8 3.9 5 5l3.1-1 1.5 3.1c.3.7.1 1.5-.5 2-1 .8-2.4 1.1-3.7.7-4.8-1.5-8.4-5.1-9.9-9.9-.4-1.3-.1-2.7.7-3.7.5-.6 1.3-.8 2-.5Z'
  ],
  workflow: [
    'M5 7h5v5H5zM14 12h5v5h-5z',
    'M10 9.5h1.75A2.25 2.25 0 0 1 14 11.75V14'
  ],
  filter: ['M4 6h16M7 12h10M10 18h4'],
  support: [
    'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z',
    'M9.6 9a2.4 2.4 0 0 1 4.8 0c0 2-2.4 2-2.4 4M12 16h.01'
  ],
  calendar: [
    'M7 4v3M17 4v3M5.5 6h13A2.5 2.5 0 0 1 21 8.5v10A2.5 2.5 0 0 1 18.5 21h-13A2.5 2.5 0 0 1 3 18.5v-10A2.5 2.5 0 0 1 5.5 6Z',
    'M3 10h18'
  ],
  shield: ['M12 3 19 6v5c0 4.4-2.8 7.4-7 9-4.2-1.6-7-4.6-7-9V6l7-3Z', 'm9.5 12 1.8 1.8 4-5'],
  chart: ['M5 18V9M12 18V5M19 18v-7'],
  arrow: ['M5 12h14M13 6l6 6-6 6']
};

export function Icon({ name = 'shield', className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {(paths[name] || paths.shield).map((d) => (
        <path
          d={d}
          key={d}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      ))}
    </svg>
  );
}
