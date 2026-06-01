import TaskCard from '../components/TaskCard'
import TaskForm from '../components/TaskForm'
import styles from './Dashboard.module.css'

function Dashboard({ tasks, onAddTask }) {
  return (
    <main className={styles.dashboard}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>TaskFlow</p>
        <h1 className={styles.title}>Tableau de bord</h1>
        <p className={styles.subtitle}>
          Suivez l&apos;avancement des tâches de l&apos;équipe technique.
        </p>
        <p className={styles.count}>
          {tasks.length} tâche{tasks.length > 1 ? 's' : ''}
        </p>
      </header>

      <section className={styles.formSection} aria-label="Ajouter une tâche">
        <TaskForm onAddTask={onAddTask} />
      </section>

      <section className={styles.list} aria-label="Liste des tâches">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </section>
    </main>
  )
}

export default Dashboard
