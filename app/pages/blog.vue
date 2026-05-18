<template>
  <div class="page-blog">
    <section class="page-hero">
      <div class="page-hero__bg" aria-hidden="true">
        <div class="page-hero__grid"></div>
        <div class="page-hero__orb"></div>
      </div>
      <div class="container-xl page-hero__content">
        <div class="section-label">Blog & Notícias</div>
        <h1 class="page-hero__title">
          Conteúdo sobre<br />
          <span class="gradient-text">logística e transporte</span>
        </h1>
        <p class="page-hero__desc">
          Dicas, tendências e novidades do setor logístico para ajudar sua empresa a crescer com mais eficiência.
        </p>
      </div>
    </section>

    <section class="section-py">
      <div class="container-xl">
        <!-- Featured -->
        <div class="blog__featured card" v-if="featured">
          <div class="blog__featured-content">
            <div class="blog__cat">{{ featured.category }}</div>
            <h2 class="blog__featured-title">{{ featured.title }}</h2>
            <p class="blog__featured-excerpt">{{ featured.excerpt }}</p>
            <div class="blog__featured-meta">
              <span class="blog__author">{{ featured.author }}</span>
              <span class="blog__date">{{ featured.date }}</span>
              <span class="blog__read">{{ featured.readTime }}</span>
            </div>
            <a href="#" class="btn btn-primary">
              Ler artigo completo
              <IconArrowRight :size="16" />
            </a>
          </div>
          <div class="blog__featured-visual">
            <div class="blog__featured-icon"><IconTruck :size="64" color="var(--blue-400)" /></div>
          </div>
        </div>

        <!-- Grid -->
        <div class="blog__grid">
          <article v-for="(post, i) in posts" :key="i" class="blog-card glass">
            <div class="blog-card__top">
              <span class="blog-card__emoji"><component :is="post.icon" :size="24" color="var(--cyan-400)" /></span>
              <span class="blog__cat">{{ post.category }}</span>
            </div>
            <h3 class="blog-card__title">{{ post.title }}</h3>
            <p class="blog-card__excerpt">{{ post.excerpt }}</p>
            <div class="blog-card__footer">
              <span class="blog__date">{{ post.date }}</span>
              <span class="blog__read">{{ post.readTime }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import { 
  ArrowRight as IconArrowRight,
  Truck as IconTruck,
  Package as IconPackage,
  MapPin as IconMapPin,
  Scale as IconScale,
  Leaf as IconLeaf,
  DollarSign as IconDollarSign,
  Bot as IconBot
} from 'lucide-vue-next'
import CtaSection from '~/components/sections/CtaSection.vue'

definePageMeta({ layout: 'default' })
useSeoMeta({
  title: 'Blog — TransVeloz Logística | Conteúdo sobre Transporte e Logística',
  description: 'Leia artigos sobre logística, transporte rodoviário, gestão de supply chain e tendências do setor no blog da TransVeloz.',
})

const featured = {
  category: 'Tendências',
  title: '10 Inovações em Logística que Vão Transformar o Transporte Brasileiro em 2025',
  excerpt: 'Do rastreamento por IA à eletrificação da frota: descubra quais tecnologias estão revolucionando a cadeia de suprimentos no Brasil e como sua empresa pode se preparar para o futuro.',
  author: 'Camila Torres',
  date: '15 Jan 2025',
  readTime: '8 min',
}

const posts = [
  {
    icon: IconPackage,
    category: 'Operações',
    title: 'Carga Fracionada vs. Carga Fechada: Quando Escolher Cada Modalidade?',
    excerpt: 'Entenda as diferenças entre LTL e FTL e como escolher o modelo certo para reduzir custos sem abrir mão do prazo.',
    date: '10 Jan 2025',
    readTime: '5 min',
  },
  {
    icon: IconMapPin,
    category: 'Tecnologia',
    title: 'Como o Rastreamento em Tempo Real Aumentou em 30% a Satisfação dos Clientes',
    excerpt: 'Case de sucesso: como implantamos GPS satelital em 100% da frota e o impacto direto na experiência do cliente.',
    date: '05 Jan 2025',
    readTime: '6 min',
  },
  {
    icon: IconScale,
    category: 'Regulação',
    title: 'ANTT 2025: O que Muda no Transporte Rodoviário de Cargas Este Ano',
    excerpt: 'Principais atualizações regulatórias da ANTT para 2025 e como se adequar às novas exigências sem impactar sua operação.',
    date: '02 Jan 2025',
    readTime: '7 min',
  },
  {
    icon: IconLeaf,
    category: 'Sustentabilidade',
    title: 'Logística Verde: Como Reduzir a Pegada de Carbono do seu Transporte',
    excerpt: 'Práticas sustentáveis que sua empresa pode adotar hoje para ter uma cadeia de suprimentos mais responsável e eficiente.',
    date: '28 Dez 2024',
    readTime: '5 min',
  },
  {
    icon: IconDollarSign,
    category: 'Gestão',
    title: '7 Erros que Encarecem o Frete da Sua Empresa (e Como Evitá-los)',
    excerpt: 'Erros simples de gestão logística podem representar até 20% de custo extra no frete. Veja como identificar e corrigir.',
    date: '20 Dez 2024',
    readTime: '6 min',
  },
  {
    icon: IconBot,
    category: 'Tecnologia',
    title: 'Inteligência Artificial na Logística: Da Roteirização ao Atendimento',
    excerpt: 'Como a IA está otimizando rotas, prevendo atrasos e personalizando o atendimento logístico no Brasil.',
    date: '15 Dez 2024',
    readTime: '8 min',
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
  position: absolute; top: -200px; right: -100px; width: 600px; height: 600px; border-radius: 50%;
  background: radial-gradient(circle, rgba(29,111,232,0.15), transparent 70%); filter: blur(60px);
}

.page-hero__content { position: relative; z-index: 1; max-width: 720px; }
.page-hero__title { font-size: clamp(2.2rem, 4.5vw, 4rem); color: white; margin-bottom: 1.25rem; }
.page-hero__desc { font-size: 1.1rem; color: rgba(255,255,255,0.6); line-height: 1.75; max-width: 600px; }

/* Featured */
.blog__featured {
  display: grid; grid-template-columns: 1fr; gap: 2rem; margin-bottom: 3rem;
  padding: 2.5rem; border-radius: 24px;
}

@media (min-width: 1024px) {
  .blog__featured { grid-template-columns: 1.5fr 1fr; }
}

.blog__cat {
  display: inline-block; font-size: 0.72rem; font-weight: 700;
  letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--cyan-400); background: rgba(34,211,238,0.1);
  border: 1px solid rgba(34,211,238,0.2);
  padding: 0.3rem 0.8rem; border-radius: 100px; margin-bottom: 1rem;
}

.blog__featured-title {
  font-size: clamp(1.4rem, 2.5vw, 2rem); color: white; margin-bottom: 1rem; line-height: 1.3;
}

.blog__featured-excerpt {
  font-size: 0.95rem; color: rgba(255,255,255,0.6); line-height: 1.75; margin-bottom: 1.5rem;
}

.blog__featured-meta {
  display: flex; gap: 1rem; font-size: 0.8rem; color: rgba(255,255,255,0.4);
  margin-bottom: 1.5rem; flex-wrap: wrap; align-items: center;
}

.blog__author { color: rgba(255,255,255,0.65); font-weight: 600; }

.blog__featured-visual {
  display: flex; align-items: center; justify-content: center;
  background: rgba(29,111,232,0.06); border-radius: 18px;
  min-height: 200px;
}

.blog__featured-icon { font-size: 5rem; }

/* Grid */
.blog__grid {
  display: grid; grid-template-columns: 1fr; gap: 1.25rem;
}

@media (min-width: 640px) {
  .blog__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .blog__grid { grid-template-columns: repeat(3, 1fr); }
}

.blog-card {
  border-radius: 18px; padding: 1.75rem;
  display: flex; flex-direction: column; gap: 0.75rem;
  transition: all 0.3s; cursor: pointer;
}

.blog-card:hover {
  border-color: rgba(29,111,232,0.25); transform: translateY(-4px);
}

.blog-card__top { display: flex; align-items: center; gap: 0.75rem; }
.blog-card__top .blog__cat { margin-bottom: 0; }

.blog-card__emoji { display: flex; align-items: center; justify-content: center; }

.blog-card__title {
  font-family: var(--font-display); font-size: 1rem; font-weight: 700;
  color: white; line-height: 1.4; flex: 1;
}

.blog-card__excerpt {
  font-size: 0.85rem; color: rgba(255,255,255,0.55); line-height: 1.65; flex: 1;
}

.blog-card__footer {
  display: flex; gap: 1rem; font-size: 0.75rem; color: rgba(255,255,255,0.35);
  margin-top: auto; padding-top: 0.75rem;
  border-top: 1px solid rgba(255,255,255,0.06);
}

.blog__date, .blog__read { color: rgba(255,255,255,0.35); }
</style>
