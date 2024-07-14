const Country = require('../models/country');

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getCountryData = async (req, res) => {
  try {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/capital');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();

    if (!Array.isArray(data.data) || data.data.length < 3) {
      throw new Error('Insufficient data from API');
    }

    const filteredCountries = data.data
      .filter(country => country.name && country.capital && country.capital.trim() !== '');

    const shuffledData = shuffleArray(filteredCountries);

     const randomCountries = shuffledData.slice(0, 3).map(country => ({
      name: country.name,
      capital: country.capital
    }));

    res.json({
      error: false,
      message: 'Three countries and capitals retrieved successfully',
      data: randomCountries
    });
  } catch (error) {
    console.error('Fetch error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getCountryData
};
