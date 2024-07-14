const posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

// option1
// export const getPosts = () => posts;

// Option2
const getPosts = () => posts;
// export { getPosts };

export const postLength = posts.length;

// Option3
export default getPosts;
