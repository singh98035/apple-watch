import './App.css';
// import SideBar from './components/sideBar';
import MainPage from './components/mainPage';
import MobileMenu from './components/mobilemenu';
import SideBar from './components/sideBar';

function App() {
    return ( <
        div className = 'App' >
        <
        MobileMenu / >
        <
        SideBar / >
        <
        MainPage / >


        <
        /div>


    );
}

export default App;