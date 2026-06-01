import { Link, useParams } from 'react-router-dom'
import styles from './TaskDetail.module.css'

const STATUT_CLASS = {
  'A faire': styles.statutAFaire,
  'En cours': styles.statutEnCours,
  Termine: styles.statutTermine,
}

function TaskDetail({ tasks }) {
  const { id } = useParams()
  const task = tasks.find((item) => String(item.id) === String(id))

  if (!task) {
    return (
      <main className={styles.page}>
        <div className={styles.notFound}>
          <h1 className={styles.notFoundTitle}>Tâche introuvable</h1>
          <p className={styles.notFoundText}>
            Aucune tâche ne correspond à l&apos;identifiant{' '}
            <span className={styles.mono}>{id}</span>.
          </p>
          <Link to="/" className={styles.backLink}>
            Retour au tableau de bord
          </Link>
        </div>
      </main>
    )
  }

  const { titre, description, statut } = task
  const statutClass = STATUT_CLASS[statut] ?? styles.statutDefault

  return (
    <main className={styles.page}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.backLink}>
          ← Tableau de bord
        </Link>
      </nav>

      <article className={styles.detail}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Détail de la tâche</p>
          <h1 className={styles.title}>{titre}</h1>
          <span className={`${styles.badge} ${statutClass}`}>{statut}</span>
        </header>

        <dl className={styles.properties}>
          <div className={styles.property}>
            <dt className={styles.label}>Identifiant</dt>
            <dd className={styles.valueMono}>{task.id}</dd>
          </div>
          <div className={styles.property}>
            <dt className={styles.label}>Titre</dt>
            <dd className={styles.value}>{titre}</dd>
          </div>
          <div className={styles.property}>
            <dt className={styles.label}>Description</dt>
            <dd className={styles.valueDescription}>{description}</dd>
          </div>
          <div className={styles.property}>
            <dt className={styles.label}>Statut</dt>
            <dd className={styles.value}>
              <span className={`${styles.badgeInline} ${statutClass}`}>
                {statut}
              </span>
            </dd>
          </div>
        </dl>
      </article>
    </main>
  )
}

export default TaskDetail
