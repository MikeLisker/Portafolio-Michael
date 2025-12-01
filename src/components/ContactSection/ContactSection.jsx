import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './ContactSection.module.css'

gsap.registerPlugin(ScrollTrigger)

const ContactSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const formRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    console.log('ContactSection montado correctamente')
    gsap.fromTo(titleRef.current,
      { opacity: 1, y: 50 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    )

    gsap.fromTo(contentRef.current.children,
      { opacity: 1, x: -40 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    gsap.fromTo(formRef.current,
      { opacity: 1, x: 40 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )
  }, [])

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpiar error del campo al modificarlo
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {
      // Aquí integrarías EmailJS
      // import emailjs from 'emailjs-com'
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      
      // Simulación de envío
      await new Promise(resolve => setTimeout(resolve, 1500))

      setFormStatus({
        submitted: true,
        success: true,
        message: '¡Mensaje enviado exitosamente! Te responderé pronto.'
      })

      setFormData({
        name: '',
        email: '',
        message: ''
      })

      // Animación de éxito
      gsap.from(`.${styles.successMessage}`, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(2)'
      })

      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, message: '' })
      }, 5000)

    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Error al enviar el mensaje. Por favor intenta de nuevo.'
      })
    }
  }

  return (
    <section id="contact" ref={sectionRef} className={`${styles.contactSection} section`}>
      <div className={styles.container}>
        <h2 ref={titleRef} className={styles.title}>
          MÁS SOBRE MÍ <span className={styles.redText}>+ CONTACTO</span>
        </h2>

        <div className={styles.contentGrid}>
          <div ref={contentRef} className={styles.aboutContent}>
            <div className={styles.infoBlock}>
              <h3 className={styles.subtitle}>¿Quién soy fuera del trabajo?</h3>
              <p className={styles.text}>
                Soy un creativo apasionado por fusionar arte y tecnología. 
                Me encanta explorar nuevas herramientas, aprender constantemente 
                y enfrentarme a desafíos que me saquen de mi zona de confort.
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.subtitle}>Mis Intereses</h3>
              <ul className={styles.interestList}>
                <li>Videojuegos indie y AAA</li>
                <li>Cine y narrativa visual</li>
                <li>Arte conceptual y diseño</li>
                <li>Nuevas tecnologías y tendencias</li>
                <li>Aprendizaje continuo</li>
              </ul>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.subtitle}>Sígueme</h3>
              <div className={styles.socialLinks}>
                <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  GitHub
                </a>
                <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  LinkedIn
                </a>
                <a href="https://instagram.com/tu-usuario" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  Instagram
                </a>
                <a href="https://tu-usuario.itch.io" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  Itch.io
                </a>
              </div>
            </div>
          </div>

          <div ref={formRef} className={styles.formContainer}>
            <h3 className={styles.formTitle}>¿Tienes un proyecto en mente?</h3>
            <p className={styles.formSubtitle}>¡Hablemos! Estoy disponible para colaboraciones y nuevos retos.</p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.name ? styles.error : ''}`}
                  placeholder="Tu nombre completo"
                />
                {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.email ? styles.error : ''}`}
                  placeholder="tu@email.com"
                />
                {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                />
                {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
              </div>

              <button type="submit" className={styles.submitButton}>
                <span>ENVIAR MENSAJE</span>
                <span className={styles.arrow}>→</span>
              </button>
            </form>

            {formStatus.submitted && (
              <div className={`${styles.successMessage} ${formStatus.success ? styles.success : styles.errorMsg}`}>
                {formStatus.message}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.backgroundEffect}>
        <div className={styles.redGradient}></div>
      </div>
    </section>
  )
}

export default ContactSection
