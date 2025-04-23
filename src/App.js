import {Routes, Route} from 'react-router-dom';
import {routes} from './routes';
import {useEffect} from 'react';

function App() {

  return (
    <Routes>
       {
        routes.map((route, index) =>{
          const Page = route.component;
          const Layout = route.layout 
          return (
            <Route
              key={index}
              path={route.path}
              element={<Layout><Page/></Layout>}
            />
          )
        })
       }
    </Routes>
  );
}

export default App;
