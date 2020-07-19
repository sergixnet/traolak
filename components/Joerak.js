export default function Joerak({ joerak }) {
  return (
    <ul className="joerak">
      {joerak.length &&
        joerak.map((j) => {
          return (
            <li key={j.name} className="joerak__item">
              <a href={j.url} target="_blank" rel="noopener noreferrer">
                {j.name}
              </a>
            </li>
          );
        })}
    </ul>
  );
}
