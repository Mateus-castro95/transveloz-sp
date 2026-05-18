<template>
  <section class="hero" aria-label="Seção principal">
    <!-- Background -->
    <div class="hero__bg">
      <img src="/hero-trucks.png" alt="Frota TransVeloz" class="hero__bg-img" />
      <div class="hero__bg-overlay"></div>
      <div class="hero__bg-grid"></div>
    </div>

    <!-- Floating orbs -->
    <div class="hero__orb hero__orb--1" aria-hidden="true"></div>
    <div class="hero__orb hero__orb--2" aria-hidden="true"></div>
    <div class="hero__orb hero__orb--3" aria-hidden="true"></div>

    <div class="container-xl hero__inner">
      <div class="hero__content">
        <!-- Label -->
        <div class="section-label animate-fade-up">
          <IconZap :size="14" />
          Líder em Logística no Brasil
        </div>

        <!-- Heading -->
        <h1 class="hero__title animate-fade-up delay-100">
          Sua carga em<br />
          <span class="gradient-text">movimento com</span><br />
          máxima eficiência.
        </h1>

        <!-- Subtitle -->
        <p class="hero__subtitle animate-fade-up delay-200">
          Tecnologia, agilidade e confiança em cada entrega. Conectamos o Brasil com uma frota moderna e rastreamento em tempo real.
        </p>

        <!-- CTAs -->
        <div class="hero__ctas animate-fade-up delay-300">
          <NuxtLink to="/contato" class="btn btn-primary btn-lg">
            Solicitar Orçamento
            <IconArrowRight :size="18" />
          </NuxtLink>
          <NuxtLink to="/rastreamento" class="btn btn-outline btn-lg">
            <IconActivity :size="18" />
            Rastrear Carga
          </NuxtLink>
        </div>

        <!-- Trust badges -->
        <div class="hero__badges animate-fade-up delay-400">
          <div class="hero__badge" v-for="badge in badges" :key="badge.text">
            <IconCheck :size="14" color="var(--cyan-400)" />
            {{ badge.text }}
          </div>
        </div>
      </div>

      <!-- Stats cards (right side) -->
      <div class="hero__stats animate-fade-in delay-500">
        <div class="hero__stat-card" v-for="stat in stats" :key="stat.label">
          <div class="hero__stat-icon">
            <component :is="stat.icon" :size="22" color="var(--cyan-400)" />
          </div>
          <div class="hero__stat-value">{{ stat.value }}</div>
          <div class="hero__stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="hero__scroll" aria-hidden="true">
      <div class="hero__scroll-line"></div>
      <span>Scroll</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Zap as IconZap } from 'lucide-vue-next'
import { ArrowRight as IconArrowRight } from 'lucide-vue-next'
import { Activity as IconActivity } from 'lucide-vue-next'
import { Check as IconCheck } from 'lucide-vue-next'
import { Truck as IconTruck } from 'lucide-vue-next'
import { MapPin as IconMapPin } from 'lucide-vue-next'
import { Users as IconUsers } from 'lucide-vue-next'
import { BarChart as IconBarChart } from 'lucide-vue-next'

const badges = [
  { text: 'ISO 9001:2015 Certificada' },
  { text: 'ANTT Autorizada' },
  { text: 'Seguro Total de Carga' },
]

const stats = [
  { value: '+20 anos', label: 'No mercado', icon: IconBarChart },
  { value: '2.500+', label: 'Clientes ativos', icon: IconUsers },
  { value: '26 estados', label: 'Cobertura nacional', icon: IconMapPin },
  { value: '450+', label: 'Veículos na frota', icon: IconTruck },
]
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 5rem;
}

/* Background */
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__bg-img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.45;
}

.hero__bg-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(
    135deg,
    rgba(4,9,26,0.85) 0%,
    rgba(10,22,40,0.65) 40%,
    rgba(15,33,69,0.3) 70%,
    rgba(4,9,26,0.7) 100%
  );
}

.hero__bg-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(29,111,232,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(29,111,232,0.06) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
}

/* Orbs */
.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 1;
}

.hero__orb--1 {
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(29,111,232,0.2) 0%, transparent 70%);
  top: -150px; left: -150px;
  animation: pulse-slow 6s ease-in-out infinite;
}

.hero__orb--2 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%);
  bottom: -100px; right: -100px;
  animation: pulse-slow 8s ease-in-out infinite reverse;
}

.hero__orb--3 {
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%);
  top: 50%; right: 20%;
  animation: float 10s ease-in-out infinite;
}

/* Inner layout */
.hero__inner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding-block: 5rem 4rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .hero__inner {
    grid-template-columns: 1fr auto;
    gap: 4rem;
  }
}

/* Content */
.hero__title {
  font-size: clamp(2.4rem, 5vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: white;
  margin-bottom: 1.5rem;
}

.hero__subtitle {
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: rgba(255,255,255,0.65);
  max-width: 520px;
  margin-bottom: 2.5rem;
  line-height: 1.75;
}

.hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.hero__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.hero__badge {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.55);
}

/* Stats */
.hero__stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  min-width: 280px;
}

@media (min-width: 1024px) {
  .hero__stats {
    grid-template-columns: 1fr 1fr;
    min-width: 300px;
  }
}

.hero__stat-card {
  border-radius: 16px;
  padding: 1.4rem 1.2rem;
  text-align: center;
  transition: all 0.3s;
  background: var(--navy-900);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.hero__stat-card:hover {
  background: #0f2145;
  border-color: rgba(34,211,238,0.35);
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
}

.hero__stat-icon {
  width: 44px; height: 44px;
  background: rgba(34,211,238,0.1);
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 0.75rem;
}

.hero__stat-value {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  letter-spacing: -0.02em;
  line-height: 1;
  margin-bottom: 0.35rem;
}

.hero__stat-label {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.3;
}

/* Scroll */
.hero__scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;
}

.hero__scroll-line {
  width: 1px; height: 40px;
  background: linear-gradient(to bottom, var(--cyan-400), transparent);
  animation: pulse-slow 2s ease-in-out infinite;
}

.hero__scroll span {
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
}

@media (max-width: 640px) {
  .hero__scroll { display: none; }
}
</style>
