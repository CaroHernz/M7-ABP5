<template>
  <div class="buefy-view">
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item has-text-weight-bold is-size-5" href="#">
            <span class="icon mr-2">
              <i class="fa-solid fa-b"></i>
            </span>
            Buefy
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" 
             @click="showNav = !showNav" :class="{ 'is-active': showNav }">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': showNav }">
          <div class="navbar-start">
            <a class="navbar-item is-active">Inicio</a>
            <a class="navbar-item">Servicios</a>
            <a class="navbar-item">Portafolio</a>
            <a class="navbar-item">Contacto</a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <button class="button is-primary is-outlined is-inverted is-small mr-2">
                  <span class="icon is-small">
                    <i class="fas fa-sign-in-alt"></i>
                  </span>
                  <span>Login</span>
                </button>
                <button class="button is-primary is-inverted is-small">
                  <span class="icon is-small">
                    <i class="fas fa-user-plus"></i>
                  </span>
                  <span>Registro</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="section">
      <div class="container">
        <div class="card mb-6">
          <div class="card-content">
            <h1 class="title is-1 has-text-primary">Buefy</h1>
            <h2 class="subtitle is-4 has-text-grey">
              Framework CSS Bulma con componentes Vue.js
            </h2>
            <div class="content is-medium p-2">
              <p>
                Buefy es una librería que funciona como una capa de JavaScript sobre el framework Bulma CSS. Se caracteriza por un diseño ligero y minimalista, enfocándose en la simplicidad y facilidad de uso
              </p>
            </div>
          </div>
        </div>

        <!-- Tabla Ventajas/Desventajas -->
        <div class="card mb-6">
          <div class="card-content">
            <h3 class="title is-3">Ventajas y Desventajas</h3>
            <div class="table-container">
              <table class="table is-striped is-fullwidth is-hoverable">
                <thead>
                  <tr>
                    <th class="has-text-centered">Ventajas</th>
                    <th class="has-text-centered">Desventajas / Limitaciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in tableData" :key="index">
                    <td>
                      <article class="message is-success">
                        <div class="message-body">
                          <span class="icon has-text-success mr-2">
                            <i class="fas fa-check-circle"></i>
                          </span>
                          {{ item.ventaja }}
                        </div>
                      </article>
                    </td>
                    <td>
                      <article class="message is-danger">
                        <div class="message-body">
                          <span class="icon has-text-danger mr-2">
                            <i class="fas fa-exclamation-circle"></i>
                          </span>
                          {{ item.desventaja }}
                        </div>
                      </article>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
