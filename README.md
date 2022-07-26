# Orden

1. Definir las rutas
2. Definir los verbos de cada ruta

/todo
- GET (obtener todas las tareas)
- POST (crear una nueva tarea)
/todo/:id
- GET (obtener tarea)
- PUT (editar tarea)
- DELETE (eliminar tarea)

3. Crear los controladores

```javascript
    const getAllToDo = () => {
        return todoDB
    }
```
4. Crear los servicios
5. Crear las rutas