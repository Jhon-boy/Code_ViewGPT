export const getLenguajes = () => {
    return fetch('https://api.github.com/languages?per_page=100')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json();
      })
      .then(data => {
        // Extraer solo los nombres de los lenguajes
        const languageNames = data.map(language => language);
        return languageNames;
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
        throw error; // Re-lanzamos el error para que pueda ser manejado en otro lugar
      });
  }
  