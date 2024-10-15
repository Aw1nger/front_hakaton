import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Skeleton } from "@/shared/components/ui/skeleton";

export const SkeletonCard = () => {
  return (
    <div className="basis-full p-1 md:basis-1/2 xl:basis-1/3">
      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-5 w-full" />
          </CardTitle>
          <CardDescription className="flex">
            <Skeleton className="h-5 basis-4/5" />
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};
