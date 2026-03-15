function Header() {
  return (
    <header>
      <img
        src="/mathsymbols.png"
        alt="My Math Practice Logo"
        width={50}
        height={50}
      />
      <h1>My Math Practice</h1>
      <img
        src="/mathsymbols.png"
        alt="My Math Practice Logo"
        width={50}
        height={50}
      />
      <p className="print-name-marker">Name:</p>
      <p className="print-credit">Created using my-math-practice.com</p>
    </header>
  );
}

export default Header;
