import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

export const CardSpeciality = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
  return (
    <Card className="my-[25px] h-[250px] lg:basis-1/5 basis-full   xl:mt-0">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="">{desc}</CardDescription>
      </CardHeader>
    </Card>
  );
};
