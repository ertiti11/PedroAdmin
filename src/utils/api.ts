// api.ts
const API_URL = 'http://localhost:8000/api/v1/categorias';

export const fetchCategories = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data.map((category: { id: number; nombre: string }) => ({
      id: category.id,
      name: category.nombre,
    }));
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error; // Vuelve a lanzar el error para manejarlo en el componente
  }
};


export const fetchClients = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/clientes');
      const data = await response.json();
      return data.data; // Devuelve la propiedad 'data'
    } catch (error) {
      console.error('Error fetching clients:', error);
      throw error; // Lanza el error para que pueda ser manejado en el componente
    }
  };

  export const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/productos');
      const data = await response.json();
      return data.data; // Devuelve la propiedad 'data'
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; // Lanza el error para que pueda ser manejado en el componente
    }
  };