export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, MapPin, Trophy } from "lucide-react";

import { Icons } from "@/components/icons";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import GitHubGraphs from "./GitHubGraphs";

type GitHubProfile = {
  avatar_url?: string;
  name?: string | null;
  public_repos?: number;
  followers?: number;
  following?: number;
  company?: string | null;
  location?: string | null;
  bio?: string | null;
};

type LeetCodeStats = {
  solved?: number;
  ranking?: number | null;
  reputation?: number | null;
  easy?: number;
  medium?: number;
  hard?: number;
};

async function getGitHubProfile(): Promise<GitHubProfile | null> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${siteConfig.links.githubUsername}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return {
      avatar_url: data.avatar_url,
      name: data.name,
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      company: data.company,
      location: data.location,
      bio: data.bio,
    };
  } catch {
    return null;
  }
}

async function getLeetCodeStats(): Promise<LeetCodeStats | null> {
  try {
    const match = siteConfig.links.leetcode.match(/leetcode\.com\/u\/([^/]+)/i);
    const username = match?.[1];

    if (!username) {
      return null;
    }

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        query: `
          query userPublicProfile($username: String!) {
            matchedUser(username: $username) {
              submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
              profile {
                ranking
                reputation
              }
            }
          }
        `,
        variables: { username },
      }),
    });

    if (!response.ok) {
      return null;
    }

    const payload = await response.json();
    const matchedUser = payload?.data?.matchedUser;
    const solvedEntries = matchedUser?.submitStatsGlobal?.acSubmissionNum ?? [];

    const getCount = (difficulty: string) =>
      solvedEntries.find(
        (entry: { difficulty: string; count: number }) =>
          entry.difficulty === difficulty
      )?.count;

    return {
      solved: getCount("All"),
      easy: getCount("Easy"),
      medium: getCount("Medium"),
      hard: getCount("Hard"),
      ranking: matchedUser?.profile?.ranking ?? null,
      reputation: matchedUser?.profile?.reputation ?? null,
    };
  } catch {
    return null;
  }
}

