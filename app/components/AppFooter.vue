<template>
  <footer class="footer">
    <!-- Top Wave -->
    <div class="footer__wave">
      <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
        <path d="M0 40C240 0 480 80 720 40C960 0 1200 80 1440 40V80H0V40Z" fill="#04091a"/>
      </svg>
    </div>

    <div class="footer__body">
      <div class="container-xl">
        <!-- Main Grid -->
        <div class="footer__grid">
          <!-- Brand -->
          <div class="footer__brand">
            <NuxtLink to="/" class="footer__logo">
              <div class="footer__logo-icon">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <path d="M2 22L10 8L18 16L24 10L30 22H2Z" fill="url(#fLogoGrad)" />
                  <circle cx="24" cy="10" r="3" fill="#22d3ee" />
                  <defs>
                    <linearGradient id="fLogoGrad" x1="2" y1="22" x2="30" y2="8" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#1d6fe8" /><stop offset="1" stop-color="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <div class="footer__brand-name">TransVeloz</div>
                <div class="footer__brand-sub">Logística</div>
              </div>
            </NuxtLink>
            <p class="footer__desc">
              Logística inteligente para empresas que precisam de performance. Mais de 20 anos conectando o Brasil com eficiência e tecnologia.
            </p>
            <div class="footer__contact-info">
              <a href="tel:+551140028922" class="footer__contact-item">
                <IconPhone :size="16" color="var(--cyan-400)" />
                (11) 4002-8922
              </a>
              <a href="mailto:contato@transveloz.com.br" class="footer__contact-item">
                <IconMail :size="16" color="var(--cyan-400)" />
                contato@transveloz.com.br
              </a>
              <div class="footer__contact-item">
                <IconMapPin :size="16" color="var(--cyan-400)" />
                Av. Paulista, 1000 — São Paulo, SP
              </div>
            </div>
            <!-- Social -->
            <div class="footer__social">
              <a v-for="social in socials" :key="social.name" :href="social.url" :aria-label="social.name" class="footer__social-btn" target="_blank" rel="noopener">
                <component :is="social.icon" :size="18" />
              </a>
            </div>
          </div>

          <!-- Links columns -->
          <div v-for="col in linkCols" :key="col.title" class="footer__col">
            <h4 class="footer__col-title">{{ col.title }}</h4>
            <ul class="footer__links">
              <li v-for="link in col.links" :key="link.label">
                <NuxtLink :to="link.to" class="footer__link">
                  <span class="footer__link-dot"></span>
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div class="footer__newsletter">
            <h4 class="footer__col-title">Newsletter</h4>
            <p class="footer__newsletter-desc">Receba novidades sobre logística e nossas ofertas exclusivas.</p>
            <form class="footer__newsletter-form" @submit.prevent="submitNewsletter">
              <input
                v-model="email"
                type="email"
                placeholder="Seu melhor e-mail"
                class="footer__newsletter-input"
                required
              />
              <button type="submit" class="btn btn-primary btn-sm footer__newsletter-btn">
                Assinar
              </button>
            </form>
            <div class="footer__certifications">
              <div v-for="cert in certifications" :key="cert" class="footer__cert-badge">
                <IconCheck :size="12" color="var(--cyan-400)" />
                {{ cert }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer__bottom">
      <div class="container-xl footer__bottom-inner">
        <p class="footer__copyright">
          © {{ new Date().getFullYear() }} TransVeloz Logística. Todos os direitos reservados.
          CNPJ 12.345.678/0001-99
        </p>
        <div class="footer__bottom-links">
          <NuxtLink to="#" class="footer__bottom-link">Privacidade</NuxtLink>
          <NuxtLink to="#" class="footer__bottom-link">Termos</NuxtLink>
          <NuxtLink to="#" class="footer__bottom-link">Cookies</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Phone as IconPhone } from 'lucide-vue-next'
import { Mail as IconMail } from 'lucide-vue-next'
import { MapPin as IconMapPin } from 'lucide-vue-next'
import { Check as IconCheck } from 'lucide-vue-next'
import { Linkedin as IconLinkedin, Instagram as IconInstagram, Facebook as IconFacebook, Youtube as IconYoutube } from 'lucide-vue-next'

const email = ref('')

function submitNewsletter() {
  alert(`Obrigado! ${email.value} cadastrado com sucesso.`)
  email.value = ''
}

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: IconLinkedin,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: IconInstagram,
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: IconFacebook,
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: IconYoutube,
  },
]

