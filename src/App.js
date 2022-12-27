// import logo from './logo.svg';
// import './App.css';
import MenuKontak from './pages/MenuKontak';
import MenuProduct from './pages/MenuProduct';
import MenuTentangKami from './pages/MenuTentangKami';
import MenuUtama from './pages/MenuUtama';


const Header = () =>{
  return(
    <div>
      <h1>Ini Header</h1>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <h1>Ini Footer</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
        <MenuUtama />
        <MenuProduct />
        <MenuKontak />
        <MenuTentangKami />
      <Footer />
    </div>
  );
}

export default App;
