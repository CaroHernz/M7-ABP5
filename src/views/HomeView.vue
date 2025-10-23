<template>
  <div class="home">
    <h1>Comparación de Librerías UI para Vue</h1>
    <p>Selecciona una librería para ver su implementación:</p>
    <div class="library-grid">

      <router-link to="/bootstrap" class="library-card">
        <BCard title="BootstrapVue" img-src="https://miro.medium.com/v2/1*qAnLThbsHOYpgnAHcD8Mfw.jpeg"
          img-alt="BootstrapVue Card" img-top class="home-card h-100 shadow-sm"
          subtitle="La integración ARIA y Mobile-First de Bootstrap">
          <BCardText>
            BootstrapVue permite construir proyectos responsivos y mobile-first usando Vue.js y la popular librería CSS
            Bootstrap v4. Esta librería es apreciada por su facilidad de uso y porque ofrece un marcado de accesibilidad
            WAI-ARIA extenso y automatizado. La librería es modular y no requiere jQuery. Si estás utilizando Vue 3, la
            recomendación actual es migrar a BootstrapVueNext, que soporta Bootstrap v5.
          </BCardText>
          <template #footer>
            <BButton variant="primary" class="py-2">
              <i class="fas fa-eye me-1"></i>Ver Más
            </BButton>
          </template>
        </BCard>
      </router-link>

      <router-link to="/vuetify" class="library-card">
        <v-card class="h-100 home-card">
          <v-img
            src="https://coderomeos.org/storage/uploads/images/posts/vuetify-material-component-framework-5a8dc1db11384.png"
            cover></v-img>
          <v-card-title>Vuetify</v-card-title>
          <v-card-subtitle>Material Design Robusto y Completo</v-card-subtitle>
          <v-card-text>
            Vuetify es un framework de componentes para Vue.js (principalmente Vue 2) que se adhiere a los principios de
            Material Design de Google. Ofrece un conjunto de componentes "ricos" y extensos, siendo altamente
            personalizable a
            través de su propio sistema de theming. Es una herramienta ideal si buscas consistencia en el diseño y una
            comunidad activa. Sin embargo, ten en cuenta que la migración de la versión 2 a la 3 ha sido catalogada como
            "masivamente impráctica" debido a los cambios significativos en la API
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" variant="outlined">Ver más</v-btn>
          </v-card-actions>
        </v-card>
      </router-link>

      <router-link to="/buefy" class="library-card">
        <div class="card home-card h-100">
          <header class="card-header">
            <p class="title has-text-primary">Buefy</p>


          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://res.cloudinary.com/vuejsprojects/image/upload/c_scale,f_auto,q_auto,w_auto/v1/post/buefy.jpg"
                alt="Buefy Card" class="w-100" />
            </figure>
          </div>
          <div class="card-content">
            <p class="subtitle ">Diseño Minimalista Basado en Bulma</p>

            <p class="">
              Buefy se caracteriza por ser una librería UI ligera y minimalista que utiliza el framework CSS Bulma. Su
              enfoque
              minimalista se traduce en un tamaño de archivo menor y un mejor rendimiento en métricas de velocidad
              comparado
              con Vuetify y BootstrapVue. No obstante, es importante saber que la librería original fue construida con
              poca o
              ninguna accesibilidad.
            </p>
          </div>
          <footer class="card-footer">
            <a href="/buefy" class="card-footer-item">Ver más</a>
          </footer>
        </div>
      </router-link>

      <router-link to="/element" class="library-card">
        <el-card class="box-card h-100">
          <template #header>
            <div class="card-header">
              <el-text size="large" type="primary"><p class="h3"><strong>Element Plus</strong></p>
              </el-text>              
            </div>
          </template>
          <div>
            <el-image src="https://img.thosefree.com/wp-content/uploads/2021/03/Element-Plus-cover.jpg&720x405.jpg"
              fit="cover" style="width: 100%; border-radius: 4px;"></el-image>
              <el-text size="large">La Solución Empresarial Optimizada para Vue 3</el-text>
            <p style="margin-top: 15px;">
              Element Plus es la evolución de Element UI, diseñada específicamente para Vue 3. Este framework es ideal
              para
              aplicaciones de nivel empresarial o de escritorio, ya que proporciona un conjunto de componentes
              profesionales y
              estables. A diferencia de su predecesor (Element UI), Element Plus se beneficia de la Composition API y
              TypeScript, ofreciendo mejor rendimiento y una estética más moderna. Es una opción "a prueba de futuro"
              para
              nuevos proyectos en Vue 3
            </p>
          </div>
          <template #footer>
            <el-button type="primary" size="large" round>Ver más</el-button>
          </template>
        </el-card>
      </router-link>

    </div>
  </div>
</template>

<style scoped>
.home {
  background-color: white;
  margin: 2rem;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  max-width: 768px;
}

.library-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.library-card {
  text-decoration: none;
  transition: all 0.3s ease;
}

.library-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.h-100 {
  height: 100%;
}
</style>