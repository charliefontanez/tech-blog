const { Post } = require('../models');

const postData = [
  {
    title: 'title1',
    contents: ' ',
    user_id: 1
  },
  {
    title: 'title2',
    contents: ' ',
    user_id: 2
  },
  {
    title: 'title3',
    contents: ' ',
    user_id: 3
  },
  {
    title: 'title4',
    contents: ' ',
    user_id: 4
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;