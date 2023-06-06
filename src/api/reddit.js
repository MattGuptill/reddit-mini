const url = 'https://www.reddit.com';

export const fetchSubredditPosts = async (subreddit) => {
    const response = await fetch(`${url}/r/${subreddit}.json`);
    const json = await response.json();
    return json.data.children.map(post => post.data);
}
