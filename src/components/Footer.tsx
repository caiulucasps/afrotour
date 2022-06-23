import styles from './Footer.module.scss';

import InstagramSvg from '../assets/instagram-icon.svg';
import FacebookSvg from '../assets/facebook-icon.svg';
import YoutubeSvg from '../assets/youtube-icon.svg';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Todos os direitos reservados © 2022 - AfroTour</p>
        <nav>
          <a href="https://afroacademy.com.br/" target="_blank">
            <img src={InstagramSvg} alt="Link para o Instagram da AfroTour" />
          </a>
          <a href="https://afroacademy.com.br/" target="_blank">
            <img src={FacebookSvg} alt="Link para o Facebook da AfroTour" />
          </a>
          <a href="https://afroacademy.com.br/" target="_blank">
            <img src={YoutubeSvg} alt="Link para o Youtube da AfroTour" />
          </a>
        </nav>
      </div>
    </footer>
  )
}