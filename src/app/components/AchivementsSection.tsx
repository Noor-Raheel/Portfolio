"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import with the correct types
const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
) as any;  // Type it as `any` to bypass TypeScript errors

interface Achievement {
  metric: string;
  value: string;
  postfix?: string;
  prefix?: string;
}

const achievementsList: Achievement[] = [
  {
    metric: "Projects",
    value: "3",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "",
  },
  {
    metric: "Awards",
    value: "0",
  },
  {
    metric: "Year",
    value: "1",
  },
];

const AchievementsSection: React.FC = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma={true}
                animateToNumber={parseInt(achievement.value.replace(/,/g, ""))}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_: unknown, idx: number) => ({
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (idx + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
