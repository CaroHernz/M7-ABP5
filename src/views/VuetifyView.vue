<template>
  <div class="vuetify-view">
    <v-app>
      <v-app-bar color="primary navbar">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Vuetify</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn variant="text" icon="mdi-magnify"></v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" location="left" temporary>
        <v-list>
          <v-list-item title="Link 1" value="link-1" prepend-icon="mdi-link"></v-list-item>
          <v-list-item title="Link 2" value="link-2" prepend-icon="mdi-link"></v-list-item>
          <v-list-item title="Link 3" value="link-3" prepend-icon="mdi-link"></v-list-item>
          <v-list-item title="Link 4" value="link-4" prepend-icon="mdi-link"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container class="">
          <v-card class="pa-6 mb-8" elevation="2">
            <v-card-title class="text-h3 text-primary">Vuetify</v-card-title>
            <v-card-subtitle class="text-h6 text-medium-emphasis">
              Material Design Framework para Vue.js
            </v-card-subtitle>
            <v-card-text class="text-body-1">
              Vuetify implementa Material Design de Google, ofreciendo componentes ricos 
              y un sistema de diseño consistente para aplicaciones Vue.js.
            </v-card-text>
            <v-card-text>
               Vuetify es un framework de componentes robusto que sigue los principios de Material Design. Proporciona una gran variedad de componentes y opciones de personalización.
            </v-card-text>
          </v-card>

          <v-card class="mb-8" elevation="2">
            <v-card-title class="text-h4">Ventajas y Desventajas</v-card-title>
            <v-card-text>
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">Ventajas</th>
                    <th class="text-left">Desventajas / Limitaciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in tableData" :key="index">
                    <td>
                      <div class="d-flex align-start mb-2">
                        <v-icon color="success" class="mr-2 mt-1">mdi-check-circle</v-icon>
                        <span>{{ item.ventaja }}</span>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex align-start mb-2">
                        <v-icon color="error" class="mr-2 mt-1">mdi-close-circle</v-icon>
                        <span>{{ item.desventaja }}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
          </v-card>

          <v-row class="mb-5">
            <v-col cols="12">
              <v-card elevation="2">
                <v-card-title class="text-h5">
                  <v-icon class="mr-2">mdi-bell</v-icon>
                  Alertas y Modal
                </v-card-title>
                <v-card-text>
                  <v-col cols="12" class="mb-4">

                    <v-alert type="success" class="mb-3">
                      <template v-slot:prepend>
                        <v-icon class="me-2">mdi-check-circle</v-icon>
                      </template>
                      <div>
                        <div class="text-h6 mb-1">¡Éxito!</div>
                        Esta es una alerta de éxito usando Vuetify.
                      </div>
                    </v-alert>

                    <v-alert type="info" variant="tonal" dismissible class="mb-3">
                      <template v-slot:prepend>
                        <v-icon class="me-2">mdi-information</v-icon>
                      </template>
                      Alerta informativa que se puede cerrar.
                    </v-alert>

                    <v-alert type="warning" class="mb-3">
                      <template v-slot:prepend>
                        <v-icon class="me-2">mdi-alert</v-icon>
                      </template>
                      Alerta de advertencia importante.
                    </v-alert>

                    <v-alert type="error" variant="outlined" class="mb-3">
                      <template v-slot:prepend>
                        <v-icon class="me-2">mdi-alert-circle</v-icon>
                      </template>
                      Alerta de error con borde.
                    </v-alert>
                  </v-col>

                  <v-col cols="12">
                    <v-btn color="primary" @click="showModal = true" class="me-2 mb-2">
                      <v-icon class="me-1">mdi-open-in-new</v-icon>
                      Abrir Modal
                    </v-btn>

                    <v-btn color="info" variant="outlined" @click="showToast" class="me-2 mb-2">
                      <v-icon class="me-1">mdi-bell</v-icon>
                      Mostrar Toast
                    </v-btn>

                    <v-btn color="success" @click="showSnackbar = true" class="me-2 mb-2">
                      <v-icon class="me-1">mdi-message</v-icon>
                      Mostrar Snackbar
                    </v-btn>

                    <v-btn color="warning" variant="outlined" @click="showDialog = true" class="mb-2">
                      <v-icon class="me-1">mdi-alert</v-icon>
                      Diálogo de Confirmación
                    </v-btn>
                  </v-col>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-row>
            <!-- Evaluación de Rendimiento -->
            <v-col cols="12" md="6">
              <v-card class="h-100" elevation="2">
                <v-img src="/RendimientoVuetify.png"
                  height="200"
                ></v-img>
                <v-card-title>Evaluación de Rendimiento</v-card-title>
                <v-card-text>
                  <v-progress-linear value="38" color="danger" height="20" class="mb-2">
                    <template v-slot:default="{ value }">
                      <strong>Rendimiento: 38%</strong>
                    </template>
                  </v-progress-linear>

                  <v-progress-linear value="78" color="warning" height="20" class="mb-2">
                    <template v-slot:default="{ value }">
                      <strong>Accesibilidad: 78%</strong>
                    </template>
                  </v-progress-linear>

                  <v-progress-linear value="96" color="success" height="20" class="mb-2">
                    <template v-slot:default="{ value }">
                      <strong>Recomendaciones: 96%</strong>
                    </template>
                  </v-progress-linear>

                  <v-progress-linear value="82" color="warning" height="20" class="mb-2">
                    <template v-slot:default="{ value }">
                      <strong>SEO: 82%</strong>
                    </template>
                  </v-progress-linear>
                </v-card-text>
                <v-card-text>
               Vuetify es ligeramente más rápido en comparación con los otros frameworks. Aunque tiene el Rendimiento más alto, su Accesibilidad es notablemente baja, lo que te obligará a corregir muchos issues manuales para cumplir con los estándares.
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-card elevation="2">
                <v-card-title>Formulario de Contacto</v-card-title>
                <v-card-text>
                  <v-form @submit.prevent="submitForm">
                    <v-text-field
                      v-model="form.name"
                      label="Nombre completo"
                      required
                      variant="outlined"
                      class="mb-4"
                    ></v-text-field>

                    <v-text-field
                      v-model="form.email"
                      label="Email"
                      type="email"
                      required
                      variant="outlined"
                      class="mb-4"
                    ></v-text-field>

                    <v-select
                      v-model="form.inquiry"
                      :items="inquiryOptions"
                      label="Tipo de consulta"
                      variant="outlined"
                      class="mb-4"
                    ></v-select>

                    <v-textarea
                      v-model="form.message"
                      label="Mensaje"
                      variant="outlined"
                      rows="3"
                      class="mb-4"
                    ></v-textarea>

                    <v-checkbox
                      v-model="form.newsletter"
                      label="Suscribirse al newsletter"
                      class="mb-4"
                    ></v-checkbox>

                    <v-btn type="submit" color="primary" size="large" block>
                      Enviar Mensaje
                    </v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
    <v-dialog v-model="showModal" max-width="600px">
      <v-card>
        <v-card-title class="text-h5">
          Modal de Vuetify
        </v-card-title>
        <v-card-text>
          <p>Este es un modal de ejemplo usando Vuetify. Puedes agregar cualquier contenido aquí.</p>
          
          <v-text-field
            v-model="modalData.name"
            label="Nombre en el modal"
            placeholder="Ingresa tu nombre"
            variant="outlined"
            class="mt-4"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" @click="showModal = false">
            Cancelar
          </v-btn>
          <v-btn color="primary" @click="saveModal">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="showDialog" max-width="400px">
      <v-card>
        <v-card-title class="text-h6">
          <v-icon color="warning" class="me-2">mdi-alert</v-icon>
          Confirmación
        </v-card-title>
        <v-card-text>
          ¿Estás seguro de que quieres realizar esta acción?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" @click="showDialog = false">
            Cancelar
          </v-btn>
          <v-btn color="primary" @click="confirmAction">
            Aceptar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="showSnackbar" :timeout="3000" color="success">
      <v-icon class="me-2">mdi-check</v-icon>
      ¡Acción completada exitosamente!
      <template v-slot:actions>
        <v-btn variant="text" @click="showSnackbar = false">
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const drawer = ref(false)
const loading = ref(false)
const showModal = ref(false)
const showDialog = ref(false)
const showSnackbar = ref(false)

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
  'Soporte técnico',
  'Ventas',
  'Consulta general'
]

