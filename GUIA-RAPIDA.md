# 🚀 Guía Rápida de Inicio

## ⚡ Instalación Rápida (5 minutos)

### Paso 1: Verificar Node.js
Abre PowerShell y ejecuta:
```powershell
node --version
```

Si ves un error, **descarga Node.js**:
👉 https://nodejs.org/ (versión LTS)

### Paso 2: Instalar Dependencias
```powershell
cd "c:\Users\mclis\Documents\Portafolio Michael"
npm install
```
⏱️ Esto tomará 2-3 minutos

### Paso 3: Iniciar el Proyecto
```powershell
npm run dev
```
✅ El navegador se abrirá automáticamente en http://localhost:3000

---

## 📝 Primeras Personalizaciones (15 minutos)

### 1. Tu Información Personal

**Archivo**: `src/components/AboutSection/AboutSection.jsx`

Busca y edita (líneas 70-85):
```javascript
<p className={styles.mainText}>
  Soy <strong>TU NOMBRE</strong>, 
  especializado en...
</p>
```

### 2. Tus Links de Redes Sociales

**Archivo**: `src/components/ContactSection/ContactSection.jsx`

Busca (línea 102):
```javascript
<a href="https://github.com/TU-USUARIO" ...>
```

Cambia:
- GitHub: tu usuario
- LinkedIn: tu perfil
- Instagram: tu usuario
- Itch.io: tu página

### 3. Tu Proyecto Interactivo

**Archivo**: `src/components/ProjectsSection/subsections/InteractivePage.jsx`

Edita (línea 37):
```javascript
<a href="https://TU-PROYECTO.com" ...>
```

### 4. Tus Videojuegos

**Archivo**: `src/components/ProjectsSection/subsections/Videogames.jsx`

Edita el array `games` (línea 8-30):
```javascript
const games = [
  {
    id: 1,
    title: 'NOMBRE DE TU JUEGO',
    description: 'Descripción corta...',
    itchUrl: 'https://TU-USUARIO.itch.io/TU-JUEGO',
    genre: 'Acción/Aventura',
    year: '2024'
  }
]
```

---

## 🎨 Cambiar Colores (5 minutos)

**Archivo**: `src/styles/global.css`

Busca (línea 16-22):
```css
--color-red-primary: #e63946;  /* Cambia este color */
--color-red-dark: #c1121f;
--color-red-bright: #ff4757;
```

**Herramientas útiles**:
- Coolors: https://coolors.co/
- Adobe Color: https://color.adobe.com/

---

## 📦 Agregar Imágenes y Videos

### Estructura recomendada:
```
Portafolio Michael/
└── public/
    ├── images/
    │   ├── tu-foto.jpg
    │   ├── render1.jpg
    │   └── ilustracion1.jpg
    └── videos/
        ├── juego1-trailer.mp4
        └── proyecto-reel.mp4
```

### Cómo usar:
```javascript
<img src="/images/tu-foto.jpg" alt="Tu descripción" />
<video src="/videos/tu-video.mp4" controls />
```

---

## ✉️ Configurar Formulario de Contacto (10 minutos)

### Opción 1: EmailJS (Gratis, Recomendado)

1. **Crear cuenta**: https://www.emailjs.com/
2. **Agregar servicio de email** (Gmail, Outlook, etc.)
3. **Crear plantilla de email**
4. **Obtener credenciales**:
   - Service ID
   - Template ID
   - Public Key

5. **Configurar en tu proyecto**:

**Archivo**: `src/components/ContactSection/ContactSection.jsx`

Instalar EmailJS:
```powershell
npm install @emailjs/browser
```

Descomentar (línea 76) y agregar tus IDs:
```javascript
import emailjs from '@emailjs/browser'

await emailjs.send(
  'TU_SERVICE_ID',      // De EmailJS
  'TU_TEMPLATE_ID',     // De EmailJS
  formData,
  'TU_PUBLIC_KEY'       // De EmailJS
)
```

