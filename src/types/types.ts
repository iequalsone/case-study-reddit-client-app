// types.ts
export interface RedditPost {
  id: string;
  title: string;
  subreddit: string;
  author: string;
  url: string;
  created_utc: number;
}

export interface RedditResponse {
  data: {
    children: { data: RedditPost }[];
  };
}
