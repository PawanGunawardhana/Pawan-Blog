import Navbar from "./NavBar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">  {/* catch all route.this should be at the bottom o/w that will get all the input routes as notfound */}
             <NotFound />     {/*   routes paths matching is done by top to bottom */}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
