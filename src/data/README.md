# Gestión de Datos del Portafolio

Esta carpeta contiene todos los datos de los proyectos en formato JSON para facilitar la actualización y escalabilidad del portafolio.

## Estructura de Archivos

### 📹 `videosAnimations.json`
Contiene los videos y animaciones del portafolio.

**Campos:**
- `id`: Identificador único (número)
- `title`: Título del video
- `synopsis`: Descripción corta para la tarjeta
- `description`: Descripción completa para el modal
- `thumbnail`: Ruta de la imagen miniatura
- `youtubeId`: ID del video de YouTube (solo el ID, no la URL completa)
- `duration`: Duración del video (formato: "MM:SS")
- `tools`: Array de herramientas utilizadas
- `year`: Año de creación

**Ejemplo de uso:**
```json
{
  "id": 1,
  "title": "Mi Video Increíble",
  "synopsis": "Descripción corta",
  "description": "Descripción detallada del proyecto...",
  "thumbnail": "/images/mi-video-thumb.jpg",
  "youtubeId": "dQw4w9WgXcQ",
  "duration": "3:45",
  "tools": ["After Effects", "Premiere Pro"],
  "year": "2024"
}
```

**Cómo obtener el YouTube ID:**
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID: `dQw4w9WgXcQ` ← Solo usa esto

---

### 🎮 `videogames.json`
Contiene los videojuegos desarrollados.

**Campos:**
- `id`: Identificador único
- `title`: Nombre del juego
- `description`: Descripción del juego
- `trailer`: Ruta del video trailer
- `itchUrl`: URL de itch.io
- `genre`: Género del juego
- `year`: Año de lanzamiento

---

### 🎨 `renders3D.json`
Contiene los renders y modelados 3D.

**Campos:**
- `id`: Identificador único
- `title`: Título del render
- `software`: Software utilizado (Maya, Blender, ZBrush, etc.)
- `images`: Array de rutas de imágenes (soporta múltiples imágenes por render)
- `description`: Descripción corta
- `year`: Año de creación
- `details`: Descripción detallada del proyecto

**Nota:** Si tienes múltiples vistas o versiones del mismo render, puedes agregar varias imágenes:
```json
{
  "id": 1,
  "title": "Mi Render",
  "software": "Blender",
  "images": [
    "/images/render1-vista1.jpg",
    "/images/render1-vista2.jpg",
    "/images/render1-wireframe.jpg"
  ],
  "description": "Descripción corta",
  "year": "2024",
  "details": "Descripción detallada..."
}
```

---

### 🖌️ `illustrations.json`
Contiene las ilustraciones digitales y analógicas.

**Campos:**
- `id`: Identificador único
- `title`: Título de la ilustración
- `type`: "Digital" o "Analógico"
- `tall`: `true` o `false` (para layout masonry)
- `images`: Array de rutas de imágenes (soporta múltiples imágenes por ilustración)
- `description`: Descripción del trabajo
- `year`: Año de creación
- `tools`: Array de herramientas/materiales utilizados

**Ejemplo con múltiples imágenes:**
```json
{
  "id": 1,
  "title": "Character Design Sheet",
  "type": "Digital",
  "tall": true,
  "images": [
    "/images/character-front.jpg",
    "/images/character-side.jpg",
    "/images/character-expressions.jpg"
  ],
  "description": "Hoja completa de diseño de personaje",
  "year": "2024",
  "tools": ["Photoshop", "Procreate"]
}
```

---

### 💻 `interactivePage.json`
Contiene la información del proyecto web interactivo.

**Campos:**
- `title`: Título del proyecto
- `description`: Descripción del proyecto
- `videoReel`: Ruta del video reel
- `liveUrl`: URL del proyecto en vivo
- `githubUrl`: URL del repositorio de GitHub
- `techStack`: Array de tecnologías utilizadas
- `features`: Array de características principales
- `highlights`: Array de objetos con título y descripción

---

## 🔄 Cómo Agregar Nuevos Proyectos

### Para Videos/Animaciones:
1. Abre `videosAnimations.json`
2. Agrega un nuevo objeto al array con todos los campos
3. Incrementa el `id` (usa el siguiente número disponible)
4. Sube tu thumbnail a `/public/images/`
5. Sube tu video a YouTube y copia el ID

### Para Videojuegos:
1. Abre `videogames.json`
2. Agrega un nuevo objeto con la información del juego
3. Sube tu trailer a `/public/videos/` (opcional)
4. Actualiza la URL de itch.io

### Para Renders 3D:
1. Abre `renders3D.json`
2. Agrega un nuevo objeto con la información del render
3. Si tienes múltiples vistas del mismo render, agrega todas las rutas en el array `images`
4. Sube tus imágenes a `/public/images/`

**Ejemplo con múltiples imágenes:**
```json
{
  "id": 9,
  "title": "Nuevo Render",
  "software": "Blender",
  "images": [
    "/images/render9-beauty.jpg",
    "/images/render9-wireframe.jpg",
    "/images/render9-clay.jpg"
  ],
  "description": "Descripción corta",
  "year": "2024",
  "details": "Descripción detallada del proceso..."
}
```

### Para Ilustraciones:
1. Abre `illustrations.json`
2. Agrega un nuevo objeto
3. Define si es `"Digital"` o `"Analógico"`
4. Define si es `tall: true` (vertical) o `tall: false` (horizontal)
5. Si tienes proceso, bocetos o variaciones, agrégalos en el array `images`
6. Sube tus imágenes a `/public/images/`

**Ejemplo con proceso:**
```json
{
  "id": 10,
  "title": "Nueva Ilustración",
  "type": "Digital",
  "tall": true,
  "images": [
    "/images/illustration10-final.jpg",
    "/images/illustration10-sketch.jpg",
    "/images/illustration10-lineart.jpg"
  ],
  "description": "Descripción del trabajo",
  "year": "2024",
  "tools": ["Photoshop", "Wacom"]
}
```

---

## 📁 Estructura de Imágenes Recomendada

```
public/
  images/
    videos/
      video1-thumb.jpg
      video2-thumb.jpg
    games/
      game1-thumb.jpg
    renders/
      render1.jpg
    illustrations/
      illustration1.jpg
```

---

## ✨ Ventajas de este Sistema

1. **Escalabilidad**: Solo agrega objetos al JSON, no necesitas modificar código
2. **Mantenimiento**: Toda la información en un solo lugar
3. **Validación**: Fácil de revisar y editar
4. **Backup**: Fácil de respaldar toda la información
5. **Colaboración**: Otros pueden agregar proyectos sin tocar el código

---

## ⚠️ Notas Importantes

- Los IDs deben ser únicos dentro de cada archivo
- Las rutas de imágenes deben comenzar con `/images/` o `/videos/`
- No olvides subir las imágenes/videos correspondientes
- El formato JSON debe ser válido (cuidado con comas y comillas)
- Para YouTube: solo usa el ID del video, no la URL completa

---

## 🆘 Resolución de Problemas

**Si los proyectos no aparecen:**
1. Verifica que el JSON sea válido (usa un validador JSON online)
2. Revisa la consola del navegador para errores
3. Verifica que las rutas de las imágenes sean correctas
4. Asegúrate de haber guardado los cambios en el JSON

**Si las imágenes no cargan:**
1. Verifica que la imagen existe en `/public/images/`
2. Revisa que la ruta en el JSON sea correcta
3. Comprueba el formato del archivo (jpg, png, etc.)
