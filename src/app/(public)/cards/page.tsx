import { CardSpeciality } from "@/widgets/card-speciality";

const Page = () => {
  return (
    <section className="specialty">
      <div className="container mx-auto mt-[100px]">
        <div className="text-wrap text-center text-4xl font-bold md:text-start">
          Название специальности
        </div>
        <div className="text-wrap break-all px-[10px] pt-[50px] indent-6 text-xl md:px-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum
          impedit itaque officia quaerat? Cum distinctio dolor ex facere ipsam,
          labore minima neque quas quibusdam quo rerum sapiente tempore vero?s
        </div>
        <div className="mt-[50px] flex flex-wrap justify-between px-[10px] lg:px-0">
          <CardSpeciality
            title={"Школа"}
            desc={
              "lorerem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet"
            }
          />
          <CardSpeciality
            title={"Шарага"}
            desc={"lorem ipsum dolor sit amet"}
          />
          <CardSpeciality title={"Вышка"} desc={"lorem ipsum dolor sit amet"} />
          <CardSpeciality
            title={"Работа"}
            desc={"lorem ipsum dolor sit amet"}
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
