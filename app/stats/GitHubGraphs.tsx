"use client";

import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import type { Activity } from "react-github-calendar";
import { siteConfig } from "@/config/site";
import { useTheme } from "next-themes";

const GitHubGraphs = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const theme = {
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  };

  const getThreeMonthsAgo = () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 3);
    return date;
  };

  const transformThreeMonths = (data: Activity[]) => {
    const threeMonthsAgo = getThreeMonthsAgo();
    return data.filter((activity) => new Date(activity.date) >= threeMonthsAgo);
  };

  return (
    <>
      <div className="w-full md:hidden">
        <GitHubCalendar
          username={siteConfig.links.githubUsername}
          errorMessage="Could not fetch GitHub activity"
          hideColorLegend
          theme={theme}
          colorScheme={resolvedTheme as "light" | "dark"}
          showWeekdayLabels
          blockMargin={6}
          transformData={transformThreeMonths}
        />
      </div>
      <div className="hidden w-full md:block">
        <GitHubCalendar
          username={siteConfig.links.githubUsername}
          errorMessage="Could not fetch GitHub activity"
          hideColorLegend={false}
          theme={theme}
          colorScheme={resolvedTheme as "light" | "dark"}
          showWeekdayLabels
          blockMargin={6}
        />
      </div>
    </>
  );
};

export default GitHubGraphs;