const SummaryCard = ({
  icon,
  title,
  value,
  accentClass,
}: {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  accentClass: string;
}) => (
  <div className="rounded-2xl border border-border/40 bg-card/50 p-4 text-card-foreground backdrop-blur-sm">
    <div className="flex items-center gap-3">
      <div
        className={`flex size-11 items-center justify-center rounded-2xl ${accentClass}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="mt-1 text-3xl font-bold tracking-tight">{value}</p>
      </div>
    </div>
  </div>
);

const DifficultyCard = ({
  title,
  value,
  accentClass,
}: {
  title: string;
  value: string | number;
  accentClass: string;
}) => (
  <div className={`rounded-2xl border p-5 ${accentClass}`}>
    <p className="text-sm font-semibold uppercase tracking-[0.2em]">{title}</p>
    <p className="mt-3 text-4xl font-bold tracking-tight">{value}</p>
  </div>
);

const PlatformLink = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) => (
  <Button asChild variant="outline" className="rounded-full">
    <Link href={href} target="_blank" rel="noreferrer">
      {icon}
      {label}
    </Link>
  </Button>
);

const StreakBlock = ({
  title,
  value,
  description,
  bars,
  accentClass,
}: {
  title: string;
  value: string | number;
  description: string;
  bars: number[];
  accentClass: string;
}) => (
  <div className="motion-reveal overflow-hidden rounded-[24px] border border-border/40 bg-card/50 p-5 backdrop-blur-sm">
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
          {title}
        </p>
        <p className="mt-3 text-4xl font-bold tracking-tight">{value}</p>
      </div>
      <div className={`rounded-full px-3 py-1 text-xs font-semibold ${accentClass}`}>
        Active
      </div>
    </div>
    <div className="mt-5 flex h-14 items-end gap-1.5">
      {bars.map((bar, index) => (
        <span
          key={`${title}-${index}`}
          className={`w-full rounded-full ${accentClass}`}
          style={{ height: `${bar}%`, opacity: 0.35 + index * 0.06 }}
        />
      ))}
    </div>
    <p className="mt-4 text-sm leading-6 text-muted-foreground">{description}</p>
  </div>
);

const StatsPage = async () => {
  const githubProfile = await getGitHubProfile();
  const leetCodeStats = await getLeetCodeStats();

  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Stats</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Coding profiles, public activity, and platform highlights.
        </PageHeaderHeading>
        <PageHeaderDescription>
          A database-free snapshot of my GitHub activity, LeetCode progress,
          and Skillrack profile.
        </PageHeaderDescription>
      </PageHeader>

      <section
        className="motion-reveal mt-8 overflow-hidden rounded-[28px] border border-border/40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 text-white"
        style={{ ["--reveal-delay" as string]: "60ms" }}
      >
        <div className="grid grid-cols-1 gap-8 p-6 lg:grid-cols-[1.3fr_0.9fr] lg:p-8">
          <div>
            <div className="flex items-start gap-4">
              <div className="motion-float relative size-20 overflow-hidden rounded-3xl border border-white/15 bg-white/10">
                {githubProfile?.avatar_url ? (
                  <Image
                    src={githubProfile.avatar_url}
                    alt="GitHub avatar"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Icons.gitHub className="size-8" />
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-400">
                  GitHub Profile
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight">
                  {githubProfile?.name ?? "Balamurugan"}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-300">
                  {githubProfile?.bio ??
                    "Projects, repositories, and public development activity."}
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-zinc-300">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="size-4" />
                    {githubProfile?.location ?? "Tamil Nadu, India"}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Trophy className="size-4" />
                    {githubProfile?.company ?? "Open to impactful engineering work"}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <PlatformLink
                href={siteConfig.links.githubProfile}
                label="GitHub"
                icon={<Icons.gitHub className="size-4" />}
              />
              <PlatformLink
                href={siteConfig.links.leetcode}
                label="LeetCode"
                icon={<Icons.leetCode className="size-4" />}
              />
              <PlatformLink
                href={siteConfig.links.skillrack}
                label="Skillrack"
                icon={<Icons.skillrack className="size-4" />}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm text-zinc-400">Repositories</p>
              <p className="mt-2 text-4xl font-bold">
                {githubProfile?.public_repos ?? "N/A"}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm text-zinc-400">Followers</p>
              <p className="mt-2 text-4xl font-bold">
                {githubProfile?.followers ?? "N/A"}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm text-zinc-400">Following</p>
              <p className="mt-2 text-4xl font-bold">
                {githubProfile?.following ?? "N/A"}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm text-zinc-400">LeetCode Solved</p>
              <p className="mt-2 text-4xl font-bold">
                {leetCodeStats?.solved ?? "N/A"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4"
        style={{ ["--reveal-delay" as string]: "140ms" }}
      >
        <StreakBlock
          title="GitHub Reach"
          value={githubProfile?.followers ?? "N/A"}
          description="Follower count as a simple signal of profile visibility and developer reach."
          bars={[28, 46, 52, 65, 72, 78, 90]}
          accentClass="bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
        />
        <StreakBlock
          title="Repo Momentum"
          value={githubProfile?.public_repos ?? "N/A"}
          description="Repository count presented in a streak-style card for portfolio momentum."
          bars={[34, 38, 50, 58, 67, 76, 88]}
          accentClass="bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
        />
        <StreakBlock
          title="LeetCode Pace"
          value={leetCodeStats?.solved ?? "N/A"}
          description="Accepted problem count framed like a coding streak progress snapshot."
          bars={[18, 32, 44, 60, 70, 82, 96]}
          accentClass="bg-amber-500 text-white dark:bg-amber-400 dark:text-zinc-950"
        />
        <StreakBlock
          title="Practice Footprint"
          value="3 Platforms"
          description="GitHub, LeetCode, and Skillrack combined into one consistent public coding footprint."
          bars={[22, 30, 48, 54, 68, 80, 92]}
          accentClass="bg-orange-500 text-white dark:bg-orange-400 dark:text-zinc-950"
        />
      </section>

      <section
        className="motion-reveal mt-8 rounded-[28px] border border-border/40 p-5 lg:p-6"
        style={{ ["--reveal-delay" as string]: "220ms" }}
      >
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              GitHub Activity
            </h2>
            <p className="text-sm text-muted-foreground">
              Contribution graph from @{siteConfig.links.githubUsername}
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link
              href={siteConfig.links.githubProfile}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
              <ExternalLink className="size-4" />
            </Link>
          </Button>
        </div>
        <GitHubGraphs />
      </section>

      <section
        className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[1.1fr_0.9fr]"
        style={{ ["--reveal-delay" as string]: "300ms" }}
      >
        <div
          className="motion-reveal rounded-[28px] border border-border/40 bg-card/50 p-5 backdrop-blur-sm lg:p-6"
          style={{ ["--reveal-delay" as string]: "300ms" }}
        >
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#FFF3E8] text-[#FFA116] dark:bg-[#2B1A07] dark:text-[#FFA116]">
              <Icons.leetCode className="size-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold tracking-tight">LeetCode</h2>
              <p className="text-sm text-muted-foreground">
                Difficulty split and public problem-solving progress
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <DifficultyCard
              title="Easy"
              value={leetCodeStats?.easy ?? "N/A"}
              accentClass="border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-300"
            />
            <DifficultyCard
              title="Medium"
              value={leetCodeStats?.medium ?? "N/A"}
              accentClass="border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-300"
            />
            <DifficultyCard
              title="Hard"
              value={leetCodeStats?.hard ?? "N/A"}
              accentClass="border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-900 dark:bg-rose-950/30 dark:text-rose-300"
            />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            <SummaryCard
              icon={<Icons.leetCode className="size-5" />}
              title="Global Ranking"
              value={leetCodeStats?.ranking?.toLocaleString() ?? "N/A"}
              accentClass="bg-[#FFF3E8] text-[#FF8C00] dark:bg-[#2B1A07] dark:text-[#FFA116]"
            />
            <SummaryCard
              icon={<Icons.leetCode className="size-5" />}
              title="Reputation"
              value={leetCodeStats?.reputation ?? "N/A"}
              accentClass="bg-[#FFF3E8] text-[#FF8C00] dark:bg-[#2B1A07] dark:text-[#FFA116]"
            />
          </div>

          <Button asChild className="mt-5 rounded-full">
            <Link href={siteConfig.links.leetcode} target="_blank" rel="noreferrer">
              Open LeetCode Profile
              <ExternalLink className="size-4" />
            </Link>
          </Button>
        </div>

        <div
          className="motion-reveal overflow-hidden rounded-[28px] border border-border/40 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-300 p-[1px]"
          style={{ ["--reveal-delay" as string]: "380ms" }}
        >
          <div className="h-full rounded-[27px] bg-background/95 p-5 lg:p-6">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-300">
                <Icons.skillrack className="size-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Skillrack</h2>
                <p className="text-sm text-muted-foreground">
                  Practice profile and public resume record
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-orange-200/60 bg-gradient-to-br from-orange-50 to-amber-50 p-5 dark:border-orange-900/40 dark:from-orange-950/20 dark:to-amber-950/20">
              <p className="text-xs uppercase tracking-[0.24em] text-orange-600 dark:text-orange-300">
                Featured Profile
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight">
                Skillrack Public Resume
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                A dedicated section for coding-practice history, platform-based
                progress, and resume-style Skillrack visibility. This acts as a
                complementary proof-of-work area alongside GitHub and LeetCode.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-orange-200/60 bg-white/80 p-4 dark:border-orange-900/40 dark:bg-background/40">
                  <p className="text-sm font-medium text-muted-foreground">
                    Platform Type
                  </p>
                  <p className="mt-2 text-2xl font-bold tracking-tight">
                    Coding Practice
                  </p>
                </div>
                <div className="rounded-2xl border border-orange-200/60 bg-white/80 p-4 dark:border-orange-900/40 dark:bg-background/40">
                  <p className="text-sm font-medium text-muted-foreground">
                    Access
                  </p>
                  <p className="mt-2 text-2xl font-bold tracking-tight">
                    Public Link
                  </p>
                </div>
              </div>

              <Button asChild className="mt-5 rounded-full bg-orange-500 text-white hover:bg-orange-600">
                <Link href={siteConfig.links.skillrack} target="_blank" rel="noreferrer">
                  Open Skillrack Resume
                  <ExternalLink className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Pager
        prevHref="/education"
        nextHref="/"
        prevTitle="Education"
        nextTitle="Home"
      />
    </>
  );
};

export default StatsPage;
