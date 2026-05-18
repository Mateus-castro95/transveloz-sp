<template>
  <div class="page-servicos">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="page-hero__bg" aria-hidden="true">
        <div class="page-hero__grid"></div>
        <div class="page-hero__orb"></div>
      </div>
      <div class="container-xl page-hero__content">
        <div class="section-label"><IconPackage :size="14" />Nossos Serviços</div>
        <h1 class="page-hero__title">
          Soluções logísticas<br />
          <span class="gradient-text">para cada desafio</span>
        </h1>
        <p class="page-hero__desc">
          Do transporte avulso à logística integrada, oferecemos modalidades flexíveis com tecnologia, segurança e prazos garantidos para empresas de todos os portes.
        </p>
      </div>
    </section>

    <!-- Serviços Detalhados -->
    <section class="section-py">
      <div class="container-xl">
        <div v-for="(service, i) in services" :key="service.title" class="servico-detail" :class="{ 'servico-detail--reverse': i % 2 !== 0 }">
          <div class="servico-detail__content">
            <div class="servico-detail__icon-wrap">
              <component :is="service.icon" :size="32" color="var(--cyan-400)" />
            </div>
            <h2 class="servico-detail__title">{{ service.title }}</h2>
            <p class="servico-detail__desc">{{ service.desc }}</p>
            <ul class="servico-detail__features">
              <li v-for="f in service.features" :key="f">
                <IconCheck :size="14" color="var(--cyan-400)" />
                {{ f }}
              </li>
            </ul>
            <NuxtLink to="/contato" class="btn btn-primary">
              Solicitar este serviço
              <IconArrowRight :size="16" />
            </NuxtLink>
          </div>
          <div class="servico-detail__visual glass">
            <div class="servico-detail__visual-icon">
              <component :is="service.icon" :size="80" color="rgba(29,111,232,0.2)" />
            </div>
            <div v-for="stat in service.stats" :key="stat.label" class="servico-detail__stat">
              <div class="servico-detail__stat-value gradient-text">{{ stat.value }}</div>
              <div class="servico-detail__stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import { Package as IconPackage } from 'lucide-vue-next'
import { Truck as IconTruck } from 'lucide-vue-next'
import { Activity as IconActivity } from 'lucide-vue-next'
import { Zap as IconZap } from 'lucide-vue-next'
import { Monitor as IconMonitor } from 'lucide-vue-next'
import { MapPin as IconMapPin } from 'lucide-vue-next'
import { Check as IconCheck } from 'lucide-vue-next'
import { ArrowRight as IconArrowRight } from 'lucide-vue-next'
import CtaSection from '~/components/sections/CtaSection.vue'

definePageMeta({ layout: 'default' })
useSeoMeta({
  title: 'Serviços — TransVeloz Logística | Transporte Rodoviário e Mais',
  description: 'Conheça todos os serviços da TransVeloz: transporte rodoviário, carga fracionada, expressa, logística empresarial e distribuição nacional.',
})

