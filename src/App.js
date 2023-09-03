import About from './components/About';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <NewsLetter />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
