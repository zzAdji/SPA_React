import { Link } from 'react-router-dom'
import styles from './TaskCard.module.css'

const STATUT_CLASS = {
  'A faire': styles.statutAFaire,
  'En cours': styles.statutEnCours,
  Termine: styles.statutTermine,
}

function TaskCard({ task }) {
  const { id, titre, description, statut } = task
  const statutClass = STATUT_CLASS[statut] ?? styles.statutDefault

  return (
    <Link to={`/task/${id}`} className={styles.link}>
      <article className={styles.card}>
        <header className={styles.header}>
          <h2 className={styles.titre}>{titre}</h2>
          <span className={`${styles.badge} ${statutClass}`}>{statut}</span>
        </header>
        <p className={styles.description}>{description}</p>
      </article>
    </Link>
  )
}

export default TaskCard
