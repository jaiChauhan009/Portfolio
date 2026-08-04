// Picks a few of the owner's public GitHub repos and refreshes the
// "Recent GitHub Activity" section of README.md between the markers below.
// Run once per workflow invocation; the caller (CI workflow) commits after
// each repo is processed so a run produces several small commits.

const README_PATH = new URL("../README.md", import.meta.url);
const START_MARKER = "<!--START_SECTION:activity-->";
const END_MARKER = "<!--END_SECTION:activity-->";
const MAX_LINES = 6;

const owner = process.env.GITHUB_OWNER || "jaiChauhan009";
const token = process.env.GITHUB_TOKEN;
const mode = process.argv[2]; // "pick" | "apply"

const headers = {
  Accept: "application/vnd.github+json",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

async function ghFetch(path) {
  const res = await fetch(`https://api.github.com${path}`, { headers });
  if (!res.ok) throw new Error(`GitHub API ${path} failed: ${res.status}`);
  return res.json();
}

async function pickRepos(count) {
  const repos = await ghFetch(
    `/users/${owner}/repos?type=owner&sort=pushed&per_page=100`
  );
  const eligible = repos.filter((r) => !r.fork && !r.archived);
  const shuffled = eligible.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((r) => r.name);
}

async function buildLine(repo) {
  let detail = "recent updates";
  try {
    const commits = await ghFetch(
      `/repos/${owner}/${repo}/commits?per_page=1`
    );
    if (commits[0]?.commit?.message) {
      detail = commits[0].commit.message.split("\n")[0].slice(0, 80);
    }
  } catch {
    // fall back to generic detail line
  }
  const date = new Date().toISOString().slice(0, 10);
  return `- \`${repo}\` — ${detail} _(${date})_`;
}

function readSection(text) {
  const start = text.indexOf(START_MARKER);
  const end = text.indexOf(END_MARKER);
  if (start === -1 || end === -1) {
    throw new Error("README markers not found");
  }
  const inner = text.slice(start + START_MARKER.length, end).trim();
  const lines = inner ? inner.split("\n").map((l) => l.trim()) : [];
  return { start, end, lines };
}

function writeSection(text, lines) {
  const { start, end } = readSection(text);
  const body = lines.length ? `\n${lines.join("\n")}\n` : "\n";
  return text.slice(0, start) + START_MARKER + body + END_MARKER + text.slice(end + END_MARKER.length);
}

const fs = await import("node:fs/promises");

if (mode === "pick") {
  const count = Number(process.argv[3] || 4);
  const repos = await pickRepos(count);
  console.log(repos.join("\n"));
} else if (mode === "apply") {
  const repo = process.argv[3];
  if (!repo) throw new Error("usage: apply <repo-name>");
  const text = await fs.readFile(README_PATH, "utf8");
  const { lines } = readSection(text);
  const newLine = await buildLine(repo);
  let updated = [...lines, newLine];
  if (updated.length > MAX_LINES) {
    updated = updated.slice(updated.length - MAX_LINES);
  }
  await fs.writeFile(README_PATH, writeSection(text, updated));
  console.log(`README updated with activity for ${repo}`);
} else {
  console.error("usage: node update-readme-activity.mjs <pick|apply> ...");
  process.exit(1);
}
