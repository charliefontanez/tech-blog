const { Post } = require('../models');

const postData = [
  {
    title: 'title1',
    content: 'content for post 1',
    user_id: 1
  },
  {
    title: 'title2',
    content: 'content for post 2',
    user_id: 2
  },
  {
    title: 'title3',
    content: 'content for post 3',
    user_id: 3
  },
  {
    title: 'title4',
    content: 'content for post 4',
    user_id: 4
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;