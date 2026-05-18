<template>
  <div class="page-contato">
    <section class="page-hero">
      <div class="page-hero__bg" aria-hidden="true">
        <div class="page-hero__grid"></div>
        <div class="page-hero__orb"></div>
      </div>
      <div class="container-xl page-hero__content">
        <div class="section-label"><IconPhone :size="14" />Fale Conosco</div>
        <h1 class="page-hero__title">
          Vamos conversar<br />
          <span class="gradient-text">sobre seu projeto?</span>
        </h1>
        <p class="page-hero__desc">
          Nossa equipe comercial responde em até 2 horas úteis. Solicite uma cotação sem compromisso e descubra as melhores soluções para sua empresa.
        </p>
      </div>
    </section>

    <section class="section-py">
      <div class="container-xl">
        <div class="contato__layout">
          <!-- Form -->
          <div class="contato__form-wrap glass">
            <h2 class="contato__form-title">Enviar Mensagem</h2>
            <p class="contato__form-sub">Preencha o formulário e retornaremos em até 2 horas úteis.</p>

            <form @submit.prevent="submitForm" class="contato__form">
              <div class="contato__row">
                <div class="contato__field">
                  <label class="contato__label">Nome completo *</label>
                  <input v-model="form.name" type="text" class="contato__input" placeholder="Seu nome" required />
                </div>
                <div class="contato__field">
                  <label class="contato__label">E-mail corporativo *</label>
                  <input v-model="form.email" type="email" class="contato__input" placeholder="email@empresa.com" required />
                </div>
              </div>
              <div class="contato__row">
                <div class="contato__field">
                  <label class="contato__label">Telefone / WhatsApp *</label>
                  <input v-model="form.phone" type="tel" class="contato__input" placeholder="(11) 99999-9999" required />
                </div>
                <div class="contato__field">
                  <label class="contato__label">Empresa</label>
                  <input v-model="form.company" type="text" class="contato__input" placeholder="Nome da empresa" />
                </div>
              </div>
              <div class="contato__field">
                <label class="contato__label">Tipo de serviço</label>
                <select v-model="form.service" class="contato__input contato__select">
                  <option value="">Selecione um serviço</option>
                  <option v-for="s in services" :key="s" :value="s">{{ s }}</option>
                </select>
              </div>
              <div class="contato__field">
                <label class="contato__label">Mensagem *</label>
                <textarea v-model="form.message" class="contato__input contato__textarea" placeholder="Descreva suas necessidades logísticas..." required rows="5"></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-lg w-full justify-center" :disabled="submitted">
                <span v-if="submitted">✓ Mensagem enviada!</span>
                <span v-else>Enviar Mensagem</span>
                <IconArrowRight v-if="!submitted" :size="18" />
              </button>
            </form>
          </div>

          <!-- Sidebar -->
          <div class="contato__sidebar">
            <!-- Contact info -->
            <div class="contato__info-card glass">
              <h3 class="contato__info-title">Informações de Contato</h3>
              <div class="contato__info-list">
                <div class="contato__info-item">
                  <div class="contato__info-icon">
                    <IconPhone :size="18" color="var(--cyan-400)" />
                  </div>
                  <div>
                    <div class="contato__info-label">Central de Atendimento</div>
                    <a href="tel:+551140028922" class="contato__info-value">(11) 4002-8922</a>
                    <div class="contato__info-sub">24h / 7 dias por semana</div>
                  </div>
                </div>
                <div class="contato__info-item">
                  <div class="contato__info-icon">
                    <IconMail :size="18" color="var(--cyan-400)" />
                  </div>
                  <div>
                    <div class="contato__info-label">E-mail Comercial</div>
                    <a href="mailto:comercial@transveloz.com.br" class="contato__info-value">comercial@transveloz.com.br</a>
                    <div class="contato__info-sub">Resposta em até 2h úteis</div>
                  </div>
                </div>
                <div class="contato__info-item">
                  <div class="contato__info-icon">
                    <IconMapPin :size="18" color="var(--cyan-400)" />
                  </div>
                  <div>
                    <div class="contato__info-label">Sede</div>
                    <div class="contato__info-value">Av. Paulista, 1000 — 15º andar</div>
                    <div class="contato__info-sub">São Paulo, SP — CEP 01310-100</div>
                  </div>
                </div>
                <div class="contato__info-item">
                  <div class="contato__info-icon">
                    <IconClock :size="18" color="var(--cyan-400)" />
                  </div>
                  <div>
                    <div class="contato__info-label">Horário Comercial</div>
                    <div class="contato__info-value">Seg–Sex: 08h às 18h</div>
                    <div class="contato__info-sub">Plantão 24h para emergências</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Guarantees -->
            <div class="contato__guarantees glass">
              <h3 class="contato__info-title">Por que solicitar conosco?</h3>
              <ul class="contato__guarantee-list">
                <li v-for="g in guarantees" :key="g">
                  <IconCheck :size="14" color="var(--cyan-400)" />
                  {{ g }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Phone as IconPhone } from 'lucide-vue-next'