### Opción 2: Formspree (Más simple)

1. **Crear cuenta**: https://formspree.io/
2. **Crear nuevo formulario**
3. **Copiar el endpoint**

```javascript
// En handleSubmit
const response = await fetch('https://formspree.io/f/TU-ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

---

## 🌐 Publicar tu Portafolio (15 minutos)

### Opción 1: Vercel (Más Rápido)

1. **Crear cuenta**: https://vercel.com/ (con GitHub)
2. **Importar proyecto**: Click en "New Project"
3. **Conectar repositorio**: Selecciona tu repo
4. **Deploy**: Click "Deploy"
5. **Listo!** Tu sitio estará en: `tu-proyecto.vercel.app`

### Opción 2: Netlify

1. **Build el proyecto**:
```powershell
npm run build
```

2. **Deploy**:
   - Ve a: https://app.netlify.com/drop
   - Arrastra la carpeta `dist/`
   - ¡Listo!

### Configurar Dominio Propio (Opcional)

1. **Comprar dominio**: Namecheap, GoDaddy, etc.
2. **En Vercel/Netlify**: Settings → Domains
3. **Agregar dominio** y seguir instrucciones
4. **Esperar propagación**: 24-48 horas

---

## 🎯 Checklist de Personalización Completa

### Básico (30 minutos)
- [ ] Cambiar nombre y descripción personal
- [ ] Actualizar links de redes sociales
- [ ] Agregar proyectos básicos
- [ ] Cambiar colores (opcional)
- [ ] Configurar formulario

### Intermedio (2 horas)
- [ ] Agregar tu logo personalizado
- [ ] Subir fotos/ilustraciones reales
- [ ] Agregar todos tus proyectos
- [ ] Grabar/subir videos de proyectos
- [ ] Personalizar sección "Más sobre mí"

### Avanzado (1 día)
- [ ] Optimizar todas las imágenes
- [ ] Comprimir videos
- [ ] Agregar animaciones personalizadas
- [ ] Implementar Google Analytics
- [ ] Configurar SEO completo
- [ ] Pruebas en múltiples dispositivos
- [ ] Deploy con dominio propio

---

## 🆘 Solución de Problemas Comunes

### "npm no se reconoce"
**Solución**: Instala Node.js → https://nodejs.org/

### "Puerto 3000 en uso"
**Solución**: 
```powershell
netstat -ano | findstr :3000
taskkill /PID [número] /F
```

### "Las fuentes no cargan"
**Solución**: Verifica conexión a internet (Google Fonts)

### "Las animaciones se ven raras"
**Solución**: 
```powershell
npm install gsap
```

### "El formulario no envía"
**Solución**: Configura EmailJS siguiendo la sección de arriba

---

## 📚 Recursos de Aprendizaje

### React
- Documentación oficial: https://react.dev/
- Tutorial interactivo: https://react-tutorial.app/

### GSAP
- Documentación: https://greensock.com/docs/
- Ejemplos: https://codepen.io/GreenSock

### CSS
- CSS Tricks: https://css-tricks.com/
- Flexbox Guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

---

## 💡 Consejos Finales

✅ **Haz commits frecuentes** en Git mientras personalizas
✅ **Prueba en móvil** regularmente (Chrome DevTools)
✅ **Optimiza las imágenes** antes de subirlas (TinyPNG)
✅ **Pide feedback** a amigos/colegas
✅ **Actualiza constantemente** con nuevos proyectos

---

## 🎉 ¡Listo para Empezar!

```powershell
# Comando único para iniciar todo
cd "c:\Users\mclis\Documents\Portafolio Michael"
npm install
npm run dev
```

**¡Tu portafolio estará corriendo en segundos!** 🚀

---

¿Necesitas ayuda? Revisa:
- `README.md` - Documentación completa
- `OPTIMIZACION.md` - Guía avanzada de optimización
