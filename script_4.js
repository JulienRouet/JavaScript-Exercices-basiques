const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

// Pour les Entrepreneurs née dans les années '70

let born70 = entrepreneurs.filter(
    (item) => item.year > 1970 && item.year < 1980
);
console.log(born70)

// Array avec le prénom et le nom des entrepreneurs

let FullName = entrepreneurs.map((item) => {
    let array = {};
    array = [item.first, item.last].join(" ");
    return array;
});
console.log(FullName);

// Les âges de tous les inventeurs à ce jour

let yearAge = entrepreneurs.map((item) => {
    entrepreneursYear = `${item.first} ${item.last} à ${
        2021 - item.year
  } ans !`;
    return entrepreneursYear;
});

console.log(yearAge);

// Trie des Entrepreneurs par ordre alphabétique du nom de famille

let sortFamilyNames = entrepreneurs.sort((a, b) => {
    if (a.last < b.last) {
        return -1;
    }
    if (a.last > b.last) {
        return 1;
    }
    return 0;
});

console.log(sortFamilyNames);

