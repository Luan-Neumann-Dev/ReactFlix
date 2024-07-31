import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global/GlobalStyles';
import { theme } from './styles/theme/theme'
import routeConstants from './constant/routeConstants'

//Componentes
import { BaseLayout } from './components'

//Telas
import { Home, PageNotFound, Search, ShowDetail, Shows } from './screens'

//Separando as configurações de rotas
const routes = [
  {
    path: routeConstants.HOME, // "/"
    element: <BaseLayout />, // Layout principal
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: routeConstants.SHOWS, // "/shows"
        element: <Shows />
      },
      {
        path: `${routeConstants.SHOWS}/:id`, // "/shows/:id"
        element: <ShowDetail />
      },
      {
        path: routeConstants.SEARCH, // "/search"
        element: <Search />
      }
    ]
  },
  {
    path: '*',
    element: <PageNotFound/>
  }
]


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />

          <Routes>
            {
              routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element}>
                  {route.children && 
                    route.children.map((childRoute, childIndex) => (
                      <Route
                       key={childIndex}
                       path={childRoute.path}
                       element={childRoute.element}
                      />
                    ))
                  }
                </Route>
              ))
            }
          </Routes>

        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
