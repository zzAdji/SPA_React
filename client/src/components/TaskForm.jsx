import { useState } from 'react'
import styles from './TaskForm.module.css'

const STATUTS = ['A faire', 'En cours', 'Termine']

const ETAT_INITIAL = {
  titre: '',
  description: '',
  statut: 'A faire',
}

function TaskForm({ onAddTask }) {
  const [titre, setTitre] = useState(ETAT_INITIAL.titre)
  const [description, setDescription] = useState(ETAT_INITIAL.description)
  const [statut, setStatut] = useState(ETAT_INITIAL.statut)

  function handleSubmit(event) {
    event.preventDefault()

    const nouvelleTache = {
      id: Date.now(),
      titre: titre.trim(),
      description: description.trim(),
      statut,
    }

    onAddTask(nouvelleTache)

    setTitre(ETAT_INITIAL.titre)
    setDescription(ETAT_INITIAL.description)
    setStatut(ETAT_INITIAL.statut)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h2 className={styles.formTitle}>Nouvelle tâche</h2>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="task-titre">
          Titre
        </label>
        <input
          id="task-titre"
          className={styles.input}
          type="text"
          value={titre}
          onChange={(event) => setTitre(event.target.value)}
          placeholder="Ex. Conception de l'ontologie"
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="task-description">
          Description
        </label>
        <textarea
          id="task-description"
          className={`${styles.input} ${styles.textarea}`}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Décrivez brièvement la tâche…"
          rows={3}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="task-statut">
          Statut initial
        </label>
        <select
          id="task-statut"
          className={styles.select}
          value={statut}
          onChange={(event) => setStatut(event.target.value)}
        >
          {STATUTS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className={styles.submit}>
        Ajouter la tâche
      </button>
    </form>
  )
}

export default TaskForm
