// types.ts
export interface RedditSearchPost {
  id: string;
  title: string;
  subreddit: string;
  author: string;
  url: string;
  created_utc: number;
  selftext: string;
}

export interface RedditResponse {
  data: {
    children: { data: RedditSearchPost }[];
  };
}

// Type for the main Reddit listing response
export interface RedditListingResponse {
  kind: "Listing";
  data: RedditListingData;
}

// Type for the main data object in the listing response
export interface RedditListingData {
  after: string | null;
  dist: number;
  modhash: string;
  geo_filter: string | null;
  children: RedditPost[];
  before: string | null;
}

// Type for each post in the children array
export interface RedditPost {
  kind: string;
  data: RedditPostData;
}

// Type for the detailed data of each post
export interface RedditPostData {
  approved_at_utc: number | null;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: string | null;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: any[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: string | null;
  downs: number;
  thumbnail_height: number | null;
  top_awarded_type: string | null;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  upvote_ratio: number;
  author_flair_background_color: string | null;
  subreddit_type: string;
  ups: number;
  total_awards_received: number;
  media_embed: Record<string, unknown>;
  thumbnail_width: number | null;
  author_flair_template_id: string | null;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: any | null;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: string | null;
  secure_media_embed: Record<string, unknown>;
  link_flair_text: string | null;
  can_mod_post: boolean;
  score: number;
  approved_by: string | null;
  is_created_from_ads_ui: boolean;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean | number;
  author_flair_css_class: string | null;
  author_flair_richtext: any[];
  gildings: Record<string, number>;
  post_hint: string;
  content_categories: string | null;
  is_self: boolean;
  mod_note: string | null;
  created: number;
  link_flair_type: string;
  wls: number;
  removed_by_category: string | null;
  banned_by: string | null;
  author_flair_type: string;
  domain: string;
  allow_live_comments: boolean;
  selftext_html: string | null;
  likes: number | null;
  suggested_sort: string | null;
  banned_at_utc: number | null;
  url_overridden_by_dest: string;
  view_count: number | null;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview: Preview | null;
  all_awardings: any[];
  awarders: any[];
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: string | null;
  treatment_tags: string[];
  visited: boolean;
  removed_by: string | null;
  num_reports: number | null;
  distinguished: string | null;
  subreddit_id: string;
  author_is_blocked: boolean;
  mod_reason_by: string | null;
  removal_reason: string | null;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: string | null;
  author: string;
  discussion_type: string | null;
  num_comments: number;
  send_replies: boolean;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color: string | null;
  permalink: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: any | null;
  is_video: boolean;
}

// Type for the preview section (images and their details)
interface Preview {
  images: Image[];
  enabled: boolean;
}

// Type for each image in the preview
interface Image {
  source: ImageSource;
  resolutions: ImageResolution[];
  variants: Record<string, unknown>;
  id: string;
}

// Type for the source object of each image
interface ImageSource {
  url: string;
  width: number;
  height: number;
}

// Type for each resolution of the image
interface ImageResolution {
  url: string;
  width: number;
  height: number;
}
