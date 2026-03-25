import React from 'react';
import {Card, CardContent} from "../../components/ui/card.tsx";
import {Skeleton} from "../../components/ui/skeleton.tsx";

const SkeletonMediaCard: React.FC = () => {
  return (
    <Card className="overflow-hidden">
    <Skeleton className="w-full aspect-[2/3]" />
    <CardContent className="p-3 flex flex-col gap-2">
      <Skeleton className="h-3 w-4/5" />
      <Skeleton className="h-3 w-2/5" />
      <div className="flex justify-between mt-1">
        <Skeleton className="h-2.5 w-1/4" />
        <Skeleton className="h-2.5 w-1/5" />
      </div>
    </CardContent>
  </Card>
  );
};

export default SkeletonMediaCard;