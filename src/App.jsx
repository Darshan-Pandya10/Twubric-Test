import './App.css'
import FollowerList from './Components/FollowerList'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {

  return (
    <section className='app bg-black text-white w-screen min-h-screen flex flex-col items-center justify-center'>
     <Header/>
     <FollowerList/>
     <Footer/>
    </section>
  )
}

export default App
