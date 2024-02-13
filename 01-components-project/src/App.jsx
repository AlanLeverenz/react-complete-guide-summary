import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;

// <CoreConcept
// title={CORE_CONCEPTS[0].title}
// description={CORE_CONCEPTS[0].description}
// image={CORE_CONCEPTS[0].image}
// />
// <CoreConcept {...CORE_CONCEPTS[1]} />
// <CoreConcept {...CORE_CONCEPTS[2]} />
// <CoreConcept {...CORE_CONCEPTS[3]} />