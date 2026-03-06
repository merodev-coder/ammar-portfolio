const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Designed & Coded with ☕ by Ammar.</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/merodev-coder" target="_blank" rel="noreferrer" className="social-icon">
          <img src="assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.instagram.com/ammaraltanany?igsh=OXV4eTZ3YWk4bmdw&utm_source=qr" target="_blank" rel="noreferrer" className="social-icon">
          <img src="assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2026 Ammar Altanany. All rights reserved.</p>
    </footer>
  );
};

export default Footer;