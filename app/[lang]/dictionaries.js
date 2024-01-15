require('server-only');

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  fr: () => import('./dictionaries/de.json').then((module) => module.default),
};

const getDictionary = async (locale) => dictionaries[locale]();

module.exports = {
  getDictionary,
};
