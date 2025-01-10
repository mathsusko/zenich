import {
  Envelope,
  WhatsappLogo,
  InstagramLogo,
  SpotifyLogo,
  SoundcloudLogo,
  YoutubeLogo
} from '@phosphor-icons/react'
import styles from './Contato.module.css'

export default function Contato() {
  return (
    <div className={styles.bg}>
      <div className={styles.content}>
        <div className={styles.contact}>
          <div className={styles.rows}>
            <div className={styles.rowOne}>
              <img
                src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1736523961/Zenich/cta/fftxmgkkphehmjb3wd7o.png"
                alt=""
              />
            </div>
            <div className={styles.rowTwo}>
              <div className={styles.colOne}>
                <div className={styles.desc}>
                  <p>
                    Se você está pronto para levar seu próximo evento a um novo patamar ou
                    deseja discutir uma parceria que vai marcar a cena do Psy Trance,
                    entre em contato comigo! Estou ansioso para ouvir suas ideias e
                    colaborar para criar algo realmente especial.
                  </p>
                </div>
                <div className={styles.img}>
                  <img
                    src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1730304248/curado_qicz70.png"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.colTwo}>
                <img
                  src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1736523961/Zenich/cta/o6scnyw5cdguzblpj3pk.png"
                  alt=""
                />
                <div className={styles.sociaiss}>
                  <p>Redes sociais/Plataformas músicais</p>
                  <div className={styles.icones}>
                    <a
                      href="https://www.instagram.com/zenich_music/"
                      target="_blank"
                    >
                      <InstagramLogo size={32} />
                    </a>
                    <a
                      href="https://youtube.com/@zenich_music"
                      target="_blank"
                    >
                      <YoutubeLogo size={32} />
                    </a>
                    <a
                      href="https://soundcloud.com/zenich_music"
                      target="_blank"
                    >
                      <SoundcloudLogo size={32} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
