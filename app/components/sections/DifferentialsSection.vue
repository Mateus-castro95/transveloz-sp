<template>
  <section class="diff-section section-py" id="diferenciais">
    <div class="container-xl">
      <div class="diff-section__inner">
        <div class="diff-section__media">
          <div class="diff-section__img-wrap">
            <img src="/warehouse.png" alt="Centro de distribuição TransVeloz" class="diff-section__img" />
            <div class="diff-section__img-overlay"></div>
          </div>
          <div class="diff-section__badge glass-blue">
            <div class="diff-section__badge-value gradient-text">98,7%</div>
            <div class="diff-section__badge-label">Pontualidade nas entregas</div>
          </div>
          <div class="diff-section__badge2 glass">
            <div class="diff-section__badge2-icon">🏆</div>
            <div>
              <div class="diff-section__badge2-val">Melhor Transportadora SP</div>
              <div class="diff-section__badge2-sub">Prêmio Logística Brasil 2023</div>
            </div>
          </div>
        </div>

        <div class="diff-section__content">
          <div class="section-label">
            <IconZap :size="14" />
            Por que a TransVeloz?
          </div>
          <h2 class="diff-section__title">
            Diferenciais que fazem<br />
            <span class="gradient-text">a diferença real</span>
          </h2>
          <p class="diff-section__subtitle">
            Não somos apenas uma transportadora. Somos um parceiro logístico comprometido com o crescimento do seu negócio.
          </p>

          <div class="diff-section__items">
            <div v-for="(item, i) in differentials" :key="item.title" class="diff-item" :style="`animation-delay: ${i * 0.1}s`">
              <div class="diff-item__icon">
                <component :is="item.icon" :size="20" color="var(--cyan-400)" />
              </div>
              <div class="diff-item__text">
                <h3 class="diff-item__title">{{ item.title }}</h3>
                <p class="diff-item__desc">{{ item.desc }}</p>
              </div>
            </div>
          </div>

          <NuxtLink to="/sobre" class="btn btn-primary btn-lg">
            Conheça nossa história
            <IconArrowRight :size="18" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Zap as IconZap } from 'lucide-vue-next'
import { Shield as IconShield } from 'lucide-vue-next'
import { Activity as IconActivity } from 'lucide-vue-next'
import { Clock as IconClock } from 'lucide-vue-next'
import { Monitor as IconMonitor } from 'lucide-vue-next'
import { DollarSign as IconDollar } from 'lucide-vue-next'
import { ArrowRight as IconArrowRight } from 'lucide-vue-next'

const differentials = [
  { icon: IconActivity, title: 'Rastreamento em Tempo Real', desc: 'GPS satelital em toda a frota. Seu cliente sabe exatamente onde está a carga.' },
  { icon: IconShield, title: 'Seguro Total de Carga', desc: 'Proteção completa em todas as modalidades, sem custo adicional.' },
  { icon: IconClock, title: 'Atendimento 24/7', desc: 'Central disponível todos os dias, inclusive finais de semana e feriados.' },
  { icon: IconMonitor, title: 'Portal do Cliente', desc: 'Painel exclusivo com histórico, faturas e relatórios de desempenho.' },
  { icon: IconDollar, title: 'Melhores Tarifas', desc: 'Negociação transparente com tabelas competitivas e sem cobranças surpresa.' },
]
</script>

<style scoped>
.diff-section { background: linear-gradient(180deg, var(--navy-950) 0%, var(--navy-900) 100%); }

.diff-section__inner {
  display: grid; grid-template-columns: 1fr; gap: 4rem; align-items: center;
}

@media (min-width: 1024px) {
  .diff-section__inner { grid-template-columns: 1fr 1fr; gap: 5rem; }
}

.diff-section__media { position: relative; }

.diff-section__img-wrap {
  border-radius: 24px; overflow: hidden; aspect-ratio: 4/3; position: relative;
}

.diff-section__img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
.diff-section__img-wrap:hover .diff-section__img { transform: scale(1.03); }

.diff-section__img-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom right, rgba(10,22,40,0.3), transparent 60%, rgba(10,22,40,0.2));
}

.diff-section__badge {
  position: absolute; bottom: -1.5rem; right: -1rem; border-radius: 16px;
  padding: 1.25rem 1.5rem; text-align: center; min-width: 160px;
}

@media (max-width: 640px) { .diff-section__badge { right: 0.5rem; bottom: 0.5rem; } }

.diff-section__badge-value {
  font-family: var(--font-display); font-size: 2rem; font-weight: 800; line-height: 1; margin-bottom: 0.35rem;
}

.diff-section__badge-label { font-size: 0.75rem; color: rgba(255,255,255,0.6); }

.diff-section__badge2 {
  position: absolute; top: 1rem; left: -1rem; border-radius: 14px;
  padding: 0.9rem 1.1rem; display: flex; align-items: center; gap: 0.75rem; max-width: 220px;
}

@media (max-width: 640px) { .diff-section__badge2 { left: 0.5rem; } }

.diff-section__badge2-icon { font-size: 1.5rem; }
.diff-section__badge2-val { font-family: var(--font-display); font-size: 0.8rem; font-weight: 700; color: white; line-height: 1.3; }
.diff-section__badge2-sub { font-size: 0.7rem; color: rgba(255,255,255,0.5); }

.diff-section__title { font-size: clamp(1.7rem, 3vw, 2.8rem); color: white; margin-bottom: 1rem; }
.diff-section__subtitle { font-size: 1rem; color: rgba(255,255,255,0.55); line-height: 1.7; margin-bottom: 2.5rem; }

.diff-section__items { display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 2.5rem; }

.diff-item { display: flex; gap: 1rem; align-items: flex-start; animation: fadeUp 0.6s cubic-bezier(0.4,0,0.2,1) both; }

.diff-item__icon {
  width: 44px; height: 44px; background: rgba(34,211,238,0.1); border: 1px solid rgba(34,211,238,0.15);
  border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;
}

.diff-item__title { font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: white; margin-bottom: 0.25rem; }
.diff-item__desc { font-size: 0.875rem; color: rgba(255,255,255,0.55); line-height: 1.6; }
</style>
