import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';

export default function Layout(props) {
  const title = props.title
    ? props.title
    : `Azken ${props.hours} orduetako euskal joerak`;
  const description = props.description
    ? props.description
    : `Azken ${props.hours} orduetako euskal joerak twitter-en`;
  return (
    <div className="site">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link
          rel="canonical"
          href={`https://traolak.vercel.app${props.path}`}
        />

        <title>{title} | #Traolak</title>
        <meta
          name="title"
          content={title}
        />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://traolak.vercel.app${props.path}`} />
        <meta
          property="og:title"
          content={title}
        />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://traolak.vercel.app/traolak-social-image.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://traolak.vercel.app${props.path}`} />
        <meta
          property="twitter:title"
          content={title}
        />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="https://traolak.vercel.app/traolak-social-image.png" />
      </Head>

      <Header hours={props.hours} title="Twitter-eko joerak" />
      <Navigation hours={props.hours} />
      <main className="site__main">{props.children}</main>
      <Footer />
    </div>
  );
}
