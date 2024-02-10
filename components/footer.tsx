export default function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-2 text-center md:flex-row">
      <span>
        Made with{' '}
        <a
          className="text-gray-800 hover:text-blue-500 hover:underline"
          href="https://nextjs.org"
          target="_blank"
        >
          Bun Next.js
        </a>
      </span>
      <a
        className="text-gray-800 hover:text-blue-500 hover:underline"
        href="https://github.com/rendiriz/calendar"
        target="_blank"
      >
        Github
      </a>
    </footer>
  );
}
