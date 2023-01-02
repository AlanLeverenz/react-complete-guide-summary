import { createContext, useState } from 'react';

// createContext builds a component
// adding funnctions with prop helps auto completion in the form 
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => { },
  removeFavorite: (meetupId) => { },
  itemIsFavorite: (meetupId) => { }
});

// provides context to all interested components
// and updates values when state changes
function FavoritesContextProvider(props) {

  const [userFavorites, setUserFavorites] = useState([]);

  // guarantees latest state update, schedules functions in correct order
  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup)
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    })
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
}

