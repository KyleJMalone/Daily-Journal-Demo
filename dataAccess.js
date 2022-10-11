const API =" http://localhost:8080"
export const fetchEntries = async () => {
    const dataFetch = await fetch(`${API}/entries`)
    const entries = await dataFetch.json()
    return entries
  };