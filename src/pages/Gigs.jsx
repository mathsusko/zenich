import styles from './Gigs.module.css'
import { Ticket } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

const GIGS = [
  {
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1730472836/WhatsApp_Image_2024-10-25_at_13.42.00_1_gzoyzu.png',
    date: '26/OUTUBRO',
    festival: 'HALLOWEEN - MUSIC LAB',
    location: 'Curitiba-PR 🇧🇷',
    ticketLink: '' // Link do ingresso
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1730473038/IMG_0465_2_eoya0v.png',
    date: '--/--',
    festival: 'EVENTO POCKET SESSIONS - MUSIC LAB',
    location: 'Curitiba-PR 🇧🇷',
    ticketLink: ''
  }
]

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Gigs() {
  return (
    <div className={styles.bg}>
      <div className={styles.content}>
        <h2>ACOMPANHE · GIGS</h2>

        <div className={styles.lista}>
          {GIGS.map((gig, index) => (
            <motion.div
              key={index}
              className={styles.gigs}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '0px 0px -200px 0px' }}
              variants={variants}
            >
              <div
                className={styles.fotoGigs}
                style={{ backgroundImage: `url(${gig.imageUrl})` }}
              ></div>

              <div className={styles.info}>
                <div className={styles.dataGigs}>
                  <p>{gig.date}</p>
                  <h2>{gig.festival}</h2>
                </div>

                <div className={styles.localGigs}>
                  <p>{gig.location}</p>
                </div>

                <button className={styles.ticketGigs}>
                  <a
                    href={gig.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ingressos <Ticket size={32} />
                  </a>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
