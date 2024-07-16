function getRandomJoke(category) {
    const validCategories = [
      "animal", "career", "celebrity", "dev", "explicit", "fashion", 
      "food", "history", "money", "movie", "music", "political", 
      "religion", "science", "sport", "travel"
    ];
  
    return new Promise((resolve, reject) => {
      if (!validCategories.includes(category)) {
        reject(`Sorry, ${category} is an invalid category.`);
      } else {
        const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
  
        fetch(url)
          .then(response => response.json())
          .then(data => resolve(data.value))
          .catch(error => reject(`Failed to fetch a joke: ${error.message}`));
      }
    });
  }
  
  getRandomJoke("dev")
    .then(joke => console.log(joke))
    .catch(error => console.error(error));
  