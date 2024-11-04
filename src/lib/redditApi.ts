import { RedditSearchPost, RedditResponse } from "@/types/types";

export async function fetchSubredditPosts(subreddit: string, sort = "hot") {
  const response = await fetch(
    `https://www.reddit.com/r/${subreddit}/${sort}.json`
  );
  const data = await response.json();
  return data?.data?.children.map((post: any) => post.data);
}

export const searchPosts = async (
  query: string,
  limit = 10,
  sort = "hot"
): Promise<RedditSearchPost[]> => {
  const url = `https://www.reddit.com/search.json?q=${encodeURIComponent(
    query
  )}&sort=${sort}&limit=${limit}`;

  const response = await fetch(url, {
    headers: {
      "User-Agent": "YourAppName/1.0",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data: RedditResponse = await response.json();
  return data.data.children.map((post) => post.data);
};

export const searchAuthenticatedPosts = async (
  query: string,
  accessToken: string,
  limit = 10,
  sort = "hot"
): Promise<RedditSearchPost[]> => {
  const url = `https://oauth.reddit.com/search?q=${encodeURIComponent(
    query
  )}&sort=${sort}&limit=${limit}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "User-Agent": "YourAppName/1.0",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data: RedditResponse = await response.json();
  return data.data.children.map((post) => post.data);
};

export const fetchRedditPosts = async (subreddits: string[], sort = "hot") => {
  const fetches = subreddits.map(async (subreddit) => {
    const response = await fetch(
      `https://www.reddit.com/r/${subreddit}/${sort}.json`
    );
    if (!response.ok) {
      throw new Error(`Error fetching posts from ${subreddit}`);
    }

    const data: RedditResponse = await response.json();
    return data.data.children.map((post) => post.data);
  });

  // Wait for all fetches to complete and return combined results
  const results = await Promise.all(fetches);
  return results.flat();
};
