export const STORAGE_KEY = 'taskflow_data'

export function loadTasksFromStorage() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) {
    return []
  }

  try {
    const parsed = JSON.parse(stored)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}
