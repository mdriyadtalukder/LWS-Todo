import { Provider } from 'react-redux'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import ToDoList from './components/toDoList/ToDoList'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <div
        class="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
      >

        <Navbar></Navbar>

        <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header></Header>
          <hr class="mt-4" />

          <ToDoList></ToDoList>

          <hr class="mt-4" />
          <Footer></Footer>

        </div>
      </div>
    </Provider>


  )
}

export default App
