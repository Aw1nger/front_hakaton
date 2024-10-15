import { Button } from "@/shared/components/ui/button";

const Page = () => {
  return (
    <>
      <div className="container my-[50px]">
        <div className="flex flex-wrap">
          <div className="flex basis-full items-center justify-center py-[110px] lg:basis-1/2">
            <img src="/image/title__logobox.png" alt="" className="invert dark:invert-0" />
          </div>
          <div className="flex basis-full items-center lg:basis-1/2">
            <div className="text-about-us">
              <div className="mb-[60px] flex flex-row justify-center lg:mb-[9px]">
                <div className="title-box rounded-sm border-[1px] border-muted-foreground px-[40px] py-[14px] text-2xl font-bold">
                  О нас
                </div>
              </div>
              <div className="title-desc text-md lg:text-center text-start font-semibold">
                В IT-Cube мы гордимся тем, что мы находимся на передовой линии
                ИТ-образования, предоставляя студентам навыки, знания и
                практический опыт, необходимый для успеха в быстро развивающейся
                технологической индустрии. Наша школа основана на принципах
                инноваций, сотрудничества и глубокого обязательства помочь нашим
                студентам достичь их полного потенциала.
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-[35px] basis-full">
            <Button className="py-[19px] px-[30px] text-lg font-bold dark:bg-white bg-black text-white dark:text-black transition hover:scale-105it ">Пройти тест</Button>
          </div>
          {/*<div className="mt-[60px] flex basis-full items-center">*/}
          {/*  <div className="text-about-us">*/}
          {/*    <div className="mb-[60px] flex flex-row justify-center">*/}
          {/*      <div className="title-box rounded-sm border-[1px] border-muted-foreground px-[40px] py-[14px] text-2xl font-bold">*/}
          {/*        Богатая история успеха*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="title-desc text-md font-semibold">*/}
          {/*      С богатой историей успеха и доказанным треком производства*/}
          {/*      высококвалифицированных ИТ-специалистов, IT-Cube установилась*/}
          {/*      как лидер в области ИТ-образования. Наша школа произвела*/}
          {/*      бесчисленных выпускников, которые пошли на успешные карьеры в*/}
          {/*      различных отраслях, от разработки программного обеспечения и*/}
          {/*      кибербезопасности до науки о данных и искусственного интеллекта.*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="mt-[60px] flex basis-full items-center">*/}
          {/*  <div className="text-about-us">*/}
          {/*    <div className="mb-[60px] flex flex-row justify-center">*/}
          {/*      <div className="title-box rounded-sm border-[1px] border-muted-foreground px-[40px] py-[14px] text-2xl font-bold">*/}
          {/*        Экспертный преподавательский состав и современные учебные*/}
          {/*        помещения*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="title-desc text-md font-semibold">*/}
          {/*      Наша команда опытных преподавателей состоит из экспертов*/}
          {/*      отрасли, которые страстно любят преподавание и наставничество.*/}
          {/*      Они приносят реальный опыт и экспертизу в класс, обеспечивая,*/}
          {/*      что студенты получают всестороннее образование, которое сочетает*/}
          {/*      теоретические основы с практическими навыками. <br /> <br />{" "}*/}
          {/*      Кроме того, мы также предлагаем современные учебные помещения,*/}
          {/*      которые предоставляют студентам доступ к последним технологиям и*/}
          {/*      инструментам. Наше современное оборудование и коллаборативные*/}
          {/*      рабочие пространства спроектированы для стимулирования*/}
          {/*      творчества, инноваций и чувства сообщества среди наших*/}
          {/*      студентов.*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="mt-[60px] flex basis-full items-center">*/}
          {/*  <div className="text-about-us">*/}
          {/*    <div className="mb-[60px] flex flex-row justify-center">*/}
          {/*      <div className="title-box rounded-sm border-[1px] border-white px-[40px] py-[14px] text-2xl font-bold">*/}
          {/*        Гибкий и адаптируемый учебный план*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="title-desc text-md font-semibold">*/}
          {/*      В IT-Cube мы понимаем, что каждый студент уникален, поэтому мы*/}
          {/*      предлагаем гибкий и адаптируемый учебный план, который может*/}
          {/*      быть адаптирован к потребностям каждого индивидуума. Наше*/}
          {/*      учебное программы и курсы спроектированы для доступности и*/}
          {/*      релевантности для студентов всех уровней навыков, от начинающих*/}
          {/*      до продвинутых учеников. <br /> <br /> Независимо от того,*/}
          {/*      интересуетесь ли вы разработкой программного обеспечения,*/}
          {/*      кибербезопасностью, наукой о данных или любой другой областью*/}
          {/*      ИТ, у нас есть программа или курс, который подходит вам. Наш*/}
          {/*      учебный план постоянно развивается, чтобы соответствовать*/}
          {/*      последним тенденциям и разработкам в технологической индустрии,*/}
          {/*      обеспечивая, что наши студенты получают самое современное и*/}
          {/*      релевантное образование.*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="mt-[60px] flex basis-full items-center">*/}
          {/*  <div className="text-about-us">*/}
          {/*    <div className="mb-[60px] flex flex-row justify-center">*/}
          {/*      <div className="title-box rounded-sm border-[1px] border-white px-[40px] py-[14px] text-2xl font-bold">*/}
          {/*        Поддерживающее и инклюзивное сообщество*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="title-desc text-md font-semibold">*/}
          {/*      В IT-Cube мы считаем, что поддерживающее и инклюзивное*/}
          {/*      сообщество является ключевым для успеха в ИТ-образовании.*/}
          {/*      Поэтому мы создали приветливую и инклюзивную среду, где студенты*/}
          {/*      могут учиться, расти и процветать. <br/> <br/> Мы предлагаем ряд*/}
          {/*      поддерживающих услуг, чтобы помочь студентам достичь успеха, от*/}
          {/*      академического консультирования и репетиторства до карьерного*/}
          {/*      консультирования и помощи в трудоустройстве. Мы также проводим*/}
          {/*      различные мероприятия и по году, предоставляя студентам*/}
          {/*      возможности общения с их сверстниками, сетевания с*/}
          {/*      профессионалами отрасли и демонстрации своих навыков и талантов.*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </>
  );
};

export default Page;
