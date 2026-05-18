<template>
  <section class="testimonials section-py" id="depoimentos">
    <div class="container-xl">
      <div class="testimonials__header">
        <div class="section-label">
          <IconHeart :size="14" />
          Depoimentos
        </div>
        <h2 class="testimonials__title">
          O que nossos clientes<br />
          <span class="gradient-text">dizem sobre nós</span>
        </h2>
      </div>

      <div class="testimonials__grid">
        <article v-for="(t, i) in testimonials" :key="t.name" class="testimonial-card glass" :style="`animation-delay:${i*0.1}s`">
          <div class="testimonial-card__stars">
            <span v-for="s in 5" :key="s">★</span>
          </div>
          <blockquote class="testimonial-card__text">"{{ t.text }}"</blockquote>
          <div class="testimonial-card__author">
            <div class="testimonial-card__avatar">{{ t.name[0] }}</div>
            <div>
              <div class="testimonial-card__name">{{ t.name }}</div>
              <div class="testimonial-card__role">{{ t.role }} — {{ t.company }}</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Heart as IconHeart } from 'lucide-vue-next'

const testimonials = [
  {
    text: 'Trabalho com a TransVeloz há 5 anos e nunca tive problemas sérios. A pontualidade é impecável e o suporte resolve tudo rapidamente. Recomendo para qualquer empresa.',
    name: 'Carlos Mendonça',
    role: 'Diretor de Logística',
    company: 'Indústrias Mendonça SA',
  },
  {
    text: 'A plataforma de rastreamento deles é incrível. Consigo acompanhar todas as minhas entregas em tempo real pelo celular. Isso fez toda a diferença na gestão do nosso estoque.',
    name: 'Ana Paula Ferreira',
    role: 'Gerente de Supply Chain',
    company: 'Biofarma Brasil',
  },
  {
    text: 'Migramos para a TransVeloz após problemas constantes com outra transportadora. Desde então, zero atrasos e atendimento excelente. Parceria que veio para ficar.',
    name: 'Roberto Alves',
    role: 'CEO',
    company: 'E-Commerce Veloz',
  },
  {
    text: 'As tarifas são justas e transparentes, sem letras miúdas. O time comercial foi muito atencioso na montagem do contrato. Satisfação total com o serviço.',
    name: 'Fernanda Lima',
    role: 'Diretora Financeira',
    company: 'Grupo Textil Norte',
  },
  {
    text: 'Precisamos de logística expressa em cima da hora e a TransVeloz entregou em menos de 24h de SP para Manaus. Surpreendentes!',
    name: 'Thiago Braga',
    role: 'Gerente de Operações',
    company: 'Amazônica Tech',
  },
  {
    text: 'A carga fracionada deles é a melhor solução para o nosso volume. Economizamos 30% nos custos de frete sem abrir mão da qualidade do serviço.',
    name: 'Mariana Souza',
    role: 'Coordenadora de Compras',
    company: 'Distribuidora Premium',
  },
]
</script>

<style scoped>
.testimonials { background: var(--navy-950); }

.testimonials__header {
  text-align: center; display: flex; flex-direction: column; align-items: center; margin-bottom: 3.5rem;
}

.testimonials__title {
  font-size: clamp(1.8rem, 3vw, 3rem); color: white;
}

.testimonials__grid {
  display: grid; grid-template-columns: 1fr; gap: 1.25rem;
}

@media (min-width: 640px) {
  .testimonials__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .testimonials__grid { grid-template-columns: repeat(3, 1fr); }
}

.testimonial-card {
  border-radius: 20px; padding: 1.75rem;
  display: flex; flex-direction: column; gap: 1rem;
  transition: all 0.3s;
  animation: fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) both;
}

.testimonial-card:hover {
  border-color: rgba(29,111,232,0.25);
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.25);
}

.testimonial-card__stars { color: #f59e0b; font-size: 0.9rem; letter-spacing: 2px; }

.testimonial-card__text {
  font-size: 0.9rem; color: rgba(255,255,255,0.65); line-height: 1.7; flex: 1;
  font-style: italic;
}

.testimonial-card__author { display: flex; align-items: center; gap: 0.75rem; }

.testimonial-card__avatar {
  width: 42px; height: 42px; border-radius: 50%;
  background: linear-gradient(135deg, var(--blue-500), var(--cyan-400));
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-weight: 700; font-size: 1rem; color: white; flex-shrink: 0;
}

.testimonial-card__name {
  font-family: var(--font-display); font-size: 0.9rem; font-weight: 700; color: white;
}

.testimonial-card__role { font-size: 0.75rem; color: rgba(255,255,255,0.45); }
</style>