import { Mail as IconMail } from 'lucide-vue-next'
import { MapPin as IconMapPin } from 'lucide-vue-next'
import { Clock as IconClock } from 'lucide-vue-next'
import { Check as IconCheck } from 'lucide-vue-next'
import { ArrowRight as IconArrowRight } from 'lucide-vue-next'

definePageMeta({ layout: 'default' })
useSeoMeta({
  title: 'Contato — TransVeloz Logística | Solicite sua Cotação',
  description: 'Entre em contato com a TransVeloz. Solicite cotação, tire dúvidas ou fale com nossa central 24h. Resposta em até 2 horas úteis.',
})

const submitted = ref(false)
const form = reactive({
  name: '', email: '', phone: '', company: '', service: '', message: '',
})

function submitForm() {
  submitted.value = true
}

const services = [
  'Transporte Rodoviário (FTL)',
  'Carga Fracionada (LTL)',
  'Carga Expressa',
  'Logística Empresarial',
  'Distribuição Nacional',
  'Outro',
]

const guarantees = [
  'Cotação gratuita sem compromisso',
  'Resposta em até 2 horas úteis',
  'Preços competitivos e transparentes',
  'Sem taxa de cadastro ou adesão',
  'Suporte dedicado pós-contratação',
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

.contato__layout {
  display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: start;
}

@media (min-width: 1024px) {
  .contato__layout { grid-template-columns: 1.5fr 1fr; gap: 3rem; }
}

.contato__form-wrap { border-radius: 24px; padding: 2.5rem; }

.contato__form-title {
  font-family: var(--font-display); font-size: 1.4rem; font-weight: 700;
  color: white; margin-bottom: 0.5rem;
}

.contato__form-sub { font-size: 0.875rem; color: rgba(255,255,255,0.5); margin-bottom: 1.75rem; }

.contato__form { display: flex; flex-direction: column; gap: 1.25rem; }

.contato__row {
  display: grid; grid-template-columns: 1fr; gap: 1.25rem;
}

@media (min-width: 640px) {
  .contato__row { grid-template-columns: 1fr 1fr; }
}

.contato__field { display: flex; flex-direction: column; gap: 0.4rem; }

.contato__label {
  font-family: var(--font-display); font-size: 0.8rem; font-weight: 600;
  color: rgba(255,255,255,0.65); letter-spacing: 0.02em;
}

.contato__input {
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px; padding: 0.85rem 1rem;
  font-family: var(--font-body); font-size: 0.9rem; color: white;
  outline: none; transition: border-color 0.2s; width: 100%;
}

.contato__input::placeholder { color: rgba(255,255,255,0.3); }
.contato__input:focus { border-color: var(--blue-400); background: rgba(29,111,232,0.05); }

.contato__select { appearance: none; cursor: pointer; }
.contato__select option { background: var(--navy-900); color: white; }

.contato__textarea { resize: vertical; min-height: 120px; }

.w-full { width: 100%; }
.justify-center { justify-content: center; }

/* Sidebar */
.contato__sidebar { display: flex; flex-direction: column; gap: 1.25rem; }

.contato__info-card, .contato__guarantees {
  border-radius: 20px; padding: 1.75rem;
}

.contato__info-title {
  font-family: var(--font-display); font-size: 1rem; font-weight: 700;
  color: white; margin-bottom: 1.25rem;
}

.contato__info-list { display: flex; flex-direction: column; gap: 1.25rem; }

.contato__info-item { display: flex; gap: 1rem; align-items: flex-start; }

.contato__info-icon {
  width: 40px; height: 40px; border-radius: 10px;
  background: rgba(34,211,238,0.1); border: 1px solid rgba(34,211,238,0.15);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}

.contato__info-label { font-size: 0.75rem; color: rgba(255,255,255,0.4); margin-bottom: 0.2rem; }

.contato__info-value {
  font-family: var(--font-display); font-size: 0.9rem; font-weight: 600; color: white;
  display: block; transition: color 0.2s;
}

a.contato__info-value:hover { color: var(--cyan-400); }

.contato__info-sub { font-size: 0.75rem; color: rgba(255,255,255,0.4); margin-top: 0.15rem; }

.contato__guarantee-list {
  list-style: none; display: flex; flex-direction: column; gap: 0.65rem;
}

.contato__guarantee-list li {
  display: flex; align-items: center; gap: 0.6rem;
  font-size: 0.875rem; color: rgba(255,255,255,0.6);
}
</style>
