import './Header.css'
import logo from './img/snap.svg';

export default function Header() {
  return (
      <section className="section">
            <div className='logo'>
                <img src={logo} alt="Logo" />
            </div>
            <ul className='ul'>
                <li className='li'>Features</li>
                <li className='li'>Company</li>
                <li className='li'>Careers</li>
                <li className='li'>About</li>
            </ul>
            <div className="sign">
                <li className='li'>Login</li>
                <li className='btn-li'>Company</li>
            </div>
      </section>

  );
};