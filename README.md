<div align=center>

# Exploración y Comparación de Librerías UI para Vue
### Módulo 7 | Actividad Práctica 5

</div>

## 📋 Descripción del Proyecto

Este proyecto forma parte de una actividad académica que tiene como objetivo explorar y comparar diferentes librerías de interfaces de usuario (UI) para Vue.js. La implementación incluye ejemplos prácticos de cuatro librerías populares, demostrando sus características, ventajas y desventajas en un contexto real.

## 🚀 Librerías Implementadas

### 1. **BootstrapVue** ✅
- **Estado**: Completamente implementado
- **Características**: Componentes basados en Bootstrap v5
- **Compatibilidad**: Vue 3
- **Enfoque**: Diseño responsivo y accesibilidad integrada

### 2. **Vuetify** ✅
- **Estado**: Completamente implementado
- **Características**: Material Design implementation
- **Compatibilidad**: Vue 3
- **Enfoque**: Componentes ricos y sistema de theming

### 3. **Bulma CSS** (Sustituto de Buefy) ✅
- **Estado**: Implementado como alternativa
- **Razón**: Buefy no es compatible con Vue 3
- **Enfoque**: Framework CSS minimalista con componentes Vue nativos

### 4. **Element Plus** ✅
- **Estado**: Completamente implementado
- **Características**: Diseño empresarial moderno
- **Compatibilidad**: Vue 3 nativo
- **Enfoque**: Componentes profesionales y TypeScript

## 🛠️ Estructura del Proyecto

```
src/views/
├── BootstrapView.vue      # Implementación con BootstrapVue
├── VuetifyView.vue        # Implementación con Vuetify
├── BulmaView.vue          # Implementación con Bulma CSS
└── ElementView.vue        # Implementación con Element Plus
```

## 📊 Componentes Comunes Implementados

Cada vista incluye:

- **Navbar** personalizado con la librería correspondiente
- **Header** con título y descripción
- **Tabla comparativa** de ventajas y desventajas
- **Card de evaluación** de rendimiento
- **Formulario** de contacto funcional
- **Sistema de alertas** y modales
- **Componentes interactivos** específicos de cada librería

## 🔍 Hallazgos y Comparativa

### ⚡ Rendimiento
- **Bulma**: Mejor rendimiento general y tamaño reducido
- **BootstrapVue**: Balance entre features y performance
- **Vuetify**: Componentes ricos pero mayor tamaño
- **Element Plus**: Optimizado para Vue 3 y TypeScript

### 🎨 Personalización
- **Vuetify**: Sistema de theming más completo
- **Element Plus**: Variables SCSS y CSS
- **BootstrapVue**: Personalización mediante variables Sass
- **Bulma**: Flexibilidad total con CSS puro

### 📱 Experiencia de Desarrollo
- **BootstrapVue**: Curva de aprendizaje suave para desarrolladores familiarizados con Bootstrap
- **Vuetify**: Documentación excelente pero curva de aprendizaje más pronunciada
- **Element Plus**: API intuitiva y excelente soporte para TypeScript
- **Bulma**: Máxima flexibilidad pero requiere más código personalizado

## 🚫 Limitaciones Identificadas

### Buefy
- ❌ **No compatible con Vue 3**
- ❌ Desarrollo estancado
- ❌ Migración a Vue 3 no disponible

### Vuetify
- ⚠️ Migración de v2 a v3 compleja
- ⚠️ Bundle size considerable

### BootstrapVue
- ⚠️ Dependencia de Bootstrap
- ⚠️ Algunas limitaciones de personalización

## 🏆 Recomendaciones

### Para proyectos nuevos en Vue 3:
1. **Element Plus** - Mejor soporte Vue 3 y TypeScript
2. **Vuetify** - Si se requiere Material Design
3. **BootstrapVue** - Para equipos familiarizados con Bootstrap

### Para proyectos existentes:
- **Vue 2**: Considerar Buefy o Element UI
- **Vue 3**: Migrar a Element Plus o Vuetify 3

## 🛠️ Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

## 📝 Conclusiones

Esta actividad demostró la importancia de evaluar múltiples factores al elegir una librería UI: compatibilidad con la versión de Vue, curva de aprendizaje, personalización, rendimiento y mantenimiento a largo plazo. La elección final debe basarse en los requisitos específicos del proyecto y la experiencia del equipo de desarrollo.

### Responsables
<h4 align="center"> 
  <a href="https://github.com/CaroHernz">Carolina Hernández</a> | 
	<a href="https://github.com/gurrutia15">Gonzalo Urrutia</a> | 
	<a href="https://github.com/jlmansilla">Juan Luis Mansilla</a> | 
	<a href="https://github.com/lcarrilloq">Luis Carrillo</a> | 
</h4>
