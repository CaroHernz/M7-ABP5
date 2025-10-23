<template>
  <div class="element-view">
    <el-header class="element-header">
      <el-menu mode="horizontal" background-color="#409EFF" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1" class="element-brand">
          <el-icon><Star /></el-icon>
          <span>Element Plus</span>
        </el-menu-item>
        
        <div style="flex-grow: 1"></div>
        
        <el-menu-item index="2">Link 1</el-menu-item>
        <el-menu-item index="3">Link 2</el-menu-item>
        <el-menu-item index="4">Link 3</el-menu-item>
        <el-menu-item index="5">Link 4</el-menu-item>
        
        <div style="flex-grow: 1"></div>
        
        <el-button-group class="element-buttons">
          <el-button type="primary" plain size="small">
            <el-icon><User /></el-icon>
            Login
          </el-button>
          <el-button type="primary" size="small">
            <el-icon><Plus /></el-icon>
            Registro
          </el-button>
        </el-button-group>
      </el-menu>
    </el-header>

    <el-main>
      <div class="element-container">
        <!-- Header -->
        <el-card class="element-card">
          <template #header>
            <div class="element-card-header">
              <h1>Element Plus</h1>
            </div>
          </template>
          <h2>Component Library para Vue 3</h2>
          <p>Element Plus es la evolución de Element UI, diseñada específicamente para Vue 3. Ofrece componentes empresariales de alta calidad con diseño elegante y moderno.</p>
          <p>Como sucesor de Element UI, Element Plus aprovecha la Composition API de Vue 3 y ofrece mejor soporte para TypeScript, mejor rendimiento y una estética más moderna.</p>
        </el-card>

        <el-card class="element-card">
          <template #header>
            <h2>Ventajas y Desventajas</h2>
          </template>
          <el-table :data="tableData" stripe>
            <el-table-column prop="ventaja" label="Ventajas">
              <template #default="scope">
                <div style="display: flex; align-items: start; padding: 8px 0">
                  <el-icon color="#67C23A"><Check /></el-icon>
                  <span style="margin-left: 8px">{{ scope.row.ventaja }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="desventaja" label="Desventajas / Limitaciones">
              <template #default="scope">
                <div style="display: flex; align-items: start; padding: 8px 0">
                  <el-icon color="#F56C6C"><Close /></el-icon>
                  <span style="margin-left: 8px">{{ scope.row.desventaja }}</span>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-card>

        <el-card class="element-card">
          <template #header>
            <div style="display: flex; align-items: center">
              <el-icon><Bell /></el-icon>
              <span style="margin-left: 8px">Alertas y Modal</span>
            </div>
          </template>

          <div style="margin-bottom: 16px">
            <el-alert
              title="¡Éxito!"
              type="success"
              description="Esta es una alerta de éxito usando Element Plus."
              show-icon
              closable
              style="margin-bottom: 8px"
            />
            <el-alert
              title="Información"
              type="info"
              description="Alerta informativa que se puede cerrar."
              show-icon
              closable
              style="margin-bottom: 8px"
            />
            <el-alert
              title="Advertencia"
              type="warning"
              description="Alerta de advertencia importante."
              show-icon
              closable
              style="margin-bottom: 8px"
            />
            <el-alert
              title="Error"
              type="error"
              description="Alerta de error con información detallada."
              show-icon
              closable
            />
          </div>

          <div>
            <el-button type="success" @click="showAlert">
              <el-icon><Check /></el-icon>
              Mostrar Alerta
            </el-button>
            <el-button type="primary" @click="showModal = true">
              <el-icon><View /></el-icon>
              Abrir Modal
            </el-button>
            <el-button type="info" plain @click="showNotification">
              <el-icon><Bell /></el-icon>
              Mostrar Notificación
            </el-button>
          </div>
        </el-card>


        <el-row :gutter="20">
          <!-- Evaluación de Rendimiento -->
          <el-col :span="12">
            <el-card class="element-card">
              <template #header>
                <h3>Evaluación de Rendimiento</h3>
              </template>
              <el-image 
                src="/RendimientoElement.png"
                fit="cover"
              />
              <div style="margin-top: 16px">
                <div style="margin-bottom: 16px">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 8px">
                    <span>Rendimiento</span>
                    <span>29%</span>
                  </div>
                  <el-progress :percentage="29" color="#ff0000" />
                </div>
                <div style="margin-bottom: 16px">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 8px">
                    <span>Accesibilidad</span>
                    <span>81%</span>
                  </div>
                  <el-progress :percentage="81" color="#E6A23C" />
                </div>
                <div style="margin-bottom: 16px">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 8px">
                    <span>Recomendaciones</span>
                    <span>96%</span>
                  </div>
                  <el-progress :percentage="96" color="#67C23A" />
                </div>
                <div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 8px">
                    <span>SEO</span>
                    <span>75%</span>
                  </div>
                  <el-progress :percentage="75" color="#E6A23C" />
                </div>
              </div>
              <template #footer>
                <p>Element Plus tiene el puntaje SEO más bajo, lo que puede ser un problema si la aplicación depende de la visibilidad en motores de búsqueda. </p>
              </template>
            </el-card>
          </el-col>

          <el-col :span="12">
            <el-card class="element-card">
              <template #header>
                <h3>Formulario de Contacto</h3>
              </template>
              <el-form :model="form" @submit.prevent="submitForm" label-width="120px">
                <el-form-item label="Nombre completo" required>
                  <el-input v-model="form.name" placeholder="Ingresa tu nombre" />
                </el-form-item>

                <el-form-item label="Email" required>
                  <el-input v-model="form.email" type="email" placeholder="tu@email.com" />
                </el-form-item>

                <el-form-item label="Tipo de consulta" required>
                  <el-select v-model="form.inquiry" placeholder="Selecciona una opción" style="width: 100%">
                    <el-option
                      v-for="item in inquiryOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>

                <el-form-item label="Mensaje" required>
                  <el-input
                    v-model="form.message"
                    type="textarea"
                    :rows="3"
                    placeholder="Escribe tu mensaje"
                  />
                </el-form-item>

                <el-form-item>
                  <el-checkbox v-model="form.newsletter">Suscribirse al newsletter</el-checkbox>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" native-type="submit" style="width: 100%">Enviar Mensaje</el-button>
                </el-form-item>
              </el-form>
            </el-card>
          </el-col>
        </el-row>

      </div>
    </el-main>

    <el-dialog v-model="showModal" title="Modal de Element Plus" width="600px">
      <p>Este es un modal de ejemplo usando Element Plus. Puedes agregar cualquier contenido aquí.</p>
      <el-form :model="modalData" style="margin-top: 16px">
        <el-form-item label="Nombre en el modal">
          <el-input v-model="modalData.name" placeholder="Ingresa tu nombre" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showModal = false">Cancelar</el-button>
        <el-button type="primary" @click="saveModal">Guardar</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { ElHeader,ElMenu,ElMenuItem,ElButton,ElButtonGroup,ElMain,ElCard,ElTable,ElTableColumn,ElIcon,ElImage,ElProgress,ElForm,ElFormItem,ElInput,ElSelect,ElOption,ElCheckbox,ElAlert,ElDialog,ElRow,ElCol
} from 'element-plus'
import { Star, User, Plus, Check, Close, Bell, View } from '@element-plus/icons-vue'

const showModal = ref(false)
const form = reactive({
  name: '',
  email: '',
  inquiry: '',
  message: '',
  newsletter: false
})
const modalData = reactive({ name: '' })

const inquiryOptions = [
  { value: 'support', label: 'Soporte técnico' },
  { value: 'sales', label: 'Ventas' },
  { value: 'general', label: 'Consulta general' }
]

const tableData = [
  {
    ventaja: 'Element Plus está diseñado específicamente para Vue 3, aprovechando la Composition API y ofreciendo soporte mejorado para TypeScript.',
    desventaja: 'Element UI (la versión original) no estaba enfocado en el desarrollo móvil y carecía de responsiveness en WebViews móviles.'
  },
  {
    ventaja: 'Element Plus ofrece una variedad de componentes más amplia y mejoras respecto a Element UI, facilitando interfaces complejas sin recurrir a terceros.',
    desventaja: 'Si se mantiene una aplicación en Vue 2, se debe usar Element UI, pero las actualizaciones futuras se centrarán en Element Plus.'
  },
  {
    ventaja: 'Diseño moderno y estética mejorada en Element Plus, con amplias opciones de personalización a través de variables SCSS y CSS.',
    desventaja: 'A pesar de la amplia variedad de componentes, Element UI podría no rendir tan bien como Element Plus en aplicaciones grandes debido a las limitaciones del sistema de reactividad de Vue 2.'
  },
  {
    ventaja: 'Curva de aprendizaje suave y API intuitiva (Element UI).',
    desventaja: 'Element Plus es la opción a futuro, ya que ofrece mejor rendimiento al estar optimizado para Vue 3.'
  }
]

const showAlert = () => {
  ElMessage.success('¡Esta es una alerta JavaScript usando Element Plus!')
}

const showNotification = () => {
  ElMessage.info('Esta es una notificación usando Element Plus.')
}

const submitForm = () => {
  ElMessage.success(`Formulario enviado: ${form.name} - ${form.email}`)
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
    ElMessage.success(`Datos guardados: ${modalData.name}`)
    showModal.value = false
    modalData.name = ''
  } else {
    ElMessage.error('Por favor ingresa un nombre')
  }
}
</script>

<style scoped>
.element-view {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}
.element-header {
  padding: 0;
}

.element-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.element-card {
  margin-bottom: 20px;
}

.element-card-header h1 {
  margin: 0;
  color: #409EFF;
  font-size: 2rem;
}

.element-brand {
  font-size: 1.25rem;
  font-weight: bold;
}

.element-buttons {
  margin-left: 16px;
}
</style>