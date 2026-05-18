<template>
  <section class="cta-section section-py">
    <div class="container-xl">
      <div class="cta-section__card">
        <!-- Background effects -->
        <div class="cta-section__orb cta-section__orb--1" aria-hidden="true"></div>
        <div class="cta-section__orb cta-section__orb--2" aria-hidden="true"></div>
        <div class="cta-section__grid-bg" aria-hidden="true"></div>

        <div class="cta-section__content">
          <div class="section-label">
            <IconZap :size="14" />
            Comece agora
          </div>
          <h2 class="cta-section__title">
            Pronto para mover seu<br />
            <span class="gradient-text">negócio mais rápido?</span>
          </h2>
          <p class="cta-section__desc">
            Solicite uma cotação gratuita e descubra como a TransVeloz pode transformar a logística da sua empresa com eficiência e custo-benefício imbatíveis.
          </p>
          <div class="cta-section__actions">
            <NuxtLink to="/contato" class="btn btn-orange btn-lg">
              Solicitar Cotação Grátis
              <IconArrowRight :size="18" />
            </NuxtLink>
            <a href="tel:+551140028922" class="btn btn-outline btn-lg">
              <IconPhone :size="18" />
              (11) 4002-8922
            </a>
          </div>
          <div class="cta-section__guarantees">
            <div v-for="g in guarantees" :key="g" class="cta-section__guarantee">
              <IconCheck :size="14" color="var(--cyan-400)" />
              {{ g }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Zap as IconZap } from 'lucide-vue-next'
import { ArrowRight as IconArrowRight } from 'lucide-vue-next'
import { Phone as IconPhone } from 'lucide-vue-next'
import { Check as IconCheck } from 'lucide-vue-next'

const guarantees = [
  'Sem taxa de cadastro',
  'Resposta em até 2h úteis',
  'Contrato sem fidelidade',
  'Suporte 24/7 incluso',
]
</script>

<style scoped>
.cta-section { background: var(--navy-950); }

.cta-section__card {
  position: relative; overflow: hidden;
  background: linear-gradient(135deg, rgba(22,45,94,0.8) 0%, rgba(15,33,69,0.9) 50%, rgba(30,58,122,0.7) 100%);
  border: 1px solid rgba(29,111,232,0.25);
  border-radius: 28px; padding: 4rem 3rem;
  text-align: center;
}

@media (max-width: 640px) { .cta-section__card { padding: 2.5rem 1.5rem; } }

.cta-section__orb {
  position: absolute; border-radius: 50%;
  filter: blur(60px); pointer-events: none;
}

.cta-section__orb--1 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(29,111,232,0.25), transparent 70%);
  top: -100px; left: -100px;
  animation: pulse-slow 6s ease-in-out infinite;
}

.cta-section__orb--2 {
  width: 350px; height: 350px;
  background: radial-gradient(circle, rgba(249,115,22,0.15), transparent 70%);
  bottom: -80px; right: -80px;
  animation: pulse-slow 8s ease-in-out infinite reverse;
}

.cta-section__grid-bg {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.cta-section__content {
  position: relative; z-index: 1;
  display: flex; flex-direction: column; align-items: center; gap: 1.25rem;
}

.cta-section__title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  color: white; line-height: 1.1;
}

.cta-section__desc {
  font-size: 1.05rem; color: rgba(255,255,255,0.6);
  line-height: 1.7; max-width: 560px;
}

.cta-section__actions {
  display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-top: 0.5rem;
}

.cta-section__guarantees {
  display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-top: 0.5rem;
}

.cta-section__guarantee {
  display: flex; align-items: center; gap: 0.4rem;
  font-size: 0.82rem; color: rgba(255,255,255,0.5);
}
</style>
