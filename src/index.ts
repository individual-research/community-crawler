import Dcinside from './request/dcinside';

(async () => {
  const dcinside = new Dcinside();

  console.log('===== CRAWLING =====');

  // best 6000, random 10000
  await dcinside.crawlRandom('baseball_new10', 2, 17500, 30000, 10);
  await dcinside.crawlAllBest('baseball_new10', 1, 30);

  console.log('=====   END   ======');
})();
