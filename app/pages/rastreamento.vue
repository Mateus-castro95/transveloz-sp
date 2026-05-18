<template>
  <div class="page-rastreamento">
    <section class="page-hero">
      <div class="page-hero__bg" aria-hidden="true">
        <div class="page-hero__grid"></div>
        <div class="page-hero__orb"></div>
      </div>
      <div class="container-xl page-hero__content">
        <div class="section-label"><IconActivity :size="14" />Rastreamento</div>
        <h1 class="page-hero__title">
          Rastreie sua carga<br />
          <span class="gradient-text">em tempo real</span>
        </h1>
        <p class="page-hero__desc">
          Saiba a localização exata da sua encomenda a qualquer momento. Insira o código de rastreamento ou o número do CT-e.
        </p>
      </div>
    </section>

    <section class="section-py">
      <div class="container-xl">
        <div class="rast__layout">
          <!-- Form -->
          <div class="rast__form-wrap">
            <div class="rast__form glass">
              <h2 class="rast__form-title">Consultar Carga</h2>

              <div class="rast__tabs">
                <button
                  v-for="tab in tabs"
                  :key="tab.id"
                  class="rast__tab"
                  :class="{ 'rast__tab--active': activeTab === tab.id }"
                  @click="activeTab = tab.id"
                >
                  {{ tab.label }}
                </button>
              </div>

              <form @submit.prevent="search" class="rast__search-form">
                <div class="rast__input-wrap">
                  <IconSearch :size="18" color="rgba(255,255,255,0.35)" />
                  <input
                    v-model="code"
                    type="text"
                    :placeholder="activeTab === 'codigo' ? 'Ex: TV2024001234' : 'Ex: 35240000000000'"
                    class="rast__input"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary w-full justify-center" :disabled="loading">
                  <span v-if="loading">Consultando...</span>
                  <span v-else>Rastrear Carga</span>
                  <IconArrowRight v-if="!loading" :size="18" />
                </button>
              </form>

              <p class="rast__hint">
                O código de rastreamento é enviado por e-mail após a emissão do CT-e.
              </p>
            </div>

            <!-- Result -->
            <Transition name="fade-up">
              <div v-if="result" class="rast__result glass">
                <div class="rast__result-header">
                  <div class="rast__result-status" :class="`rast__result-status--${result.status}`">
                    {{ result.statusLabel }}
                  </div>
                  <div class="rast__result-code">{{ result.code }}</div>
                </div>
                <div class="rast__result-info">
                  <div class="rast__result-row">
                    <span>Origem:</span><strong>{{ result.origin }}</strong>
                  </div>
                  <div class="rast__result-row">
                    <span>Destino:</span><strong>{{ result.destination }}</strong>
                  </div>
                  <div class="rast__result-row">
                    <span>Previsão:</span><strong>{{ result.eta }}</strong>
                  </div>
                </div>
                <div class="rast__timeline">
                  <div
                    v-for="(event, i) in result.events"
                    :key="i"
                    class="rast__event"
                    :class="{ 'rast__event--active': i === 0 }"
                  >
                    <div class="rast__event-dot"></div>
                    <div class="rast__event-content">
                      <div class="rast__event-title">{{ event.title }}</div>
                      <div class="rast__event-meta">{{ event.date }} — {{ event.location }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Info cards -->
          <div class="rast__info">
            <h3 class="rast__info-title">Como funciona</h3>
            <div v-for="step in steps" :key="step.title" class="rast__step glass">
              <div class="rast__step-num">{{ step.num }}</div>
              <div>
                <div class="rast__step-title">{{ step.title }}</div>
                <div class="rast__step-desc">{{ step.desc }}</div>
              </div>
            </div>
            <div class="rast__help glass">
              <h4 class="rast__help-title">Precisa de ajuda?</h4>
              <p class="rast__help-desc">Nossa central atende 24h por dia, 7 dias por semana.</p>
              <a href="tel:+551140028922" class="btn btn-primary w-full justify-center">
                <IconPhone :size="16" />
                (11) 4002-8922
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Activity as IconActivity } from 'lucide-vue-next'
import { Search as IconSearch } from 'lucide-vue-next'
import { ArrowRight as IconArrowRight } from 'lucide-vue-next'
import { Phone as IconPhone } from 'lucide-vue-next'

definePageMeta({ layout: 'default' })
useSeoMeta({
  title: 'Rastreamento de Carga — TransVeloz Logística',
  description: 'Rastreie sua carga em tempo real. Insira o código de rastreamento ou CT-e e acompanhe cada etapa da entrega.',
})

const activeTab = ref('codigo')
const code = ref('')
const loading = ref(false)
const result = ref<any>(null)

const tabs = [
  { id: 'codigo', label: 'Código de Rastreamento' },
  { id: 'cte', label: 'Número do CT-e' },
]

async function search() {
  loading.value = true
  result.value = null
  await new Promise(r => setTimeout(r, 1500))
  result.value = {
    code: code.value || 'TV2024001234',
    status: 'transit',
    statusLabel: 'Em Trânsito',
    origin: 'São Paulo, SP',
    destination: 'Curitiba, PR',
    eta: 'Amanhã até 18h00',
    events: [
      { title: 'Saiu para entrega', date: 'Hoje 08:32', location: 'Curitiba, PR' },
      { title: 'Chegou ao centro de distribuição', date: 'Ontem 23:15', location: 'Curitiba, PR' },
      { title: 'Em trânsito', date: 'Ontem 14:00', location: 'Registro, SP' },
      { title: 'Carga coletada', date: '20/01 09:00', location: 'São Paulo, SP' },
    ],
  }
  loading.value = false
}

