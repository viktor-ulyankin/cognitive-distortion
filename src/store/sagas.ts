import { takeEvery, put, call, all, StrictEffect } from 'redux-saga/effects';
import axios from 'axios';
import { AnyAction } from 'redux';
import {
  LOAD_DATA_ARTICLE_LIST,
  LOAD_DATA_ARTICLE,
  actionPutDataArticleList,
  actionPutDataArticle,
} from './actions';
import { ArticleList, Article, ArticlesById } from '../types';

function promiseDataArticleList(): Promise<ArticleList> {
  return axios.get(`/data/articles.json?timestamp=${new Date().getTime()}`)
    .then((response) => response.data);
}

function promiseDataArticle(id: number): Promise<Article> {
  const urlArticlesList = `/data/articles.json?timestamp=${new Date().getTime()}`;
  const urlArticleMd = `/data/articles/${id}.md?timestamp=${new Date().getTime()}`;

  return new Promise((resolve) => {
    Promise.all([
      axios.get(urlArticlesList),
      axios.get(urlArticleMd),
    ])
      .then((responses) => {
        const dataTargetArticle = {
          id: 0,
          name: '',
          text: '',
        };

        responses.forEach((response) => {
          if (response.config.url === urlArticlesList) {
            const targetArticle = response.data.find((item: Article) => item.id === id);

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

function* workerLoadDataArticleList(): Generator<StrictEffect, any, ArticleList> {
  const data = yield call(promiseDataArticleList);

  yield put(actionPutDataArticleList(data));
}

function* workerLoadDataArticle(action: AnyAction): Generator<StrictEffect, any, ArticlesById> {
  const data = yield call(promiseDataArticle, action.payload);

  yield put(actionPutDataArticle(data));
}

function* watchLoadDataArticleList(): Generator {
  yield takeEvery(LOAD_DATA_ARTICLE_LIST, workerLoadDataArticleList);
}

function* watchLoadDataArticle(): Generator {
  yield takeEvery(LOAD_DATA_ARTICLE, workerLoadDataArticle);
}

function* rootSaga(): Generator {
  yield all([
    watchLoadDataArticleList(),
    watchLoadDataArticle(),
  ]);
}

export default rootSaga;