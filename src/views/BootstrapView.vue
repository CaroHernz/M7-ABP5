<template>
  <div class="bootstrap-view">
    <BNavbar toggleable="lg" variant="primary" class="">
      <BContainer class="d-flex">
        <BNavbarBrand href="#" class="fw-bold text-light align-items-center">
          <i class="fa-brands fa-bootstrap fa-lg me-2"></i> BootstrapVue
        </BNavbarBrand>

        <BNavbarToggle target="nav-collapse"></BNavbarToggle>

        <BCollapse id="nav-collapse" is-nav>
          <BNavbarNav class="ms-auto align-items-center">
            <BNavItem href="#" class="list-unstyled" active>Link 1</BNavItem>
            <BNavItem href="#" class="list-unstyled">Link 2</BNavItem>
            <BNavItem href="#" class="list-unstyled">Link 3</BNavItem>
            <BNavItem href="#" class="list-unstyled">Link 4</BNavItem>
          </BNavbarNav>

          <BNavbarNav class="ms-3">
            <BButton variant="outline-light" size="sm" class="me-2">
              <i class="fas fa-sign-in-alt me-1"></i>Login
            </BButton>
            <BButton variant="light" size="sm" class="text-primary">
              <i class="fas fa-user-plus me-1"></i>Registro
            </BButton>
          </BNavbarNav>
        </BCollapse>
      </BContainer>
    </BNavbar>

    <BContainer class="my-4">
      <BRow class="mb-5">
        <BCol>
          <BCard class="shadow-sm">
            <BCardBody>
              <BCardTitle class="display-4 text-primary">BootstrapVue</BCardTitle>
              <BCardSubtitle class="lead text-muted">Framework de componentes Bootstrap para Vue.js</BCardSubtitle>
              <BCardText>BootstrapVue implementa componentes Vue.js basados en Bootstrap, permitiendo crear interfaces
                modernas y responsivas con facilidad. Es ideal para proyectos que requieren consistencia y rapidez en el
                desarrollo.</BCardText>
              <BCardText>BootstrapVue es una librería que permite construir proyectos web responsive, mobile-first y
                accesibles, utilizando Vue.js y la popular librería CSS Bootstrap v4. Ofrece más de 85 componentes, más
                de 45 plugins y 1200+ iconos</BCardText>
            </BCardBody>
          </BCard>
        </BCol>
      </BRow>

      <BRow class="mb-5">
        <BCol>
          <BCard class="shadow-sm">
            <BCardBody>
              <BCardTitle class="h4">Características Principales</BCardTitle>
              <BListGroup>
                <BListGroupItem class="d-flex justify-content-between align-items-center">
                  Componentes basados en Bootstrap v5
                  <BBadge variant="primary" pill>✓</BBadge>
                </BListGroupItem>
                <BListGroupItem class="d-flex justify-content-between align-items-center">
                  Compatible con Vue 3
                  <BBadge variant="primary" pill>✓</BBadge>
                </BListGroupItem>
                <BListGroupItem class="d-flex justify-content-between align-items-center">
                  Diseño responsivo
                  <BBadge variant="primary" pill>✓</BBadge>
                </BListGroupItem>
                <BListGroupItem class="d-flex justify-content-between align-items-center">
                  Accesibilidad integrada
                  <BBadge variant="primary" pill>✓</BBadge>
                </BListGroupItem>
              </BListGroup>
            </BCardBody>
          </BCard>
        </BCol>
      </BRow>

      <BRow class="mb-5">
        <BCol>
          <BCard class="shadow-sm">
            <BCardBody>
              <BCardTitle class="h3 mb-4">Ventajas y Desventajas</BCardTitle>
              <BTable striped hover :items="tableData" :fields="fields">
                <template #cell(ventajas)="data">
                  <div class="advantage-item">
                    <i class="fa-solid fa-circle-check text-success me-2"></i>
                    <span>{{ data.value }}</span>
                  </div>
                </template>
                <template #cell(desventajas)="data">
                  <div class="disadvantage-item">
                    <i class="fa-solid fa-circle-xmark text-danger me-2"></i>
                    <span>{{ data.value }}</span>
                  </div>
                </template>
              </BTable>
            </BCardBody>
          </BCard>
        </BCol>
      </BRow>

      <BRow class="mb-5">
        <BCol cols="12">
          <BCard class="shadow-sm">
            <BCardBody>
              <BCardTitle class="h3 mb-4"><i class="fas fa-bell me-2"></i>Alertas</BCardTitle>
              <BCol cols="12" class="mb-3">
                <div class="alert alert-success" role="alert" show>
                  <i class="fas fa-check-circle me-2 fs-5"></i>
                  <div>
                    <h5 class="alert-heading mb-1">¡Éxito!</h5>
                    Esta es una alerta de éxito usando BootstrapVue.
                  </div>
                </div>
                <div class="alert alert-info" role="alert" show dismissible>
                  <i class="fas fa-info-circle me-2"></i>
                  Alerta informativa que se puede cerrar.
                </div>
                <div class="alert alert-warning" show role="alert">
                  <i class="fas fa-exclamation-triangle me-2"></i>
                  Alerta de advertencia importante.
                </div>
              </BCol>

              <BCol cols="12">
                <BButton variant="success" @click="showAlert" class="me-2">
                  <i class="fas fa-check-circle me-1"></i>Mostrar Alerta
                </BButton>

                <BButton variant="primary" @click="showModal = true" class="me-2">
                  <i class="fas fa-external-link-alt me-1"></i>Abrir Modal
                </BButton>

                <BButton variant="outline-info" @click="showToast">
                  <i class="fas fa-bell me-1"></i>Mostrar Toast
                </BButton>
              </BCol>
            </BCardBody>
          </BCard>
        </BCol>
      </BRow>
      
      <!-- Evaluación de Rendimiento -->
      <BRow class="my-5">
        <BCol md="6" class="mb-5">
          <BCard class="h-100 shadow">
            <BCardImg src="/RendimientoBootstrap.png" alt="BootstrapVue Performance" top></BCardImg>
            <BCardBody class="d-flex flex-column">
              <BCardTitle>Evaluación de Rendimiento</BCardTitle>
              <BCardText class="flex-grow-1">
                <BFormGroup label="Rendimiento: 36%" class="mb-3">
                  <BProgress :value="36" variant="danger" animated class="mb-2"></BProgress>
                </BFormGroup>

                <BFormGroup label="Accesibilidad: 91%" class="mb-3">
                  <BProgress :value="91" variant="info" animated class="mb-2"></BProgress>
                </BFormGroup>

                <BFormGroup label="Recomendaciones: 96%" class="mb-3">
                  <BProgress :value="96" variant="success" animated class="mb-2"></BProgress>
                </BFormGroup>

                <BFormGroup label="SEO: 83%" class="mb-3">
                  <BProgress :value="83" variant="warning" animated class="mb-2"></BProgress>
                </BFormGroup>
              </BCardText>
              <BCardText>BootstrapVue ofrece un mejor balance. Tiene el mejor equilibrio general. Su alta Accesibilidad
                y
                Recomendaciones muestran que la base del código es limpia y estándar, lo que facilita el desarrollo
                futuro.
              </BCardText>
            </BCardBody>
          </BCard>
        </BCol>

        <BCol md="6">
          <BCard class="shadow">
            <BCardBody>
              <BCardTitle class="h4 mb-4">Formulario de Contacto</BCardTitle>
              <BForm @submit.prevent="submitForm">
                <BFormGroup label="Nombre completo:" label-for="name" class="mb-3">
                  <BFormInput id="name" v-model="form.name" required placeholder="Ingresa tu nombre"></BFormInput>
                </BFormGroup>

                <BFormGroup label="Email:" label-for="email" class="mb-3">
                  <BFormInput id="email" v-model="form.email" type="email" required placeholder="tu@email.com">
                  </BFormInput>
                </BFormGroup>

                <BFormGroup label="Tipo de consulta:" label-for="inquiry" class="mb-3">
                  <BFormSelect id="inquiry" v-model="form.inquiry" :options="inquiryOptions" required></BFormSelect>
                </BFormGroup>

                <BFormGroup label="Mensaje:" label-for="message" class="mb-3">
                  <BFormTextarea id="message" v-model="form.message" rows="3" required
                    placeholder="Escribe tu mensaje aquí">
                  </BFormTextarea>
                </BFormGroup>

                <BFormGroup class="mb-4">
                  <BFormCheckbox id="newsletter" v-model="form.newsletter">
                    Suscribirse al newsletter
                  </BFormCheckbox>
                </BFormGroup>

                <BButton type="submit" variant="primary" class="w-100">
                  Enviar Mensaje
                </BButton>
              </BForm>
            </BCardBody>
          </BCard>
        </BCol>
      </BRow>
    </BContainer>

    <BModal v-model="showModal" title="Modal de BootstrapVue" hide-footer>
      <p>Este es un modal de ejemplo usando BootstrapVue. Puedes agregar cualquier contenido aquí.</p>

      <BFormGroup label="Nombre en el modal:">
        <BFormInput v-model="modalData.name" placeholder="Ingresa tu nombre"></BFormInput>
      </BFormGroup>

      <div class="d-flex justify-content-end">
        <BButton variant="secondary" @click="showModal = false" class="me-2">
          Cancelar
        </BButton>
        <BButton variant="primary" @click="saveModal">
          Guardar
        </BButton>
      </div>
    </BModal>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import {
  BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BNavItem, BButton,
  BContainer, BRow, BCol, BCard, BCardBody, BCardTitle, BCardSubtitle, BCardText, BCardImg,
  BListGroup, BListGroupItem, BBadge, BTable, BAlert, BModal, BForm, BFormGroup, BFormInput,
  BFormSelect, BFormTextarea, BFormCheckbox, BProgress, BToast, BToastContainer
} from 'bootstrap-vue-3'

