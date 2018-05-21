'use strict';
{
  /* 
  const bookTitles = [
  'the_mirage',
    'the_beginning_and_the_end',
    'palace_walk',
    'palace_of_desire',
    'sugar_street',
    'the_pub_of_the_black_cat',
    'the_thief_and_the_dogs',
    'autumn-quail',
    'the-search',
    'the-beggar'
   ];

  function main() {
    const container = document.getElementById('page_content');
    const list = document.createElement('ul');
    container.appendChild(list);
    for (let i = 0; i < bookTitles.length; i++) {
      const bookName = document.createElement('li');
      bookName.innerHTML = bookTitles[i];
      list.appendChild(bookName);
    }
  }
  */

  const books = {
    the_nose: { title: 'The Nose', language: 'Arabic (translated from Russian)', author: 'Nikolai Gogol', year: '1836' },
    the_overcoat: { title: 'The Overcoat', language: 'Arabic (translated from Russian)', author: 'Nikolai Gogol', year: '1842' },
    the_collected_works: { title: 'The Collected Works', language: 'Arabic (translated from Russian)', author: 'Anton Chekhov' },
    palace_of_desire: { title: 'Palace of Desire', language: 'Arabic', author: 'Naguib Mahfouz', year: '1957' },
    sugar_street: { title: 'Sugar Street', language: 'Arabic', author: 'Naguib Mahfouz', year: '1957' },
    children_of_gebelawi: { title: 'Children of Gebelawi', language: 'Arabic', author: 'Naguib Mahfouz', year: '1959' },
    the_thief_and_the_dogs: { title: 'The Thief and the Dogs', language: 'Arabic', author: 'Naguib Mahfouz', year: '1961' },
    autumn_quail: { title: 'Autumn Quail', language: 'Arabic', author: 'Naguib Mahfouz', year: '1962' },
    a_tale_of_two_cities: { title: 'A tale of Two Cities', language: 'English', author: 'Charles Dickens', year: '1859' },
    the_happy_prince: { title: 'The Happy Prince', language: 'English', author: 'Oscar Wilde', year: '1888' }
  };

  const covers = {
    the_nose: './img/the_nose.jpg',
    the_overcoat: './img/the_overcoat.jpg',
    the_collected_works: './img/the_collected_works.jpg',
    palace_of_desire: './img/palace_of_desire.jpg',
    sugar_street: './img/sugar_street.jpg',
    children_of_gebelawi: './img/children_of_gebelawi.jpg',
    the_thief_and_the_dogs: './img/the_thief_and_the_dogs.jpg',
    autumn_quail: './img/autumn_quail.jpg',
    a_tale_of_two_cities: './img/a_tale_of_two_cities.jpg',
    the_happy_prince: './img/the_happy_prince.jpg'
  };

  function main(objectOfBooks, bookCovers) {
    const container = document.getElementById('page_content');
    const topHeader = document.createElement('h1');
    topHeader.innerHTML = 'Books I have Read';
    topHeader.setAttribute('class', 'top-header');
    container.appendChild(topHeader);

    for (const key in objectOfBooks) {
      const bookSectionHeader = document.createElement('h2');
      bookSectionHeader.setAttribute('class', 'book-section-header');
      bookSectionHeader.innerHTML = key.replace(/_/g, ' ');
      container.appendChild(bookSectionHeader);
      const bookInformationList = document.createElement('ul');
      bookInformationList.setAttribute('id', key);
      container.appendChild(bookInformationList);
      const arr = objectOfBooks[key];

      for (const key in arr) {
        const bookInformation = document.createElement('li');
        bookInformation.setAttribute('class', 'book-information');
        bookInformation.innerHTML = key + ' : ' + arr[key];
        bookInformationList.appendChild(bookInformation);
      }
    }

    for (const key in bookCovers) {
      const bookCover = document.createElement('img');
      bookCover.setAttribute('class', 'book-cover');
      bookCover.setAttribute('src', bookCovers[key]);
      bookCover.setAttribute('alt', 'cover photo for a book named ' + key.replace(/_/g, ' '));
      const listedCoverImage = document.createElement('li');
      listedCoverImage.setAttribute('class', 'book-information');
      listedCoverImage.appendChild(bookCover);
      document.getElementById(key).appendChild(listedCoverImage);
    }
  }

  window.addEventListener('load', main(books, covers));
}
