import Layout from '../components/Layout';
import Joerak from '../components/Joerak';
import getJoerak from '../lib/scrapping';

export default function Joerak12({ joerak, hours }) {
  return (
    <Layout hours={hours}>
      <Joerak joerak={joerak} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const hours = 12;
  const { joerak } = await getJoerak(hours);
  return {
    props: {
      joerak,
      hours,
    },
  };
}
