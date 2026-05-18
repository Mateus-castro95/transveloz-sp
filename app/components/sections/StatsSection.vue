<template>
  <section class="stats-section section-py">
    <!-- Marquee de parceiros -->
    <div class="stats-section__marquee-wrap" aria-hidden="true">
      <div class="stats-section__marquee animate-marquee">
        <span v-for="p in [...partners, ...partners]" :key="p + Math.random()" class="stats-section__partner">
          {{ p }}
        </span>
      </div>
    </div>

    <div class="container-xl">
      <div class="stats-section__grid">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="stats-section__item"
          :style="`animation-delay: ${i * 0.1}s`"
        >
          <div class="stats-section__value">
            <span class="gradient-text">{{ stat.value }}</span>
          </div>
          <div class="stats-section__label">{{ stat.label }}</div>
          <div class="stats-section__desc">{{ stat.desc }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '+20 anos', label: 'De Experiência', desc: 'Solidez e confiança construídas ao longo de duas décadas' },
  { value: '2.500+', label: 'Clientes Ativos', desc: 'Empresas de todos os portes confiam na TransVeloz' },
  { value: '450+', label: 'Veículos na Frota', desc: 'Frota moderna com rastreamento 24h por satélite' },
  { value: '26', label: 'Estados Atendidos', desc: 'Cobertura completa por todo o território nacional' },
  { value: '98,7%', label: 'Pontualidade', desc: 'Índice de entregas realizadas no prazo acordado' },
  { value: '5M+', label: 'Entregas Realizadas', desc: 'Cargas transportadas com segurança e eficiência' },
]

const partners = [
  'Ambev', 'Nestlé', 'Magazine Luiza', 'Boticário', 'Natura', 'Embraer',
  'Votorantim', 'JBS', 'BRF', 'Suzano', 'Gerdau', 'Whirlpool',
]
</script>

<style scoped>
.stats-section {
  background: var(--navy-900);
  border-top: 1px solid rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  position: relative;
  overflow: hidden;
}

.stats-section__marquee-wrap {
  overflow: hidden;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  padding-block: 1rem;
  margin-bottom: 4rem;
  -webkit-mask-image: linear-gradient(90deg, transparent, black 15%, black 85%, transparent);
  mask-image: linear-gradient(90deg, transparent, black 15%, black 85%, transparent);
}

.stats-section__marquee {
  display: flex;
  gap: 3rem;
  white-space: nowrap;
  width: max-content;
}

.stats-section__partner {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.2);
  transition: color 0.2s;
}

.stats-section__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
}

@media (min-width: 640px) {
  .stats-section__grid { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1024px) {
  .stats-section__grid { grid-template-columns: repeat(6, 1fr); }
}

.stats-section__item {
  padding: 2rem 1.5rem;
  text-align: center;
  position: relative;
  animation: fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) both;
}

.stats-section__item::after {
  content: '';
  position: absolute;
  right: 0; top: 20%; bottom: 20%;
  width: 1px;
  background: rgba(255,255,255,0.06);
}

.stats-section__item:last-child::after { display: none; }

.stats-section__value {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.1;
  margin-bottom: 0.5rem;
}

.stats-section__label {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.35rem;
  letter-spacing: 0.02em;
}

.stats-section__desc {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.4);
  line-height: 1.5;
}
</style>
