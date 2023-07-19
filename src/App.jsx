import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Headers/Header'
import Main from './Components/Main/Main'
import Settings from './Components/Headers/Settings'
import Help from './Components/Headers/Help'
import Footer from './Components/Footer/Footer'
import Login_LandingPage from './Components/Login_LandingPage'
import UserAccount from './Components/UtilsComponents/UserAccount'
import Home from './Components/Home'
import SingleArticle from './Components/Main/Articles/SingleArticle'

function App() {

  return <>
    <Header />
    <Routes>
      <Route path='/' element={ <Login_LandingPage />} />
      <Route path='/:username/account' element={ <UserAccount /> } />
      <Route path="/home" element={ <Home/> } />
      <Route path="/articles" element={ <Main /> } />
      <Route path="/help" element={ <Help /> } />
      <Route path="/settings" element={ <Settings />} />
      <Route path="/articles/:article_id" element={ <SingleArticle /> } />
      <Route path="/articles/:article_id/comments" element={ <SingleArticle /> } />
    </Routes>
    <Footer />
  </>
}

export default App