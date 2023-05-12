const nextConfig = {
  basePath: "/{next_blog}",
}
module.exports = {
  // ...
  images: {
    loader: 'imgix',
    path: '',
    unoptimized: true,
  },
};

