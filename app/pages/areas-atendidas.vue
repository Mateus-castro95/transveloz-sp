<template>
  <div class="page-areas">
    <section class="page-hero">
      <div class="page-hero__bg" aria-hidden="true">
        <div class="page-hero__grid"></div>
        <div class="page-hero__orb"></div>
      </div>
      <div class="container-xl page-hero__content">
        <div class="section-label"><IconMapPin :size="14" />Cobertura Nacional</div>
        <h1 class="page-hero__title">
          Atendemos em<br />
          <span class="gradient-text">todo o Brasil</span>
        </h1>
        <p class="page-hero__desc">
          26 estados e o Distrito Federal cobertos com rotas otimizadas e filiais estratégicas. Saiba os prazos para cada destino.
        </p>
      </div>
    </section>

    <!-- Map + regions -->
    <section class="section-py">
      <div class="container-xl">
        <div class="areas__layout">
          <div class="areas__map-side">
            <img src="/brazil-map.png" alt="Mapa de cobertura TransVeloz" class="areas__map-img animate-float" />
          </div>

          <div class="areas__regions">
            <div v-for="region in regions" :key="region.name" class="areas__region-card glass">
              <div class="areas__region-header">
                <div class="areas__region-dot"></div>
                <h2 class="areas__region-name">{{ region.name }}</h2>
                <span class="areas__region-badge">{{ region.states.length }} estados</span>
              </div>
              <div class="areas__states-grid">
                <div v-for="state in region.states" :key="state.uf" class="areas__state">
                  <span class="areas__state-uf">{{ state.uf }}</span>
                  <span class="areas__state-name">{{ state.name }}</span>
                  <span class="areas__state-prazo">{{ state.prazo }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import { MapPin as IconMapPin } from 'lucide-vue-next'
import CtaSection from '~/components/sections/CtaSection.vue'

definePageMeta({ layout: 'default' })
useSeoMeta({
  title: 'Áreas Atendidas — TransVeloz Logística | Cobertura Nacional',
  description: 'A TransVeloz atende todos os 26 estados brasileiros e o DF. Veja os prazos de entrega para cada região do Brasil.',
})

const regions = [
  {
    name: 'Sudeste',
    states: [
      { uf: 'SP', name: 'São Paulo', prazo: '1-2 dias' },
      { uf: 'RJ', name: 'Rio de Janeiro', prazo: '2-3 dias' },
      { uf: 'MG', name: 'Minas Gerais', prazo: '2-3 dias' },
      { uf: 'ES', name: 'Espírito Santo', prazo: '3-4 dias' },
    ],
  },
  {
    name: 'Sul',
    states: [
      { uf: 'PR', name: 'Paraná', prazo: '2-3 dias' },
      { uf: 'SC', name: 'Santa Catarina', prazo: '2-3 dias' },
      { uf: 'RS', name: 'Rio Grande do Sul', prazo: '3-4 dias' },
    ],
  },
  {
    name: 'Centro-Oeste',
    states: [
      { uf: 'MS', name: 'Mato Grosso do Sul', prazo: '3-4 dias' },
      { uf: 'MT', name: 'Mato Grosso', prazo: '4-5 dias' },
      { uf: 'GO', name: 'Goiás', prazo: '3-4 dias' },
      { uf: 'DF', name: 'Distrito Federal', prazo: '3-4 dias' },
    ],
  },
  {
    name: 'Nordeste',
    states: [
      { uf: 'BA', name: 'Bahia', prazo: '4-5 dias' },
      { uf: 'PE', name: 'Pernambuco', prazo: '5-6 dias' },
      { uf: 'CE', name: 'Ceará', prazo: '5-6 dias' },
      { uf: 'MA', name: 'Maranhão', prazo: '5-7 dias' },
      { uf: 'PI', name: 'Piauí', prazo: '6-7 dias' },
      { uf: 'RN', name: 'Rio Grande do Norte', prazo: '6-7 dias' },
      { uf: 'PB', name: 'Paraíba', prazo: '6-7 dias' },
      { uf: 'AL', name: 'Alagoas', prazo: '6-7 dias' },
      { uf: 'SE', name: 'Sergipe', prazo: '5-6 dias' },
    ],
  },
  {
    name: 'Norte',
    states: [
      { uf: 'AM', name: 'Amazonas', prazo: '7-10 dias' },
      { uf: 'PA', name: 'Pará', prazo: '6-8 dias' },
      { uf: 'RO', name: 'Rondônia', prazo: '6-7 dias' },
      { uf: 'AC', name: 'Acre', prazo: '8-10 dias' },
      { uf: 'RR', name: 'Roraima', prazo: '8-10 dias' },
      { uf: 'AP', name: 'Amapá', prazo: '7-9 dias' },
      { uf: 'TO', name: 'Tocantins', prazo: '5-6 dias' },
    ],
  },
]
</script>

<style scoped>
.page-hero {
  position: relative; overflow: hidden; padding-top: 8rem; padding-bottom: 2rem;
  background: linear-gradient(180deg, var(--navy-900) 0%, var(--navy-950) 100%);
}

.page-hero__bg { position: absolute; inset: 0; z-index: 0; }

.page-hero__grid {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(29,111,232,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(29,111,232,0.05) 1px, transparent 1px);
  background-size: 60px 60px;
}

.page-hero__orb {
  position: absolute; top: -200px; right: -100px; width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(29,111,232,0.15), transparent 70%);
  filter: blur(60px);
}

.page-hero__content { position: relative; z-index: 1; max-width: 720px; }
.page-hero__title { font-size: clamp(2.2rem, 4.5vw, 4rem); color: white; margin-bottom: 1.25rem; }
.page-hero__desc { font-size: 1.1rem; color: rgba(255,255,255,0.6); line-height: 1.75; max-width: 600px; }

.areas__layout {
  display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: start;
}

@media (min-width: 1024px) {
  .areas__layout { grid-template-columns: 1fr 1.5fr; }
}

.areas__map-img {
  width: 100%; object-fit: contain;
  filter: drop-shadow(0 0 40px rgba(29,111,232,0.3));
  position: sticky; top: 100px;
}

.areas__regions { display: flex; flex-direction: column; gap: 1.25rem; }

.areas__region-card { border-radius: 18px; padding: 1.5rem; }

.areas__region-header {
  display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;
}

.areas__region-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--cyan-400);
  box-shadow: 0 0 8px rgba(34,211,238,0.5);
  flex-shrink: 0;
}

.areas__region-name {
  font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: white; flex: 1;
}

.areas__region-badge {
  font-size: 0.72rem; font-weight: 600;
  background: rgba(29,111,232,0.15); color: var(--blue-300);
  border: 1px solid rgba(29,111,232,0.2);
  padding: 0.25rem 0.7rem; border-radius: 100px;
}

.areas__states-grid {
  display: flex; flex-direction: column; gap: 0.4rem;
}

.areas__state {
  display: grid; grid-template-columns: 40px 1fr auto;
  align-items: center; gap: 0.75rem;
  padding: 0.5rem 0.75rem; border-radius: 8px;
  transition: background 0.2s;
}

.areas__state:hover { background: rgba(255,255,255,0.04); }

.areas__state-uf {
  font-family: var(--font-display); font-size: 0.8rem; font-weight: 700;
  color: var(--cyan-400);
}

.areas__state-name { font-size: 0.85rem; color: rgba(255,255,255,0.65); }

.areas__state-prazo {
  font-size: 0.75rem; color: rgba(255,255,255,0.4);
  white-space: nowrap;
  background: rgba(255,255,255,0.04);
  padding: 0.2rem 0.5rem; border-radius: 6px;
}
</style>
