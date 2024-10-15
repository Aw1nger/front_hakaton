import { LoginForm } from "@/features/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вход | ITCube Hakaton",
  description: "Наша прекрасная страничка логина",
};

const Page = () => {
  return (
    <section className="container my-10 flex flex-grow flex-col justify-center">
      <LoginForm />
    </section>
  );
};

export default Page;