const linkCols = [
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre Nós', to: '/sobre' },
      { label: 'Nossa Frota', to: '/sobre#frota' },
      { label: 'Trabalhe Conosco', to: '/sobre#carreiras' },
      { label: 'Sustentabilidade', to: '/sobre#sustentabilidade' },
      { label: 'Imprensa', to: '/blog' },
    ],
  },
  {
    title: 'Serviços',
    links: [
      { label: 'Transporte Rodoviário', to: '/servicos' },
      { label: 'Carga Fracionada', to: '/servicos' },
      { label: 'Logística Empresarial', to: '/servicos' },
      { label: 'Carga Expressa', to: '/servicos' },
      { label: 'Distribuição Nacional', to: '/servicos' },
      { label: 'Rastreamento', to: '/rastreamento' },
    ],
  },
  {
    title: 'Atendimento',
    links: [
      { label: 'Central do Cliente', to: '/contato' },
      { label: 'Solicitar Orçamento', to: '/contato' },
      { label: 'Rastrear Carga', to: '/rastreamento' },
      { label: 'Áreas Atendidas', to: '/areas-atendidas' },
      { label: 'Perguntas Frequentes', to: '/#faq' },
    ],
  },
]

const certifications = ['ISO 9001:2015', 'ANTT Autorizada', 'Seguro Total de Carga']
</script>

<style scoped>
.footer {
  position: relative;
  background: #020712;
  border-top: 1px solid rgba(255,255,255,0.04);
}

.footer__wave {
  position: relative;
  height: 80px;
  overflow: hidden;
  background: var(--navy-950);
}

.footer__wave svg {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.footer__body {
  padding: 4rem 0 3rem;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 640px) {
  .footer__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .footer__grid { grid-template-columns: 2fr repeat(3, 1fr) 1.5fr; gap: 2rem; }
}

/* Brand */
.footer__logo {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1.25rem;
}

.footer__logo-icon {
  width: 42px; height: 42px;
  background: rgba(29,111,232,0.12);
  border: 1px solid rgba(29,111,232,0.25);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
}

.footer__brand-name {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.1rem;
  color: white;
  line-height: 1;
}

.footer__brand-sub {
  font-size: 0.65rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cyan-400);
  line-height: 1;
  margin-top: 2px;
}

.footer__desc {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.footer__contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
}

.footer__contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: rgba(255,255,255,0.6);
  transition: color 0.2s;
}

a.footer__contact-item:hover { color: white; }

.footer__social {
  display: flex;
  gap: 0.5rem;
}

.footer__social-btn {
  width: 38px; height: 38px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  color: rgba(255,255,255,0.6);
  transition: all 0.2s;
}

.footer__social-btn:hover {
  background: rgba(29,111,232,0.2);
  border-color: rgba(29,111,232,0.4);
  color: white;
  transform: translateY(-2px);
}

/* Columns */
.footer__col-title {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: white;
  margin-bottom: 1.25rem;
}

.footer__links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer__link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  transition: all 0.2s;
}

.footer__link:hover {
  color: white;
  transform: translateX(3px);
}

.footer__link-dot {
  width: 4px; height: 4px;
  border-radius: 50%;
  background: var(--blue-500);
  flex-shrink: 0;
  transition: background 0.2s;
}

.footer__link:hover .footer__link-dot {
  background: var(--cyan-400);
}

/* Newsletter */
.footer__newsletter-desc {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.footer__newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.footer__newsletter-input {
  width: 100%;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  padding: 0.7rem 1rem;
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: white;
  outline: none;
  transition: border-color 0.2s;
}

.footer__newsletter-input::placeholder { color: rgba(255,255,255,0.35); }
.footer__newsletter-input:focus { border-color: var(--blue-400); }

.footer__newsletter-btn {
  width: 100%;
  justify-content: center;
}

.footer__certifications {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.footer__cert-badge {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: rgba(255,255,255,0.45);
}

/* Bottom */
.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.05);
  padding: 1.25rem 0;
}

.footer__bottom-inner {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  text-align: center;
}

@media (min-width: 768px) {
  .footer__bottom-inner {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer__copyright {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.35);
}

.footer__bottom-links {
  display: flex;
  gap: 1.25rem;
}

.footer__bottom-link {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.4);
  transition: color 0.2s;
}

.footer__bottom-link:hover { color: white; }
</style>
