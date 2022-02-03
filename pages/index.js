import Layout from "../components/Layout";
import Link from "next/link";

// css
import "antd/dist/antd.css";

import { Button } from "antd";

import { getRooms } from "../redux/actions/roomActions";
import { wrapper } from "../redux/store";

export default function Home() {
  return (
    <Layout title='this is home'>
      <h1>hello this is index</h1>
      <Link href='/dashboard'>
        <Button type='primary'>go to dashboard</Button>
      </Link>
    </Layout>
  );
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ req, store }) => {
//     await store.dispatch(getRooms(req));
//   }
// );

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getRooms(req));
    }
);