const services = [
  {
    icon: IconTruck,
    title: 'Transporte Rodoviário (FTL)',
    desc: 'Transporte de carga completa com frota própria rastreada. Ideal para cargas que ocupam o caminhão inteiro, garantindo máxima segurança e agilidade no transporte.',
    features: [
      'Veículos 0km com rastreamento 24h',
      'Motoristas treinados e habilitados',
      'CT-e emitido automaticamente',
      'Seguro de carga incluso',
      'Atendimento de emergência 24/7',
    ],
    stats: [{ value: '450+', label: 'Veículos' }, { value: '26', label: 'Estados' }],
  },
  {
    icon: IconPackage,
    title: 'Carga Fracionada (LTL)',
    desc: 'Envie apenas o que precisa e pague somente pelo espaço utilizado. A melhor solução para empresas com volumes menores que não justificam um caminhão exclusivo.',
    features: [
      'Sem mínimo de volume',
      'Coleta na sua empresa',
      'Entrega porta a porta',
      'Consolidação inteligente de cargas',
      'Até 30% de economia no frete',
    ],
    stats: [{ value: '-30%', label: 'Economia' }, { value: '24h', label: 'Coleta' }],
  },
  {
    icon: IconZap,
    title: 'Carga Expressa',
    desc: 'Para situações em que cada hora conta. Gerenciamento prioritário da sua carga com rotas otimizadas e equipe dedicada para garantir a entrega no menor prazo possível.',
    features: [
      'Prazo reduzido em até 50%',
      'Gestão dedicada por especialista',
      'Alertas de status em tempo real',
      'Disponível para todos os estados',
      'Opções de carga temperatura controlada',
    ],
    stats: [{ value: '-50%', label: 'Prazo' }, { value: '24/7', label: 'Suporte' }],
  },
  {
    icon: IconMonitor,
    title: 'Logística Empresarial',
    desc: 'Para empresas que precisam de um parceiro logístico estratégico. Integração com seus sistemas, gestão de estoque, relatórios gerenciais e otimização contínua da cadeia de suprimentos.',
    features: [
      'Integração via API ou EDI',
      'Dashboard executivo personalizado',
      'Relatórios de KPIs logísticos',
      'Gerente de conta exclusivo',
      'SLA contratual garantido',
    ],
    stats: [{ value: '99,2%', label: 'SLA médio' }, { value: 'API', label: 'Integração' }],
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
  position: absolute; top: -200px; right: -100px;
  width: 600px; height: 600px; border-radius: 50%;
  background: radial-gradient(circle, rgba(29,111,232,0.15), transparent 70%);
  filter: blur(60px);
}

.page-hero__content { position: relative; z-index: 1; max-width: 720px; }

.page-hero__title { font-size: clamp(2.2rem, 4.5vw, 4rem); color: white; margin-bottom: 1.25rem; }

.page-hero__desc { font-size: 1.1rem; color: rgba(255,255,255,0.6); line-height: 1.75; max-width: 600px; }

.servico-detail {
  display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center;
  padding-block: 3rem;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.servico-detail:last-child { border-bottom: none; }

@media (min-width: 1024px) {
  .servico-detail { grid-template-columns: 1fr 1fr; gap: 4rem; }
  .servico-detail--reverse .servico-detail__content { order: 2; }
  .servico-detail--reverse .servico-detail__visual { order: 1; }
}

.servico-detail__icon-wrap {
  width: 64px; height: 64px;
  background: rgba(34,211,238,0.1); border: 1px solid rgba(34,211,238,0.2);
  border-radius: 16px; display: flex; align-items: center; justify-content: center;
  margin-bottom: 1rem;
}

.servico-detail__title { font-size: clamp(1.5rem, 2.5vw, 2.2rem); color: white; margin-bottom: 1rem; }

.servico-detail__desc { font-size: 0.95rem; color: rgba(255,255,255,0.6); line-height: 1.75; margin-bottom: 1.5rem; }

.servico-detail__features {
  list-style: none; display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 2rem;
}

.servico-detail__features li {
  display: flex; align-items: center; gap: 0.6rem;
  font-size: 0.9rem; color: rgba(255,255,255,0.65);
}

.servico-detail__visual {
  border-radius: 24px; padding: 2.5rem;
  display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem;
  position: relative; overflow: hidden;
}

.servico-detail__visual-icon {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5; pointer-events: none;
}

.servico-detail__stat {
  position: relative; z-index: 1;
  text-align: center; padding: 1.25rem;
  background: rgba(255,255,255,0.03);
  border-radius: 14px; border: 1px solid rgba(255,255,255,0.06);
}

.servico-detail__stat-value {
  font-family: var(--font-display); font-size: 2rem; font-weight: 800;
  line-height: 1; margin-bottom: 0.35rem;
}

.servico-detail__stat-label { font-size: 0.78rem; color: rgba(255,255,255,0.5); }
</style>
