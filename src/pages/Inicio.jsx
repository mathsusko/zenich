import { useState, useEffect, useRef } from 'react'
import styles from './Inicio.module.css'
import { useNavigate } from 'react-router-dom'
import {
  SpeakerHigh,
  Play,
  EnvelopeOpen,
  WhatsappLogo,
  SpotifyLogo,
  SoundcloudLogo,
  InstagramLogo,
  YoutubeLogo
} from '@phosphor-icons/react'

export default function Inicio() {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false) // Estado para controlar a visibilidade
  const musicRef = useRef(null) // Referência à div .music

  function handleDiscografia() {
    navigate('/discografia')
  }

  useEffect(() => {
    const handleScroll = () => {
      if (musicRef.current) {
        const rect = musicRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Verifica se a metade da div .music está visível na janela de visualização
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const contatoRef = useRef(null)

  const handleScrollToContato = (event) => {
    event.preventDefault()
    contatoRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section>
      <article className={styles.bannerHero}>
        <div className={styles.hero}>
          <div className={styles.img}>
            <img
              src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1730299359/logoHero_yxtm2l.png"
              alt=""
            />
          </div>
        </div>
      </article>
      <article className={styles.teste}>
        <div className={styles.extra}>
          <img
            src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1730258463/Triade_mb0foi.png"
            alt=""
          />
          <div className={styles.cardzin}>
            <div className={styles.head}>
              <p>Me siga</p>

              <div className={styles.sociais}>
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
            <div className={styles.button}>
              <a
                href="#contato"
                onClick={handleScrollToContato}
              >
                ENTRAR EM CONTATO
              </a>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1730258466/code_hfhhq3.png"
            alt=""
          />
        </div>
      </article>
      <article className={styles.content}>
        <div className={styles.bgFixed}>
          <div className={styles.circleBlue}></div>
          <div className={styles.circlePurple}></div>
        </div>
        <div className={styles.panel}>
          <p>Oficial Website</p>
          <p>©</p>
          <p>2024</p>
          <p>Full-On</p>
          <p>|</p>
          <p>Psy Trance</p>
        </div>

        {/* Adiciona a classe 'visible' condicionalmente */}
        {/* <div
          className={`${styles.music} ${isVisible ? styles.visible : ''}`}
          ref={musicRef}
        >
          <div className={styles.card}>
            <div className={styles.firstColumn}>
              <div className={styles.descriptions}>
                <div className={styles.head}>
                  <h2>Stand-by</h2>
                  <p>Em desenvolvimento</p>
                </div>
                <div className={styles.mid}>
                  <p>Siga-me nas plataformas e me acompanhe nessa jornada!</p>
                  <div className={styles.images}>
                    <a href="https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ">
                      <img src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png" />
                    </a>
                    <a href="https://on.soundcloud.com/XZWn1X1fQRYXTGpo6">
                      <img src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png" />
                    </a>
                    <a href="https://youtube.com/@zenich_music?si=w8BtRiz7mf_sLRje">
                      <img
                        src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1729952242/youtube-logo-youtube-icon-transparent-free-png_rxxzik.webp"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>

              <button onClick={handleDiscografia}>Ver discografia</button>
            </div>

            <div className={styles.secondColumn}>
              <div className={styles.boxMusic}></div>

              <audio
                src="https://res.cloudinary.com/dio2dnpmn/video/upload/v1727877253/MP3_-_Dollmaker_Vetala_-_Ethereal_Buzz_amostra_moobi1.mp"
                controls
              ></audio>
            </div>
          </div>
        </div> */}

        <div className={styles.youtube}>
          <div className={styles.pill}>
            <p>ASSISTA MINHA LIVE</p>
          </div>
          <div className={styles.video}>
            <iframe
              src="https://www.youtube.com/embed/wCWW45-BFL8?start=2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className={styles.bio}>
          <div className={styles.firstRow}>
            <div className={styles.img}>
              <img
                src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1730302102/ohome_d8azpo.png"
                alt=""
              />
            </div>

            <div className={styles.text}>
              <div className={styles.title}>
                <img
                  src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1730302454/text_tkx6v7.png"
                  alt=""
                />
                <div className={styles.subtitle}>
                  <p>LEONI STEVANATO</p>
                  <p>TRIADE TRANCE</p>
                  <p>BRASILEIRO</p>
                </div>
              </div>

              <div className={styles.description}>
                <p>
                  Zenich é o projeto idealizado por Leoni Stevanato, um brasileiro que
                  encontrou no Psy Trance seu propósito de vida, transformando essa paixão
                  em uma busca constante por evolução e autodescoberta. A partir de sua
                  imersão na música eletrônica, Zenich ganhou forma com o compromisso de
                  explorar novas possibilidades e potencialidades como ser humano.
                  Integrante do Music Lab desde 2023, uma escola de referência em produção
                  musical e discotecagem no universo Psy Trance, ele se dedica a estudos e
                  pesquisas para criar uma identidade sonora única. Seus sets, com batidas
                  de Full On entre 144 e 148 bpm, oferecem uma mistura de energia e
                  introspecção, conduzindo o público a uma experiência psicodélica de
                  conexão e paz interior. Para Zenich, música e dança são formas de
                  meditação ativa e celebração, ferramentas que expandem a consciência e
                  fortalecem a busca pelo equilíbrio interior.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.secondRow}>
            <img
              src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1730302769/bar_y4wqlx.png"
              alt=""
            />
          </div>
        </div>

        <div
          ref={contatoRef}
          className={styles.contact}
        >
          <div className={styles.rows}>
            <div className={styles.rowOne}>
              <img
                src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1730303650/contact_kuazxz.png"
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
                  src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1730304490/cardDesk_yru5ym.png"
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
      </article>
    </section>
  )
}
