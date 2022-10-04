import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const FourOhFour: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.back();
  }, [router]);

  return <main>404</main>;
};

export default FourOhFour;
