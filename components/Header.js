export default function Header({ hours }) {
  return (
    <header className="header">
      <h1 className="header__title">#Traolak</h1>
      <h2 className="header__subtitle">Azken {hours} orduetako euskal joerak</h2>
    </header>
  );
}
