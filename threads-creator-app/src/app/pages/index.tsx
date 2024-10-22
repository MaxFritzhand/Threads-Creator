import RickRollVideo from '../components/RickRollVideo';
import Highlights from '../components/Highlights';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>Welcome to Threads Creator</h1>
      <p style={{ textAlign: 'center' }}>Weekly highlights of your favorite Threads Creators... or maybe not.</p>

      <RickRollVideo />
      <Highlights />
      <Footer />
    </div>
  );
};

export default Home;
