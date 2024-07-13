const Country = require('../models/country');

// fetch 3 random countries with their capitals
const getCountryWithCapital = async (req, res) => {
  try {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/capital');
    if (!response.ok) {
      throw new Error('Failed to fetch country');
    }
    const data = await response.json();

    // Gets country name and capital from API 
    const countriesData = data.data.map(country => ({
      name: country.name,
      capital: country.capital
    }));

    // Shuffle the countriesData array to get random countries
    const shuffledData = shuffleArray(countriesData);

    // Select the first 3 entries from shuffled array
    const randomCountries = shuffledData.slice(0, 3).map(country => new Country(country.name, country.capital));

    res.json(randomCountries);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//function to shuffle array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

module.exports = {
  getCountryWithCapital,
};
