import { RegistrationForm } from "@/features/registration-form/ui/registration-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Регистрация | ITCube Hakaton",
  description: "Наша прекрасная страничка регистрации",
};

const Page = () => {
  return (
    <section className="container my-10 flex flex-grow flex-col justify-center">
      <RegistrationForm />
    </section>
  );
};

export default Page;
