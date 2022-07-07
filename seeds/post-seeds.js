const { Post } = require('../models');

const postData = [
  {
    title: ' ',
    contents: ' ',
    user_id: 1
  },
  {
    title: ' ',
    contents: ' ',
    user_id: 2
  },
  {
    title: ' ',
    contents: ' ',
    user_id: 3
  },
  {
    title: ' ',
    contents: ' ',
    user_id: 4
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;