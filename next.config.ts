import path from "path";
import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = "My_Portfolio";
const manifestHeaders = [
  {
    key: "Access-Control-Allow-Origin",
    value: "*",
  },
];
 
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? `/${repoName}` : "",
  assetPrefix: isGitHubPages ? `/${repoName}/` : "",
  outputFileTracingRoot: path.join(__dirname),
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      {
        protocol: "https",
        hostname: "**.ufs.sh",
      },
    ],
  },
  ...(isGitHubPages
    ? {}
    : {
        async headers() {
          return [{ source: "/site.webmanifest", headers: manifestHeaders }];
        },
      }),
};

export default nextConfig;
