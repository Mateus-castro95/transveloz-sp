<template>
  <div>
    <HeroSection />
    <StatsSection />
    <ServicesSection />
    <DifferentialsSection />
    <CoverageSection />
    <TestimonialsSection />
    <CtaSection />
    <FaqSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/sections/HeroSection.vue'
import StatsSection from '~/components/sections/StatsSection.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import DifferentialsSection from '~/components/sections/DifferentialsSection.vue'
import CoverageSection from '~/components/sections/CoverageSection.vue'
import TestimonialsSection from '~/components/sections/TestimonialsSection.vue'
import CtaSection from '~/components/sections/CtaSection.vue'
import FaqSection from '~/components/sections/FaqSection.vue'

definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'TransVeloz Logística — Transporte Rodoviário e Logística Empresarial em SP',
  description: 'TransVeloz Logística: transporte rodoviário, carga fracionada, logística empresarial e distribuição nacional. Tecnologia, agilidade e confiança em cada entrega.',
  ogTitle: 'TransVeloz Logística — Líder em Logística no Brasil',
  ogDescription: 'Logística inteligente para empresas que precisam de performance. São Paulo, Brasil.',
})
</script>
