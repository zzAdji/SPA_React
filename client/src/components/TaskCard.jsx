import { Link } from 'react-router-dom'
import styles from './TaskCard.module.css'

const STATUT_CLASS = {
  'A faire': styles.statutAFaire,
  'En cours': styles.statutEnCours,
  Termine: styles.statutTermine,
}

function TaskCard({ task }) {
  const { id, title, description, status } = task
  const statutClass = STATUT_CLASS[status] ?? styles.statutDefault

  return (
    <Link to={`/task/${id}`} className={styles.link}>
      <article className={styles.card}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <span className={`${styles.badge} ${statutClass}`}>{status}</span>
        </header>
        <p className={styles.description}>{description}</p>
      </article>
    </Link>
  )
}

export default TaskCard
