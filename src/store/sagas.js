import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_DATA_ARTICLE_LIST, LOAD_DATA_ARTICLE, actionPutDataArticleList, actionPutDataArticle } from './actions';

function promiseDataArticleList() {
  return axios.get(`/data/articles.json?timestamp=${new Date().getTime()}`)
    .then((response) => response.data);
}

function promiseDataArticle(id) {
  const urlArticlesList = `/data/articles.json?timestamp=${new Date().getTime()}`;
  const urlArticleMd = `/data/articles/${id}.md?timestamp=${new Date().getTime()}`;

  return new Promise((resolve) => {
    Promise.all([
      axios.get(urlArticlesList),
      axios.get(urlArticleMd),
    ])
      .then((responses) => {
        const dataTargetArticle = {};

        responses.forEach((response) => {
          if (response.config.url === urlArticlesList) {
            const targetArticle = response.data.find((item) => item.id === parseInt(id));

            dataTargetArticle.id = targetArticle.id;
            dataTargetArticle.name = targetArticle.name;
          }

          dataTargetArticle.text = response.data;
        });

        // setTimeout(() => {
        resolve(dataTargetArticle);
        // }, 500); // эмуляция задержки сетевого соединения
      });
  });
}

function* workerLoadDataArticleList() {
  const data = yield call(promiseDataArticleList);

  yield put(actionPutDataArticleList(data));
}

function* workerLoadDataArticle(action) {
  const data = yield call(promiseDataArticle, action.payload);

  yield put(actionPutDataArticle(data));
}

function* watchLoadDataArticleList() {
  yield takeEvery(LOAD_DATA_ARTICLE_LIST, workerLoadDataArticleList);
}

function* watchLoadDataArticle() {
  yield takeEvery(LOAD_DATA_ARTICLE, workerLoadDataArticle);
}

function* rootSaga() {
  yield all([
    watchLoadDataArticleList(),
    watchLoadDataArticle(),
  ]);
}

export default rootSaga;