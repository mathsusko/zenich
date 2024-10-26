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

  return (
    <section>
      <article className={styles.bannerHero}></article>
      <article className={styles.content}>
        <div className={styles.panel}>
          <p>Oficial Website</p>
          <p>©</p>
          <p>2024</p>
          <p>Full-On</p>
          <p>|</p>
          <p>Psy Trance</p>
        </div>

        {/* Adiciona a classe 'visible' condicionalmente */}
        <div
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
        </div>

        <div className={styles.bio}>
          <div className={styles.logoOne}>
            <img src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1729951386/logo_hx5nu4.png" />
          </div>

          <div className={styles.bioDescription}>
            <h2>Biografia</h2>
            <p>
              Zenich é o projeto por detrás da mente idealizadora de Leoni Stevanato,
              brasileiro, que decidiu escolher o Psy Trance como propósito primordial em
              sua vida.
            </p>
            <p>
              Após algum tempo a partir do momento em que conheceu a música eletrônica,
              nasceu o projeto Zenich, que traz uma ideia e visão de evolução como seres,
              em busca de novas possibilidades e potencialidades. Zenich atualmente é um
              dos integrantes do Music Lab, escola de produção musical e discotecagem com
              referência ao PsyTrance, onde desde 2023 está em constante evolução através
              de seus estudos e pesquisas. Seguindo em busca continua por conhecimento,
              objetivando trazer uma identidade sonora única para seu projeto.
            </p>
            <p>
              Em seu DJ SET, a partir de batidas que mais se assemelham ao Full On, que
              variam entre 144 à 148 bpm’s, busca trazer momentos de energia, mas também
              de introspecção, trazendo uma ambiência perfeita para conduzir sua
              experiência psicodélica.
            </p>
            <p>
              Tendo como a música e a dança sendo uma forma de meditação ativa e
              celebração da vida, como também ferramenta para expansão da consciência e
              busca pela paz interior, Zenich te deixa o convite para essa imersão nesta
              jornada psicodélica.
            </p>
          </div>
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <div className={styles.colOne}>
              <h2>Vamos Conversar?</h2>
              <p>
                Se você está pronto para levar seu próximo evento a um novo patamar ou
                deseja discutir uma parceria que vai marcar a cena do Psy Trance, entre em
                contato comigo! Estou ansioso para ouvir suas ideias e colaborar para
                criar algo realmente especial.
              </p>
            </div>

            <div className={styles.colTwo}>
              <div className={styles.contacts}>
                <h2>Contatos</h2>
                <div className={styles.contact}>
                  <div className={styles.wpp}>
                    <WhatsappLogo size={24} />
                    <p>WhatsApp</p>
                  </div>
                  <p>a setar</p>
                </div>

                <div className={styles.contact}>
                  <div className={styles.wpp}>
                    <EnvelopeOpen size={24} />
                    <p>E-mail</p>
                  </div>
                  <p>setar</p>
                </div>
              </div>

              <div className={styles.icons}>
                <p>Redes sociais/Plataformas Musicais</p>
                <div className={styles.icon}>
                  <a
                    href="https://www.instagram.com/zenich_music/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    <InstagramLogo size={32} />
                  </a>
                  <a
                    href="https://soundcloud.com/zenich_music"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    <SoundcloudLogo size={32} />
                  </a>
                  <a
                    href="https://youtube.com/@zenich_music"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    <YoutubeLogo size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
