# 🎨 Portafolio Multimedia - Ingeniero en Multimedia

> **¿Primera vez aquí?** 👉 Lee [`INDEX.md`](./INDEX.md) para navegar toda la documentación

Portafolio profesional altamente interactivo desarrollado con React, Vite, GSAP y diseño UI/UX avanzado. Un proyecto que fusiona creatividad técnica con experiencias visuales memorables.

## 🚀 Características Principales

- **Pantalla de Bienvenida Interactiva**: Logo animado con GSAP que responde a tap/scroll/click
- **Animaciones Avanzadas**: GSAP con ScrollTrigger para transiciones fluidas
- **Diseño Asimétrico Moderno**: Layout creativo con paleta negro + rojo
- **5 Categorías de Proyectos**: 
  - Página Interactiva
  - Videojuegos (con links a itch.io)
  - Videos & Animaciones (carrusel horizontal)
  - Renders 3D (galería con efectos hover)
  - Ilustraciones (masonry grid)
- **Sección de Tecnologías**: Grid animado con logos interactivos
- **Formulario de Contacto**: Validación completa y preparado para EmailJS
- **Responsive Design**: Optimizado para todos los dispositivos

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool ultra-rápido
- **GSAP** - Animaciones profesionales
- **ScrollTrigger** - Animaciones on-scroll
- **CSS Modules** - Estilos encapsulados
- **React Router** - Navegación
- **EmailJS** - Envío de formularios (preparado)

## 📦 Instalación

### Prerrequisitos
- Node.js (v16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Instalar Node.js** (si no lo tienes):
   - Descarga desde: https://nodejs.org/
   - Instala la versión LTS recomendada

2. **Instalar dependencias**:
```powershell
cd "c:\Users\mclis\Documents\Portafolio Michael"
npm install
```

3. **Iniciar servidor de desarrollo**:
```powershell
npm run dev
```

4. **Abrir en navegador**:
   - El proyecto se abrirá automáticamente en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
Portafolio Michael/
├── public/
│   └── (assets estáticos: imágenes, videos, etc.)
├── src/
│   ├── components/
│   │   ├── WelcomeScreen/
│   │   │   ├── WelcomeScreen.jsx
│   │   │   └── WelcomeScreen.module.css
│   │   ├── Layout/
│   │   │   ├── MainLayout.jsx
│   │   │   └── MainLayout.module.css
│   │   ├── Navigation/
│   │   │   ├── Navigation.jsx
│   │   │   └── Navigation.module.css
│   │   ├── AboutSection/
│   │   │   ├── AboutSection.jsx
│   │   │   └── AboutSection.module.css
│   │   ├── ProjectsSection/
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── ProjectsSection.module.css
│   │   │   └── subsections/
│   │   │       ├── InteractivePage.jsx
│   │   │       ├── Videogames.jsx
│   │   │       ├── VideosAnimations.jsx
│   │   │       ├── Renders3D.jsx
│   │   │       └── Illustrations.jsx
│   │   ├── TechSection/
│   │   │   ├── TechSection.jsx
│   │   │   └── TechSection.module.css
│   │   └── ContactSection/
│   │       ├── ContactSection.jsx
│   │       └── ContactSection.module.css
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🎨 Personalización

### 1. **Cambiar Colores**
Edita las variables CSS en `src/styles/global.css`:
```css
:root {
  --color-red-primary: #e63946;  /* Tu color principal */
  --color-red-dark: #c1121f;
  --color-red-bright: #ff4757;
}
```

### 2. **Agregar tu Logo**
Reemplaza el SVG en `src/components/WelcomeScreen/WelcomeScreen.jsx` (línea 65-80) con tu logo personalizado.

### 3. **Agregar tu Ilustración Personal**
En `src/components/AboutSection/AboutSection.jsx` (línea 85-100), reemplaza el placeholder con tu ilustración.

### 4. **Actualizar Proyectos**

#### Página Interactiva
Edita `src/components/ProjectsSection/subsections/InteractivePage.jsx`:
- Línea 30: Descomentar y agregar tu video
- Línea 37: Cambiar URL del proyecto

#### Videojuegos
Edita el array `games` en `src/components/ProjectsSection/subsections/Videogames.jsx` (línea 8-30):
```javascript
const games = [
  {
    id: 1,
    title: 'Tu Juego',
    description: 'Descripción',
    trailer: '/videos/tu-trailer.mp4',
    itchUrl: 'https://tu-usuario.itch.io/tu-juego',
    genre: 'Género',
    year: '2024'
  }
]
```

#### Videos y Animaciones
Edita el array `videos` en `src/components/ProjectsSection/subsections/VideosAnimations.jsx`.

#### Renders 3D
Edita el array `renders` en `src/components/ProjectsSection/subsections/Renders3D.jsx`.

#### Ilustraciones
Edita el array `illustrations` en `src/components/ProjectsSection/subsections/Illustrations.jsx`.

### 5. **Configurar EmailJS**

1. Crea cuenta en [EmailJS](https://www.emailjs.com/)
2. Obtén tus credenciales (Service ID, Template ID, User ID)
3. En `src/components/ContactSection/ContactSection.jsx` (línea 76-78):
```javascript
import emailjs from 'emailjs-com'

await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_USER_ID'
)
```

### 6. **Actualizar Redes Sociales**
En `src/components/ContactSection/ContactSection.jsx` (línea 102-120), actualiza los enlaces.

## 🎬 Agregar Assets (Imágenes/Videos)

1. Coloca tus archivos en la carpeta `public/`:
```
public/
├── images/
│   ├── render1.jpg
│   ├── video1-thumb.jpg
│   └── illustration1.jpg
└── videos/
    ├── game1-trailer.mp4
    └── proyecto-reel.mp4
```

2. Referéncialos en el código:
```javascript
<img src="/images/tu-imagen.jpg" alt="Descripción" />
<video src="/videos/tu-video.mp4" />
```

## 🚀 Build para Producción

```powershell
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 📱 Deployment

### Vercel (Recomendado)
```powershell
npm install -g vercel
vercel
```

### Netlify
1. Drag & drop la carpeta `dist/` en [Netlify Drop](https://app.netlify.com/drop)
2. O conecta tu repositorio de GitHub

### GitHub Pages
```powershell
npm install gh-pages --save-dev
```

Agrega a `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

## 🎯 Próximas Mejoras Sugeridas

- [ ] Agregar Three.js para efectos 3D avanzados
- [ ] Implementar modo oscuro/claro
- [ ] Agregar blog/artículos section
- [ ] Integrar CMS para administrar proyectos
- [ ] Agregar animaciones con partículas
- [ ] Implementar PWA (Progressive Web App)
- [ ] Agregar análisis con Google Analytics
- [ ] Optimizar imágenes con lazy loading

## 🐛 Troubleshooting

### Error: "npm no se reconoce"
- Instala Node.js desde https://nodejs.org/

### Las animaciones no funcionan
- Verifica que GSAP esté instalado: `npm install gsap`

### El formulario no envía
- Configura EmailJS siguiendo la sección correspondiente

## 📄 Licencia

Este proyecto es de uso personal. Puedes usarlo como base para tu portafolio personal.

## 💬 Contacto

- **Email**: tu@email.com
- **LinkedIn**: [Tu Perfil](https://linkedin.com/in/tu-perfil)
- **GitHub**: [Tu Usuario](https://github.com/tu-usuario)

---

**Desarrollado con ❤️ y mucho ☕ por un Ingeniero en Multimedia**