const steps = [
  { num: '01', title: 'Digite o código', desc: 'Insira o código de rastreamento recebido por e-mail.' },
  { num: '02', title: 'Consulte o status', desc: 'Veja a localização atual e histórico completo da carga.' },
  { num: '03', title: 'Receba alertas', desc: 'Ative notificações por WhatsApp ou e-mail.' },
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

.rast__layout {
  display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: start;
}

@media (min-width: 1024px) {
  .rast__layout { grid-template-columns: 1.5fr 1fr; gap: 3rem; }
}

.rast__form-wrap { display: flex; flex-direction: column; gap: 1.5rem; }

.rast__form { border-radius: 20px; padding: 2rem; display: flex; flex-direction: column; gap: 1.25rem; }

.rast__form-title { font-family: var(--font-display); font-size: 1.3rem; font-weight: 700; color: white; }

.rast__tabs { display: flex; gap: 0.5rem; }

.rast__tab {
  flex: 1; padding: 0.6rem 0.75rem; border-radius: 10px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  font-family: var(--font-display); font-size: 0.8rem; font-weight: 600; color: rgba(255,255,255,0.55);
  cursor: pointer; transition: all 0.2s; text-align: center;
}

.rast__tab--active {
  background: rgba(29,111,232,0.15); border-color: rgba(29,111,232,0.35);
  color: white;
}

.rast__search-form { display: flex; flex-direction: column; gap: 0.75rem; }

.rast__input-wrap {
  display: flex; align-items: center; gap: 0.75rem;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px; padding: 0.85rem 1rem; transition: border-color 0.2s;
}

.rast__input-wrap:focus-within { border-color: var(--blue-400); }

.rast__input {
  flex: 1; background: transparent; border: none; outline: none;
  font-family: var(--font-body); font-size: 0.95rem; color: white;
}

.rast__input::placeholder { color: rgba(255,255,255,0.35); }

.rast__hint { font-size: 0.8rem; color: rgba(255,255,255,0.35); }

.w-full { width: 100%; }
.justify-center { justify-content: center; }

/* Result */
.rast__result { border-radius: 20px; padding: 1.75rem; display: flex; flex-direction: column; gap: 1.25rem; }

.rast__result-header { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }

.rast__result-status {
  font-family: var(--font-display); font-size: 0.8rem; font-weight: 700;
  padding: 0.35rem 0.9rem; border-radius: 100px;
}

.rast__result-status--transit {
  background: rgba(29,111,232,0.2); color: var(--blue-300);
  border: 1px solid rgba(29,111,232,0.3);
}

.rast__result-code { font-size: 0.8rem; color: rgba(255,255,255,0.4); }

.rast__result-info { display: flex; flex-direction: column; gap: 0.5rem; }

.rast__result-row {
  display: flex; gap: 1rem; font-size: 0.875rem;
  justify-content: space-between;
}

.rast__result-row span { color: rgba(255,255,255,0.45); }
.rast__result-row strong { color: white; }

.rast__timeline { display: flex; flex-direction: column; gap: 0; }

.rast__event {
  display: flex; gap: 1rem; position: relative; padding-bottom: 1rem;
}

.rast__event::before {
  content: ''; position: absolute; left: 7px; top: 16px; bottom: 0;
  width: 1px; background: rgba(255,255,255,0.1);
}

.rast__event:last-child::before { display: none; }
.rast__event:last-child { padding-bottom: 0; }

.rast__event-dot {
  width: 16px; height: 16px; border-radius: 50%; flex-shrink: 0; margin-top: 2px;
  background: rgba(255,255,255,0.15); border: 2px solid rgba(255,255,255,0.2);
}

.rast__event--active .rast__event-dot {
  background: var(--cyan-400); border-color: var(--cyan-400);
  box-shadow: 0 0 10px rgba(34,211,238,0.5);
}

.rast__event-title { font-size: 0.875rem; font-weight: 600; color: white; margin-bottom: 0.2rem; }
.rast__event-meta { font-size: 0.75rem; color: rgba(255,255,255,0.4); }

/* Info */
.rast__info { display: flex; flex-direction: column; gap: 1rem; }
.rast__info-title { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: white; }

.rast__step { border-radius: 14px; padding: 1.1rem 1.25rem; display: flex; gap: 1rem; align-items: flex-start; }

.rast__step-num {
  font-family: var(--font-display); font-size: 1.2rem; font-weight: 800;
  background: linear-gradient(135deg, var(--blue-400), var(--cyan-400));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; flex-shrink: 0;
}

.rast__step-title { font-family: var(--font-display); font-size: 0.9rem; font-weight: 700; color: white; margin-bottom: 0.25rem; }
.rast__step-desc { font-size: 0.8rem; color: rgba(255,255,255,0.5); }

.rast__help { border-radius: 16px; padding: 1.4rem; display: flex; flex-direction: column; gap: 0.75rem; }
.rast__help-title { font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: white; }
.rast__help-desc { font-size: 0.85rem; color: rgba(255,255,255,0.5); }

.fade-up-enter-active { animation: fadeUp 0.5s cubic-bezier(0.4,0,0.2,1); }
</style>
