import { useState } from 'react'
import styles from './TaskForm.module.css'

const STATUTS = ['A faire', 'En cours', 'Termine']

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('A faire')

  async function handleSubmit(event) {
    event.preventDefault()

    const nouvelleTache = {
      title: title.trim(),
      description: description.trim(),
      status,
    }

    try {
      const response = await fetch(
        'http://localhost:5000/api/tasks',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(nouvelleTache),
        }
      )

      if (response.status === 201) {
        const taskCreee = await response.json()

        onAddTask(taskCreee)

        setTitle('')
        setDescription('')
        setStatus('A faire')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <h2 className={styles.formTitle}>
        Nouvelle tâche
      </h2>

      <div className={styles.field}>
        <label
          className={styles.label}
          htmlFor="task-title"
        >
          Titre
        </label>

        <input
          id="task-title"
          className={styles.input}
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          required
        />
      </div>

      <div className={styles.field}>
        <label
          className={styles.label}
          htmlFor="task-description"
        >
          Description
        </label>

        <textarea
          id="task-description"
          className={`${styles.input} ${styles.textarea}`}
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          rows={3}
          required
        />
      </div>

      <div className={styles.field}>
        <label
          className={styles.label}
          htmlFor="task-status"
        >
          Statut initial
        </label>

        <select
          id="task-status"
          className={styles.select}
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >
          {STATUTS.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className={styles.submit}
      >
        Ajouter la tâche
      </button>
    </form>
  )
}

export default TaskForm