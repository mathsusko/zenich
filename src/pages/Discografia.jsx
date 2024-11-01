import { motion } from 'framer-motion'
import styles from './Discografia.module.css'

// Define o conteúdo das músicas com URL de áudio
const musicData = [
  {
    title: 'Music Lab Sessions Halloween',
    production: 'Zenich',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1730468360/capaSet_qfuqob.jpg',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1730468609/audioTriadeLab_ae4aft.wav',
    youtubeUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1730469346/youtube-logo-youtube-icon-transparent-free-png_1_nghnar.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
    youtube: 'https://youtube.com/@zenich_music',
    sound: 'https://soundcloud.com/zenich_music'
  },
  {
    title: 'Set Pocket 2024',
    production: 'Zenich',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1730469878/IMG_0465_1_is8eju.png',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1730469971/Previa_Set_2_xukxrr.wav',
    youtubeUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1730469346/youtube-logo-youtube-icon-transparent-free-png_1_nghnar.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
    youtube: 'https://youtube.com/@zenich_music',
    sound: 'https://soundcloud.com/zenich_music'
  }

  // Adicione mais músicas conforme necessário
]

export default function Discografia() {
  // Define a animação para os cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className={styles.content}>
      <div className={styles.hero}>
        <div className={styles.discografia}>
          <div className={styles.spotify}>
            <h2>DISCOGRAFIA</h2>

            <div className={styles.cards}>
              {musicData.map((music, index) => (
                <motion.div
                  key={index}
                  className={styles.card}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ duration: 0.5, delay: index * 0.3 }} // Define o atraso entre os cards
                >
                  <div
                    className={styles.fotoMusic}
                    style={{ backgroundImage: `url(${music.imageUrl})` }}
                  ></div>

                  <div className={styles.descMusic}>
                    <h2>{music.title}</h2>
                    <p>{music.production}</p>
                  </div>

                  <audio controls>
                    <source
                      src={music.audioUrl}
                      type="audio/mp3"
                    />
                  </audio>

                  <div
                    className={styles.cta}
                    target="_blank"
                  >
                    <a
                      href={music.youtube}
                      target="_blank"
                    >
                      <img
                        src={music.youtubeUrl}
                        alt="Youtube"
                      />
                    </a>
                    <a
                      href={music.sound}
                      target="_blank"
                    >
                      <img
                        src={music.soundcloudUrl}
                        alt="SoundCloud"
                      />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
