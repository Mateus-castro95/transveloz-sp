<template>
  <div class="page-sobre">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="page-hero__bg" aria-hidden="true">
        <div class="page-hero__grid"></div>
        <div class="page-hero__orb"></div>
      </div>
      <div class="container-xl page-hero__content">
        <div class="section-label"><IconUsers :size="14" />Sobre a TransVeloz</div>
        <h1 class="page-hero__title">
          Mais de 20 anos<br />
          <span class="gradient-text">movendo o Brasil</span>
        </h1>
        <p class="page-hero__desc">
          Nascemos em São Paulo com a missão de transformar a logística nacional. Hoje somos um dos maiores operadores rodoviários do país, com frota moderna e tecnologia de ponta.
        </p>
      </div>
    </section>

    <!-- História -->
    <section class="section-py">
      <div class="container-xl">
        <div class="sobre__historia-grid">
          <div>
            <div class="section-label">Nossa História</div>
            <h2 class="sobre__section-title">De startup logística<br /><span class="gradient-text">a líder nacional</span></h2>
            <p class="sobre__text">Fundada em 2004 pelo empresário Roberto Souza Filho, a TransVeloz começou com apenas 3 caminhões e um sonho: entregar com mais velocidade e cuidado do que qualquer concorrente.</p>
            <p class="sobre__text">Em duas décadas de crescimento consistente, construímos uma das frotas mais modernas do Brasil, expandimos para todos os estados do país e nos tornamos parceiros logísticos de grandes multinacionais e PMEs.</p>
            <p class="sobre__text">Nossa filosofia é simples: <strong>sua carga é nossa responsabilidade do ponto A ao ponto B</strong>, com rastreamento, seguro e pontualidade garantidos.</p>
          </div>
          <div class="sobre__milestones">
            <div v-for="m in milestones" :key="m.year" class="sobre__milestone glass">
              <div class="sobre__milestone-year gradient-text">{{ m.year }}</div>
              <div class="sobre__milestone-text">{{ m.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Valores -->
    <section class="section-py" style="background: var(--navy-900);">
      <div class="container-xl">
        <div class="text-center mb-12">
          <div class="section-label" style="margin:0 auto 1rem;">Nossos Valores</div>
          <h2 class="sobre__section-title">O que nos guia<br /><span class="gradient-text">todos os dias</span></h2>
        </div>
        <div class="sobre__values-grid">
          <div v-for="v in values" :key="v.title" class="card sobre__value-card">
            <div class="sobre__value-icon-wrapper">
              <component :is="v.icon" :size="36" class="sobre__value-icon" />
            </div>
            <h3 class="sobre__value-title">{{ v.title }}</h3>
            <p class="sobre__value-desc">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Time -->
    <section class="section-py">
      <div class="container-xl">
        <div class="text-center mb-12">
          <div class="section-label" style="margin:0 auto 1rem;">Nossa Liderança</div>
          <h2 class="sobre__section-title">O time que faz<br /><span class="gradient-text">acontecer</span></h2>
        </div>
        <div class="sobre__team-grid">
          <div v-for="member in team" :key="member.name" class="sobre__team-card glass">
            <div class="sobre__team-avatar">{{ member.name[0] }}</div>
            <div class="sobre__team-name">{{ member.name }}</div>
            <div class="sobre__team-role">{{ member.role }}</div>
          </div>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import { Users as IconUsers, Zap, ShieldCheck, Lightbulb, Handshake, Leaf, Trophy } from 'lucide-vue-next'
import CtaSection from '~/components/sections/CtaSection.vue'

definePageMeta({ layout: 'default' })
useSeoMeta({
  title: 'Sobre a TransVeloz Logística — Nossa História e Valores',
  description: 'Conheça a história da TransVeloz Logística, nossa missão, valores e o time que lidera uma das maiores transportadoras do Brasil.',
})

const milestones = [
  { year: '2004', text: 'Fundação em São Paulo com 3 caminhões e foco em entregas expressas na Grande SP.' },
  { year: '2008', text: 'Expansão para todo o Estado de SP e abertura da primeira filial em Campinas.' },
  { year: '2012', text: 'Implantação de rastreamento satelital em 100% da frota e portal online.' },
  { year: '2016', text: 'Atingimos a marca de 200 veículos e expandimos para o Sul e Nordeste.' },
  { year: '2020', text: 'Lançamento do app de rastreamento e do serviço de Logística Empresarial.' },
  { year: '2024', text: 'Celebramos 20 anos com 450+ veículos, cobertura nacional e 2.500+ clientes.' },
]

const values = [
  { icon: Zap, title: 'Velocidade', desc: 'Cada minuto importa. Processos ágeis que garantem prazos cumpridos.' },
  { icon: ShieldCheck, title: 'Confiança', desc: 'Transparência total em cada etapa do transporte, sem surpresas.' },
  { icon: Lightbulb, title: 'Inovação', desc: 'Tecnologia de ponta para rastreamento, gestão e comunicação.' },
  { icon: Handshake, title: 'Parceria', desc: 'Não somos apenas fornecedores — somos parceiros do seu crescimento.' },
  { icon: Leaf, title: 'Sustentabilidade', desc: 'Frota com veículos Euro 6 e programa de compensação de carbono.' },
  { icon: Trophy, title: 'Excelência', desc: 'ISO 9001:2015 e busca contínua pela melhoria dos processos.' },
]

const team = [
  { name: 'Roberto Souza Filho', role: 'CEO & Fundador' },
  { name: 'Camila Torres', role: 'Diretora de Operações' },
  { name: 'Marcus Oliveira', role: 'Diretor Comercial' },
  { name: 'Patricia Gomes', role: 'Diretora de TI' },
  { name: 'Fernando Costa', role: 'Diretor Financeiro' },
  { name: 'Juliana Reis', role: 'Gerente de RH' },
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

.page-hero__title {
  font-size: clamp(2.2rem, 4.5vw, 4rem); color: white;
  margin-bottom: 1.25rem;
}

.page-hero__desc {
  font-size: 1.1rem; color: rgba(255,255,255,0.6); line-height: 1.75; max-width: 600px;
}

.sobre__historia-grid {
  display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: start;
}

@media (min-width: 1024px) {
  .sobre__historia-grid { grid-template-columns: 1fr 1fr; }
}

.sobre__section-title { font-size: clamp(1.7rem, 3vw, 2.6rem); color: white; margin-bottom: 1.5rem; }

.sobre__text { font-size: 0.95rem; color: rgba(255,255,255,0.6); line-height: 1.75; margin-bottom: 1rem; }
.sobre__text strong { color: white; }

.sobre__milestones { display: flex; flex-direction: column; gap: 0.75rem; }

.sobre__milestone {
  border-radius: 14px; padding: 1.1rem 1.4rem;
  display: flex; align-items: flex-start; gap: 1rem;
}

.sobre__milestone-year {
  font-family: var(--font-display); font-size: 1.1rem; font-weight: 800;
  min-width: 48px; flex-shrink: 0;
}

.sobre__milestone-text { font-size: 0.875rem; color: rgba(255,255,255,0.6); line-height: 1.6; }

.text-center { text-align: center; }
.mb-12 { margin-bottom: 3rem; }

.sobre__values-grid {
  display: grid; 
  grid-template-columns: repeat(2, minmax(0, 1fr)); 
  gap: 1.25rem;
  grid-auto-rows: 1fr;
}
@media (min-width: 1024px) {
  .sobre__values-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

.sobre__value-card { 
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1rem;
}
@media (min-width: 1024px) {
  .sobre__value-card {
    padding: 2rem;
  }
}
.sobre__value-icon-wrapper { margin-bottom: 1rem; display: flex; justify-content: center; }
.sobre__value-icon { color: var(--cyan-400); }
.sobre__value-title { font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: white; margin-bottom: 0.5rem; }
.sobre__value-desc { font-size: 0.875rem; color: rgba(255,255,255,0.55); line-height: 1.6; }

.sobre__team-grid {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;
}
@media (min-width: 768px) {
  .sobre__team-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (min-width: 1024px) {
  .sobre__team-grid { grid-template-columns: repeat(6, 1fr); }
}

.sobre__team-card {
  border-radius: 16px; padding: 1.5rem 1rem; text-align: center;
  transition: all 0.3s;
}

.sobre__team-card:hover { border-color: rgba(29,111,232,0.3); transform: translateY(-3px); }

.sobre__team-avatar {
  width: 56px; height: 56px; border-radius: 50%;
  background: linear-gradient(135deg, var(--blue-500), var(--cyan-400));
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 1.3rem; font-weight: 700;
  color: white; margin: 0 auto 0.75rem;
}

.sobre__team-name { font-family: var(--font-display); font-size: 0.875rem; font-weight: 700; color: white; margin-bottom: 0.25rem; }
.sobre__team-role { font-size: 0.75rem; color: rgba(255,255,255,0.45); }
</style>
