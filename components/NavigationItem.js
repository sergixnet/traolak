import Link from 'next/link';

export default function NavigationItem({ name, url, active }) {
  const cssClass = `${active ? 'is-active' : ''} navigation__list__item`;
  return (
    <li className={cssClass}>
      <Link href={url}>
        <a>{name}</a>
      </Link>
    </li>
  );
}