const showModal = ref(false)
const toastShow = ref(false)
const toastTitle = ref('')
const toastMessage = ref('')
const toastVariant = ref('info')

const form = reactive({
  name: '',
  email: '',
  inquiry: null,
  message: '',
  newsletter: false
})

const modalData = reactive({
  name: ''
})

const inquiryOptions = [
  { value: null, text: 'Selecciona una opción' },
  { value: 'support', text: 'Soporte técnico' },
  { value: 'sales', text: 'Ventas' },
  { value: 'general', text: 'Consulta general' }
]

const fields = [
  { key: 'ventajas', label: 'Ventajas' },
  { key: 'desventajas', label: 'Desventajas / Limitaciones' }
]

const tableData = [
  {
    ventajas: 'Accesibilidad ARIA automática (WAI-ARIA) en la mayoría de los componentes interactivos. La documentación señala que es posible crear sitios que cumplan con WCAG 2.0.',
    desventajas: 'Utiliza Bootstrap v4 y requiere Vue 2.6. Se recomienda migrar a BootstrapVueNext para un soporte completo de Vue 3 y Bootstrap v5.'
  },
  {
    ventajas: 'Curva de aprendizaje directa (más fácil de aprender) si se está familiarizado con HTML/CSS y Bootstrap.',
    desventajas: 'Mayor tamaño de archivo (larger file size) debido a la inclusión de componentes pre-diseñados.'
  },
  {
    ventajas: 'Permite la tematización y personalización mediante variables Sass y opciones globales.',
    desventajas: 'La mayoría de los colores predeterminados de la paleta de Bootstrap V4 resultan en un contraste de color insuficiente (por debajo del 4.5:1 de WCAG 2.0).'
  },
  {
    ventajas: 'Es modular, permitiendo importar solo las características necesarias.',
    desventajas: 'En métricas de rendimiento como Time to First Byte (TTFB) y Speed Index, BootstrapVue tiene el rendimiento más lento en comparación con Buefy y Vuetify.'
  }
]
const showAlert = () => {
  alert('¡Esta es una alerta JavaScript personalizada!')
}

