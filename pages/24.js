import Layout from '../components/Layout';
import Joerak from '../components/Joerak';
import getJoerak from '../lib/scrapping';

export default function Joerak24({ joerak, hours }) {
  return (
    <Layout hours={hours} path="/24">
      <Joerak joerak={joerak} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const hours = 24;
  const { joerak } = await getJoerak(hours);
  return {
    props: {
      joerak,
      hours,
    },
  };
}
