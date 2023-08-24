/* eslint-disable import/no-extraneous-dependencies */

const fs = require('fs');
const path = require('path');

const fm = require('front-matter');
const _ = require('lodash');

const baseDir = 'docs';

const pagesList = ['readme.md', 'categories.md', 'contacts.md', 'templeate.md'];

const getPostsFiles = (dir) => fs.readdirSync(dir)
  .filter((name) => name.endsWith('.md'))
  .filter((name) => !pagesList.includes(name));

const getPosts = (postFiles) => postFiles.map((name) => {
  const fileName = path.join(baseDir, name);
  const text = fs.readFileSync(fileName, 'utf-8');
  const fmContent = fm(text);

  const link = `[${fmContent.attributes.title}](${name})`;
  const [year, month, day] = fmContent.attributes.date.split('-');
  const categories = fmContent.attributes.categories ?? ['Другое'];

  const res = {
    year, month, day, categories, link,
  };

  return res;
});

const postFiles = getPostsFiles(baseDir);
const postList = getPosts(postFiles);

const genReadme = (posts) => {
  const postsByDate = _.groupBy(posts, (p) => `${p.year}.${p.month}`);

  const dates = Object.keys(postsByDate).sort().reverse();
  const postsList = dates.flatMap((d) => {
    const list = _.sortBy(postsByDate[d], ['year', 'month', 'day']).reverse();

    const res = list.map((p) => `* ${p.link}`);
    res.unshift(`## ${d}`);
    res.push('');
    return res;
  });

  const textPage = postsList.join('\n');
  fs.writeFileSync(path.join(baseDir, 'readme.md'), textPage);
};

const genCategories = (posts) => {
  const postsByCategory = posts.reduce((acc, p) => {
    p.categories.forEach((c) => {
      const list = _.get(acc, c, []);
      list.push(p);
      acc[c] = list;
    });
    return acc;
  }, {});

  // console.log(postsByCategory);

  const dates = Object.keys(postsByCategory).sort();
  const postsList = dates.flatMap((d) => {
    const list = _.sortBy(postsByCategory[d], ['year', 'month', 'day']).reverse();

    const res = list.map((p) => `* ${p.link}`);
    res.unshift(`## ${d}`);
    res.push('');
    return res;
  });

  const temp = [];

  temp.push('# Категории');
  temp.push('');
  temp.push('[[toc]]');
  temp.push('');

  const textPage = [...temp, ...postsList].join('\n');
  fs.writeFileSync(path.join(baseDir, 'categories.md'), textPage);
};

genReadme(postList);
genCategories(postList);