const showToast = () => {
  toastTitle.value = 'Notificación'
  toastMessage.value = 'Este es un toast de BootstrapVue que se muestra correctamente.'
  toastVariant.value = 'info'
  toastShow.value = true

  setTimeout(() => {
    toastShow.value = false
  }, 3000)
}

const submitForm = () => {
  toastTitle.value = '¡Éxito!'
  toastMessage.value = `Formulario enviado correctamente:\nNombre: ${form.name}\nEmail: ${form.email}`
  toastVariant.value = 'success'
  toastShow.value = true

  Object.assign(form, {
    name: '',
    email: '',
    inquiry: null,
    message: '',
    newsletter: false
  })

  setTimeout(() => {
    toastShow.value = false
  }, 4000)
}

const saveModal = () => {
  if (modalData.name) {
    toastTitle.value = 'Guardado'
    toastMessage.value = `Datos guardados: ${modalData.name}`
    toastVariant.value = 'success'
    toastShow.value = true

    showModal.value = false
    modalData.name = ''

    setTimeout(() => {
      toastShow.value = false
    }, 3000)
  } else {
    toastTitle.value = 'Error'
    toastMessage.value = 'Por favor ingresa un nombre'
    toastVariant.value = 'danger'
    toastShow.value = true

    setTimeout(() => {
      toastShow.value = false
    }, 3000)
  }
}
</script>

<style scoped>
.bootstrap-view {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.card {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15) !important;
}

.display-4 {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>