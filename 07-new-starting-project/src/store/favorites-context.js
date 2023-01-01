import { createContext, useState } from 'react';

// createContext builds a component
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0
});

// provides context to all interested components
// and updates values
function FavoritesContextProvider(props) {

  const [userFavorites, setUserFavorites] = useState([]);

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length
  };

  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
}