<div class="card mt-6">
          <div class="card-content">
            <h3 class="title is-3">
              <span class="icon mr-2">
                <i class="fas fa-bell"></i>
              </span>
              Alertas y Modal
            </h3>

            <!-- Alertas Bulma -->
            <div class="columns">
              <div class="column">
                <article class="message is-success">
                  <div class="message-header">
                    <p>¡Éxito!</p>
                  </div>
                  <div class="message-body">
                    Esta es una alerta de éxito usando Bulma.
                  </div>
                </article>

                <article class="message is-info">
                  <div class="message-header">
                    <p>Información</p>
                    <button class="delete" aria-label="delete" @click="hideAlert('info')"></button>
                  </div>
                  <div class="message-body">
                    Alerta informativa que se puede cerrar.
                  </div>
                </article>

                <article class="message is-warning">
                  <div class="message-header">
                    <p>Advertencia</p>
                  </div>
                  <div class="message-body">
                    Alerta de advertencia importante.
                  </div>
                </article>

                <article class="message is-danger">
                  <div class="message-header">
                    <p>Error</p>
                  </div>
                  <div class="message-body">
                    Alerta de error crítica.
                  </div>
                </article>
              </div>
            </div>

            <!-- Botones de Control -->
            <div class="buttons">
              <button class="button is-success" @click="showAlert">
                <span class="icon">
                  <i class="fas fa-check-circle"></i>
                </span>
                <span>Mostrar Alerta</span>
              </button>

              <button class="button is-primary" @click="showModal = true">
                <span class="icon">
                  <i class="fas fa-external-link-alt"></i>
                </span>
                <span>Abrir Modal</span>
              </button>

              <button class="button is-info is-outlined" @click="showNotification">
                <span class="icon">
                  <i class="fas fa-bell"></i>
                </span>
                <span>Mostrar Notificación</span>
              </button>
            </div>
          </div>
        </div>
        <div class="columns">
          <!-- Evaluación de Rendimiento -->
          <div class="column is-half">
            <div class="card h-100">
              <div class="card-image">
                <figure class="image py-4">
                  <img src="/RendimientoBulma.png" alt="Buefy Performance">
                </figure>
              </div>
              <div class="card-content">
                <h4 class="title is-4">Evaluación de Rendimiento</h4>
                <div class="content">
                  <div class="mb-4">
                    <span class="has-text-weight-semibold">Rendimiento: 27%</span>
                    <progress class="progress is-danger" value="27" max="100">27%</progress>
                  </div>
                  <div class="mb-4">
                    <span class="has-text-weight-semibold">Accesibilidad: 92%</span>
                    <progress class="progress is-success" value="92" max="100">92%</progress>
                  </div>
                  <div class="mb-4">
                    <span class="has-text-weight-semibold">Recomendaciones: 93%</span>
                    <progress class="progress is-success" value="93" max="100">93%</progress>
                  </div>
                  <div class="mb-4">
                    <span class="has-text-weight-semibold">SEO: 83%</span>
                    <progress class="progress is-danger" value="83" max="100">83%</progress>
                  </div>
                </div>
                <div class="">
                  <p class="is-size-7">
                Buefy no es compatible con Vue 3, ya que fue desarrollado específicamente para Vue 2. Su arquitectura depende de las APIs de Vue 2 y no ha sido migrado a la Composition API de Vue 3. Por lo que se optó por utilizar Bulma directamente, aprovechando su framework de estilos minimalista y combinándolo con componentes Vue nativos. Esto permite mantener la filosofía de diseño ligero de Buefy mientras se garantiza compatibilidad completa con Vue 3.
              </p>
              <p class="is-size-7">A pesar de la excelente Accesibilidad de Bulma, su Rendimiento es preocupante. Al ser solo CSS, esto podría indicar que tu implementación específica (o la sobrecarga de tu aplicación) está penalizando severamente la velocidad de carga. </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulario -->
          <div class="column is-half">
            <div class="card">
              <div class="card-content">
                <h4 class="title is-4">Formulario de Contacto</h4>
                <form @submit.prevent="submitForm">
                  <div class="field">
                    <label class="label">Nombre completo</label>
                    <div class="control">
                      <input class="input" v-model="form.name" required placeholder="Ingresa tu nombre">
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                      <input class="input" v-model="form.email" type="email" required placeholder="tu@email.com">
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Tipo de consulta</label>
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select v-model="form.inquiry" required>
                          <option value="" disabled selected>Selecciona una opción</option>
                          <option v-for="option in inquiryOptions" :key="option.value" :value="option.value">
                            {{ option.text }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Mensaje</label>
                    <div class="control">
                      <textarea class="textarea" v-model="form.message" placeholder="Escribe tu mensaje" required rows="3"></textarea>
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                      <label class="checkbox">
                        <input type="checkbox" v-model="form.newsletter">
                        Suscribirse al newsletter
                      </label>
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                      <button class="button is-primary is-fullwidth" type="submit">
                        Enviar Mensaje
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <!-- Alertas y Modal -->
        
      </div>
    </section>

    <!-- Modal Bulma (usando CSS classes) -->
    <div class="modal" :class="{ 'is-active': showModal }">
      <div class="modal-background" @click="showModal = false"></div>
      <div class="modal-card" style="width: 640px;">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal de Buefy</p>
          <button class="delete" aria-label="close" @click="showModal = false"></button>
        </header>
        <section class="modal-card-body">
          <p>Este es un modal de ejemplo usando Bulma. Puedes agregar cualquier contenido aquí.</p>
          
          <div class="field mt-4">
            <label class="label">Nombre en el modal</label>
            <div class="control">
              <input class="input" v-model="modalData.name" placeholder="Ingresa tu nombre">
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button" @click="showModal = false">Cancelar</button>
          <button class="button is-primary" @click="saveModal">Guardar</button>
        </footer>
      </div>
    </div>

    <!-- Notificación (Toast) usando Bulma -->
    <div class="notification is-info" :class="{ 'is-hidden': !showNotificationActive }" 
         style="position: fixed; top: 20px; right: 20px; z-index: 1000; max-width: 300px;">
      <button class="delete" @click="showNotificationActive = false"></button>
      <div class="media">
        <div class="media-left">
          <span class="icon">
            <i class="fas fa-bell"></i>
          </span>
        </div>
        <div class="media-content">
          <p class="title is-6">Notificación</p>
          <p class="subtitle is-7">Esta es una notificación usando Bulma.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Estado reactivo
const showNav = ref(false)
const showModal = ref(false)
const showNotificationActive = ref(false)

const form = reactive({
  name: '',
  email: '',
  inquiry: '',
  message: '',
  newsletter: false
})

const modalData = reactive({
  name: ''
})

// Opciones del formulario
const inquiryOptions = [
  { value: 'support', text: 'Soporte técnico' },
  { value: 'sales', text: 'Ventas' },
  { value: 'general', text: 'Consulta general' }
]

// Datos de ventajas/desventajas para Buefy
const tableData = [
  {
    ventaja: 'Rendimiento superior en la mayoría de las métricas evaluadas (incluyendo First Contentful Paint, Speed Index y Total Blocking Time) en comparación con Vuetify y BootstrapVue.',
    desventaja: 'Serios problemas de Accesibilidad (A11Y): Se identificó que fue construido con poca o nula accesibilidad, careciendo de soporte para teclado, gestión de enfoque, etiquetado de lectores de pantalla y semántica adecuada en casi todos sus componentes (Collapse, Dialog, Dropdown, Tabs, Formularios Checkbox/Radio).'
  },
  {
    ventaja: 'Pequeño y ligero (small and lightweight) en tamaño de archivo, con menos dependencias.',
    desventaja: 'Conjunto de componentes limitado (limited set of components) y esenciales (botones, modales, dropdowns).'
  },
  {
    ventaja: 'Facilidad de integración en proyectos existentes basados en Bulma.',
    desventaja: 'Puede tener menos recursos y actividad de desarrollo que Vuetify.'
  }
]

// Métodos
const showAlert = () => {
  alert('¡Esta es una alerta JavaScript usando Buefy!')
}

const hideAlert = (type) => {
  // Lógica para ocultar alertas específicas si es necesario
  console.log(`Ocultar alerta: ${type}`)
}

const showNotification = () => {
  showNotificationActive.value = true
  // Auto-ocultar después de 3 segundos
  setTimeout(() => {
    showNotificationActive.value = false
  }, 3000)
}

const submitForm = () => {
  alert(`Formulario enviado correctamente:\n\nNombre: ${form.name}\nEmail: ${form.email}\nConsulta: ${form.inquiry}`)
  
  // Resetear formulario
  Object.assign(form, {
    name: '',
    email: '',
    inquiry: '',
    message: '',
    newsletter: false
  })
}

const saveModal = () => {
  if (modalData.name) {
    alert(`Datos guardados: ${modalData.name}`)
    showModal.value = false
    modalData.name = ''
  } else {
    alert('Por favor ingresa un nombre')
  }
}
</script>

<style scoped>
.buefy-view {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.h-100 {
  height: 100%;
}

a {
  text-decoration: none;
}

.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.table-container {
  overflow-x: auto;
}

/* Estilos para el modal personalizado */
.modal-card {
  margin: 0 auto;
}

/* Estilos para la notificación */
.notification {
  transition: all 0.3s ease;
}
</style>