import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

export const CourseCard = ({
  id,
  title,
  type,
}: {
  id: number;
  title: string;
  type: "admin" | "user";
}) => {
  return (
    <div className="basis-full p-3 md:basis-1/2 xl:basis-1/3">
      <Card>
        <CardHeader>
          <CardTitle>
            <link
              href={type === "admin" ? `/admin-tests/${id}` : `/tests/${id}`}
              className="p-5"
            >
              {title}
            </link>
          </CardTitle>
          <CardDescription>
            А тут потом будет какое-нибудь описание
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};
