"use client";
import { VerifyEmail } from "@/features/verify-email";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const code = params.code;

  return (
    <section className="container my-10 flex flex-grow flex-col justify-center">
      <VerifyEmail code={code} />
    </section>
  );
};

export default Page;