const tableData = [
  {
    ventaja: 'Amplia gama de componentes (extensive range of components), incluyendo elementos avanzados como tablas de datos y wizards, lo que lo hace adecuado para aplicaciones complejas.',
    desventaja: 'Es considerado "pesado" (heavy). Tiene un tamaño de archivo mayor que Buefy.'
  },
  {
    ventaja: 'Altamente personalizable y ofrece amplias capacidades de tematización (theming) a través de su propio sistema Material Design.',
    desventaja: 'Curva de aprendizaje más pronunciada (steeper learning curve) debido a su adherencia a los principios de Material Design y la extensa gama de componentes.'
  },
  {
    ventaja: 'Gran comunidad y soporte activo de desarrolladores.',
    desventaja: 'La migración de Vuetify 2 a Vuetify 3 es considerada "masivamente impráctica" o "súper dolorosa" debido a la deprecación de componentes y cambios en las directivas y la API (ej., value se convierte en modelValue), a menudo requiriendo reescritura.'
  },
  {
    ventaja: 'Compatible con SSR e integración con Nuxt.js.',
    desventaja: 'El rendimiento se sitúa en el rango medio en comparación con Buefy (más rápido) y BootstrapVue (más lento).'
  }
]

const submitForm = () => {
  alert('Formulario enviado: ' + JSON.stringify(form))
}
const showToast = () => {
  showSnackbar.value = true
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

const confirmAction = () => {
  alert('¡Acción confirmada!')
  showDialog.value = false
}
</script>

<style scoped>
.vuetify-view {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}
.navbar {
  position: relative !important;
}

.d-flex.align-start {
  align-items: flex-start;
}
</style>