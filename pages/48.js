import Layout from '../components/Layout';
import Joerak from '../components/Joerak';
import getJoerak from '../lib/scrapping';

export default function Joerak48({ joerak, hours }) {
  return (
    <Layout hours={hours} path="/48">
      <Joerak joerak={joerak} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const hours = 48;
  const { joerak } = await getJoerak(hours);
  return {
    props: {
      joerak,
      hours,
    },
  };
}
