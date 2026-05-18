<template>
  <section class="services-section section-py" id="servicos">
    <div class="container-xl">
      <!-- Header -->
      <div class="services-section__header">
        <div class="section-label">
          <IconPackage :size="14" />
          Nossos Serviços
        </div>
        <h2 class="services-section__title">
          Soluções completas para<br />
          <span class="gradient-text">cada necessidade logística</span>
        </h2>
        <p class="services-section__desc">
          Do transporte avulso à logística integrada, temos o serviço certo para o seu negócio crescer com eficiência e segurança.
        </p>
      </div>

      <!-- Grid -->
      <div class="services-section__grid">
        <article
          v-for="(service, i) in services"
          :key="service.title"
          class="service-card"
          :class="{ 'service-card--featured': service.featured }"
          :style="`animation-delay: ${i * 0.08}s`"
        >
          <div class="service-card__icon-wrap">
            <component :is="service.icon" :size="28" :color="service.featured ? '#22d3ee' : 'var(--blue-400)'" />
          </div>
          <h3 class="service-card__title">{{ service.title }}</h3>
          <p class="service-card__desc">{{ service.desc }}</p>
          <ul class="service-card__features">
            <li v-for="f in service.features" :key="f">
              <IconCheck :size="13" color="var(--cyan-400)" />
              {{ f }}
            </li>
          </ul>
          <NuxtLink to="/servicos" class="service-card__link">
            Saiba mais
            <IconArrowRight :size="16" />
          </NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Package as IconPackage } from 'lucide-vue-next'
import { Truck as IconTruck } from 'lucide-vue-next'
import { Activity as IconActivity } from 'lucide-vue-next'
import { Zap as IconZap } from 'lucide-vue-next'
import { Shield as IconShield } from 'lucide-vue-next'
import { Monitor as IconMonitor } from 'lucide-vue-next'
import { MapPin as IconMapPin } from 'lucide-vue-next'
import { Check as IconCheck } from 'lucide-vue-next'
import { ArrowRight as IconArrowRight } from 'lucide-vue-next'

const services = [
  {
    icon: IconTruck,
    title: 'Transporte Rodoviário',
    desc: 'Transporte de cargas completas (FTL) com frota própria rastreada, para todo o Brasil com pontualidade garantida.',
    features: ['Carga fechada (FTL)', 'Rastreamento em tempo real', 'Seguro total incluído'],
    featured: false,
  },
  {
    icon: IconPackage,
    title: 'Carga Fracionada',
    desc: 'Otimize custos enviando apenas o que precisa. Compartilhamos o caminhão e você paga só pelo seu espaço.',
    features: ['Menor custo por envio', 'Coleta na sua empresa', 'Entrega porta a porta'],
    featured: true,
  },
  {
    icon: IconZap,
    title: 'Carga Expressa',
    desc: 'Para quando o tempo é crítico. Entregas prioritárias com prazos reduzidos e gestão dedicada da carga.',
    features: ['Prazos reduzidos', 'Gestão dedicada', 'Atendimento prioritário'],
    featured: false,
  },
  {
    icon: IconMonitor,
    title: 'Logística Empresarial',
    desc: 'Soluções integradas de supply chain para empresas que precisam de um parceiro logístico de alto nível.',
    features: ['Integração sistêmica', 'Dashboard exclusivo', 'Relatórios gerenciais'],
    featured: false,
  },
  {
    icon: IconMapPin,
    title: 'Distribuição Nacional',
    desc: 'Redes de distribuição estruturadas para atingir pontos de venda em todo o território nacional.',
    features: ['Roteirização inteligente', 'Entregas multi-destino', 'Gestão de rotas'],
    featured: false,
  },
  {
    icon: IconActivity,
    title: 'Rastreamento em Tempo Real',
    desc: 'Visibilidade total da sua carga com tecnologia IoT. Saiba a localização exata de cada entrega.',
    features: ['GPS em tempo real', 'Alertas automáticos', 'App exclusivo'],
    featured: false,
  },
]
</script>

<style scoped>
.services-section {
  background: var(--navy-950);
}

.services-section__header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.services-section__title {
  font-size: clamp(1.8rem, 3.5vw, 3rem);
  color: white;
  margin-bottom: 1rem;
}

.services-section__desc {
  color: rgba(255,255,255,0.55);
  font-size: 1.05rem;
  line-height: 1.7;
}

.services-section__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .services-section__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .services-section__grid { grid-template-columns: repeat(3, 1fr); }
}

/* Service Card */
.service-card {
  position: relative;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
  animation: fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) both;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(29,111,232,0.05), transparent);
  opacity: 0;
  transition: opacity 0.35s;
}

.service-card:hover {
  border-color: rgba(29,111,232,0.3);
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.3), 0 0 40px rgba(29,111,232,0.1);
}

.service-card:hover::before { opacity: 1; }

.service-card--featured {
  background: rgba(29,111,232,0.06);
  border-color: rgba(29,111,232,0.25);
}

.service-card--featured::after {
  content: 'Mais Popular';
  position: absolute;
  top: 1.25rem; right: 1.25rem;
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cyan-400);
  background: rgba(34,211,238,0.1);
  border: 1px solid rgba(34,211,238,0.2);
  padding: 0.3rem 0.7rem;
  border-radius: 100px;
}

.service-card__icon-wrap {
  width: 56px; height: 56px;
  background: rgba(29,111,232,0.1);
  border: 1px solid rgba(29,111,232,0.2);
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}

.service-card--featured .service-card__icon-wrap {
  background: rgba(34,211,238,0.1);
  border-color: rgba(34,211,238,0.2);
}

.service-card__title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: white;
}

.service-card__desc {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.65;
  flex: 1;
}

.service-card__features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.service-card__features li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.6);
}

.service-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--blue-400);
  transition: all 0.2s;
  margin-top: 0.5rem;
}

.service-card__link:hover {
  color: var(--cyan-400);
  gap: 0.65rem;
}
</style>
