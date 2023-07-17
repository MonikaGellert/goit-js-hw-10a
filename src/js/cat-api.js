'use strict';

import Notiflix from 'notiflix';
import { loaderTextRef, errorRef } from '../index.js';

const urlAllBreeds = `https://api.thecatapi.com/v1/breeds`;
const urlSearchBreed = 'https://api.thecatapi.com/v1/images/search';

const api_key =
  'live_jWNukllSziHsgvhYm1XBWDhhnJ1f8oaOEEvSDUOkNedfFqrIxiTyDUHs3nCuK14W';

const fetchBreeds = breedsCats =>
  fetch(urlAllBreeds, {
    headers: {
      'x-api-key': api_key,
    },
  }).then(response => {
    if (!response.ok) {
      Notiflix.Report.failure(
        'Oops!',
        'Something went wrong! Try reloading the page!',
        'Okay'
      );
      loaderTextRef.classList.add('visually-hidden');
      errorRef.classList.remove('visually-hidden');
      throw new Error(response.status);
    }
    return response.json();
  });

const fetchCatByBreed = breedId =>
  fetch(urlSearchBreed + `?breed_ids=${breedId}`, {
    headers: {
      'x-api-key': api_key,
    },
  }).then(response => {
    if (!response.ok) {
      Notiflix.Report.failure(
        'Oops!',
        'Something went wrong! Try reloading the page!',
        'Okay'
      );
      loaderTextRef.classList.add('visually-hidden');
      errorRef.classList.remove('visually-hidden');
      throw new Error(response.status);
    }
    return response.json();
  });

export { fetchBreeds, fetchCatByBreed };
