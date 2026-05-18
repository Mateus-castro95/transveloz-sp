<template>
  <section class="coverage-section section-py" id="cobertura">
    <div class="container-xl">
      <div class="coverage-section__inner">
        <div class="coverage-section__content">
          <div class="section-label">
            <IconMapPin :size="14" />
            Cobertura Nacional
          </div>
          <h2 class="coverage-section__title">
            Presente em<br />
            <span class="gradient-text">todo o Brasil</span>
          </h2>
          <p class="coverage-section__desc">
            Com base em São Paulo e filiais estratégicas nos principais centros logísticos do país, cobrimos todos os 26 estados e o Distrito Federal.
          </p>

          <div class="coverage-section__regions">
            <div v-for="region in regions" :key="region.name" class="coverage-region">
              <div class="coverage-region__dot"></div>
              <div>
                <div class="coverage-region__name">{{ region.name }}</div>
                <div class="coverage-region__states">{{ region.states }}</div>
              </div>
            </div>
          </div>

          <div class="coverage-section__cta">
            <NuxtLink to="/areas-atendidas" class="btn btn-primary">
              Ver todas as áreas
              <IconArrowRight :size="16" />
            </NuxtLink>
            <NuxtLink to="/contato" class="btn btn-outline">
              Consultar prazo
            </NuxtLink>
          </div>
        </div>

        <div class="coverage-section__map">
          <img src="/brazil-map.png" alt="Mapa de cobertura TransVeloz no Brasil" class="coverage-section__map-img animate-float" />
          <div class="coverage-section__map-glow" aria-hidden="true"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPin as IconMapPin } from 'lucide-vue-next'
import { ArrowRight as IconArrowRight } from 'lucide-vue-next'

const regions = [
  { name: 'Sudeste', states: 'SP · RJ · MG · ES' },
  { name: 'Sul', states: 'PR · SC · RS' },
  { name: 'Centro-Oeste', states: 'MS · MT · GO · DF' },
  { name: 'Nordeste', states: 'BA · PE · CE · MA e mais' },
  { name: 'Norte', states: 'AM · PA · RO · AC e mais' },
]
</script>

<style scoped>
.coverage-section {
  background: var(--navy-900);
  overflow: hidden;
  position: relative;
}

.coverage-section::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--blue-500), transparent);
}

.coverage-section__inner {
  display: grid; grid-template-columns: 1fr; gap: 4rem; align-items: center;
}

@media (min-width: 1024px) {
  .coverage-section__inner { grid-template-columns: 1fr 1fr; }
}

.coverage-section__title {
  font-size: clamp(1.8rem, 3vw, 3rem);
  color: white; margin-bottom: 1rem;
}

.coverage-section__desc {
  font-size: 1rem; color: rgba(255,255,255,0.55); line-height: 1.7; margin-bottom: 2rem;
}

.coverage-section__regions {
  display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 2rem;
}

.coverage-region {
  display: flex; align-items: flex-start; gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 12px;
  transition: all 0.2s;
}

.coverage-region:hover {
  background: rgba(29,111,232,0.07);
  border-color: rgba(29,111,232,0.2);
}

.coverage-region__dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--cyan-400);
  flex-shrink: 0; margin-top: 4px;
  box-shadow: 0 0 8px rgba(34,211,238,0.5);
}

.coverage-region__name {
  font-family: var(--font-display); font-size: 0.9rem; font-weight: 700; color: white; margin-bottom: 0.15rem;
}

.coverage-region__states { font-size: 0.8rem; color: rgba(255,255,255,0.5); }

.coverage-section__cta { display: flex; gap: 1rem; flex-wrap: wrap; }

.coverage-section__map {
  position: relative; display: flex; align-items: center; justify-content: center;
}

.coverage-section__map-img {
  width: 100%; max-width: 520px; object-fit: contain; position: relative; z-index: 1;
  filter: drop-shadow(0 0 40px rgba(29,111,232,0.3));
}

.coverage-section__map-glow {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 60% 60% at 50% 50%, rgba(29,111,232,0.12), transparent);
  pointer-events: none;
}
</style>
