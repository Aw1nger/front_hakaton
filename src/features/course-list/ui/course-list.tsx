"use client";

import { useEffect } from "react";
import { getCourses } from "../model/get-courses";
import { CourseCard } from "./course-card";
import { SkeletonCard } from "./skeleton-card";

export const CourseList = ({ type }: { type: "admin" | "user" }) => {
  const [getList, pendingList, successList, responseList] = getCourses();
  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="flex flex-wrap">
      {true &&
        Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)}
      {pendingList &&
        successList &&
        responseList?.map(
          (item: { id: number; title: string }, index: number) => (
            <CourseCard
              id={item.id}
              title={item.title}
              key={index}
              type={type}
            />
          ),
        )}
    </div>
  );
};
