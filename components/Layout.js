import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';

export default function Layout(props) {
  const title = props.title ? props.title : `Azken ${props.hours} orduetako euskal joerak`;
  const description = props.description
    ? props.description
    : `Azken ${props.hours} orduetako euskal joerak twitter-en`;
  return (
    <div className="site">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href={`https://traolak.vercel.app${props.path}`}/>
        <meta name="description" content={description} />
        <title>{title} | #Traolak</title>
      </Head>

      <Header hours={props.hours} title="Twitter-eko joerak" />
      <Navigation hours={props.hours} />
      <main className="site__main">{props.children}</main>
      <Footer />
    </div>
  );
}
