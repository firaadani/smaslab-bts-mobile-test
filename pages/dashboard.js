import React from "react";
import Link from "next/link";

import "antd/dist/antd.css";
import { Button } from "antd";
const dashboard = () => {
  return (
    <div>
      <h1>this is dashboard</h1>
      <Link href='/'>
        <Button type='primary'> GO BACK HOME</Button>
      </Link>
    </div>
  );
};

export default dashboard;
