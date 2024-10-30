import { useNavigate } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const navigate = useNavigate()
  const handleInicio = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' }) // Rola suavemente para o topo da página
  }
  const handleGigs = () => navigate('/gigs')
  const handleDisco = () => navigate('/discografia')
  const handleContato = () => navigate('/contato')

  // Para URLs externas, use window.location.href
  const handleInsta = () =>
    (window.location.href = 'https://www.instagram.com/zenich_music/')
  const handleSpotify = () =>
    (window.location.href =
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=dofDHcXkQMayEpcQF8D')
  const handleSoundcloud = () =>
    (window.location.href = 'https://soundcloud.com/zenich_music')

  return (
    <div className={styles.content}>
      <div className={styles.footer}>
        <div className={styles.pages}>
          <div className={styles.brothers}>
            
            <div className={styles.page}>
              <h2>Páginas</h2>
              <p onClick={handleInicio}>Início</p>
              <p onClick={handleGigs}>Gigs</p>
              <p onClick={handleDisco}>Discografia</p>
              <p onClick={handleContato}>Contrate</p>
            </div>

            <div className={styles.page}>
              <h2>Redes</h2>
              <p onClick={handleInsta}>Instagram</p>
              <p onClick={handleSpotify}>Spotify</p>
              <p onClick={handleSoundcloud}>SoundCloud</p>{' '}
              {/* Corrigido de "SoundClound" para "SoundCloud" */}
            </div>
          </div>

          <div className={styles.other}>
            <div className={styles.cta}>
              <h2>Digital Organism</h2>
              <p>
                Esse Web site, nasceu com a proposta de proporcionar uma melhor
                comunicação entre os envolvidos.
              </p>
              <button className={styles.button}>
                <a href="#">
                  CONTRATAR SERVIÇOS{' '}
                  <img
                    src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1730258442/ARROW_f0fpaf.png"
                    alt=""
                  />
                </a>
              </button>
            </div>

            <div className={styles.marca}>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1730258437/digitalOrganism_eyjken.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copy}>
          <p>
            © Copyright 2024, Todos direitos reservados por{' '}
            <a href="https://www.instagram.com/dgorganism/">Digital Organism</a>
          </p>
        </div>
      </div>
    </div>
  )
}
