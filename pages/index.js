import Layout from '../components/Layout';
import Joerak from '../components/Joerak';
import getJoerak from '../lib/scrapping';

export default function Home({ joerak, hours }) {
  return (
    <Layout hours={hours} path="/">
      <Joerak joerak={joerak} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const hours = 6;
  const { joerak } = await getJoerak(hours);
  return {
    props: {
      joerak,
      hours,
    },
  };
}
