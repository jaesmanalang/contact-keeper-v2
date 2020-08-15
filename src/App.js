import React, { Fragment, useEffect, useContext } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Header } from './components';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { auth, createUserProfile } from './firebase';
import { UserContext } from './context/user/context';

function App() {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        const userRef = await createUserProfile(authUser);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Fragment>
      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <Header />
      )}
      <Switch>
        {console.log(currentUser, ' from render')}
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
