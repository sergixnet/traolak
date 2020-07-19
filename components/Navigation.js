import NavigationItem from './NavigationItem';

export default function Navigation({hours}) {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <NavigationItem name="6 ordu" url="/" active={hours === 6} />
        <NavigationItem name="12 ordu" url="/12" active={hours === 12} />
        <NavigationItem name="24 ordu" url="/24" active={hours === 24} />
        <NavigationItem name="48 ordu" url="/48" active={hours === 48} />
      </ul>
    </nav>
  );
}