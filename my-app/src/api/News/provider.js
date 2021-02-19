

import { REQUEST_URL } from '../constants/news';
import { converter } from './converter';

export const getNews = () => (
  fetch('01cfd4ad10a7443f9e6dc750705de9c1')
    .then((response) => (response.json()))
    .then((data) => converter(data))
);