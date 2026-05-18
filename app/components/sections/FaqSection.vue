<template>
  <section class="faq-section section-py" id="faq">
    <div class="container-xl">
      <div class="faq-section__header">
        <div class="section-label">
          <IconSearch :size="14" />
          Perguntas Frequentes
        </div>
        <h2 class="faq-section__title">
          Tire suas dúvidas<br />
          <span class="gradient-text">sobre nossos serviços</span>
        </h2>
      </div>

      <div class="faq-section__grid">
        <div class="faq-section__list">
          <div
            v-for="(item, i) in faqs"
            :key="i"
            class="faq-item"
            :class="{ 'faq-item--open': openIndex === i }"
          >
            <button class="faq-item__question" @click="toggle(i)">
              <span>{{ item.question }}</span>
              <div class="faq-item__icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </button>
            <Transition name="faq-answer">
              <div v-if="openIndex === i" class="faq-item__answer">
                <p>{{ item.answer }}</p>
              </div>
            </Transition>
          </div>
        </div>

        <div class="faq-section__cta glass">
          <div class="faq-section__cta-icon">💬</div>
          <h3 class="faq-section__cta-title">Ainda tem dúvidas?</h3>
          <p class="faq-section__cta-desc">Nossa equipe está disponível 24h por dia para responder todas as suas perguntas.</p>
          <div class="faq-section__cta-btns">
            <a href="tel:+551140028922" class="btn btn-primary w-full justify-center">
              Ligar agora
            </a>
            <NuxtLink to="/contato" class="btn btn-outline w-full justify-center">
              Enviar mensagem
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Search as IconSearch } from 'lucide-vue-next'

const openIndex = ref(0)
function toggle(i: number) {
  openIndex.value = openIndex.value === i ? -1 : i
}

const faqs = [
  {
    question: 'Quais estados o serviço de transporte da TransVeloz atende?',
    answer: 'Atendemos todos os 26 estados brasileiros e o Distrito Federal. Temos base em São Paulo e filiais estratégicas em Curitiba, Rio de Janeiro, Salvador, Recife, Manaus e Belém para garantir eficiência em todo o território nacional.',
  },
  {
    question: 'Como funciona o rastreamento de carga em tempo real?',
    answer: 'Toda a nossa frota é equipada com GPS satelital e conectada ao nosso sistema de controle. Você recebe um código de rastreamento no momento do embarque e pode acompanhar a localização da sua carga através do nosso site, app ou WhatsApp.',
  },
  {
    question: 'O seguro da carga está incluso no frete?',
    answer: 'Sim! Todas as cargas transportadas pela TransVeloz possuem cobertura de seguro inclusa no valor do frete. Para cargas de alto valor, oferecemos seguros complementares com cobertura ampliada.',
  },
  {
    question: 'Qual o prazo mínimo para cotação e agendamento de coleta?',
    answer: 'Cotações são respondidas em até 2 horas úteis. Para coletas agendadas, precisamos de no mínimo 24h de antecedência para cargas fracionadas e 48h para cargas completas. Cargas expressas podem ser agendadas com menor antecedência, sujeito à disponibilidade.',
  },
  {
    question: 'A TransVeloz atende cargas de pequeno e médio porte?',
    answer: 'Absolutamente! Nossa modalidade de Carga Fracionada foi desenvolvida especialmente para este perfil. Você paga apenas pelo espaço que sua carga ocupa, tornando o frete acessível para qualquer volume.',
  },
  {
    question: 'Como funciona a emissão de nota fiscal e documentação de transporte?',
    answer: 'Emitimos automaticamente o CT-e (Conhecimento de Transporte Eletrônico) para todas as operações. A documentação completa fica disponível no portal do cliente e é enviada por e-mail após o embarque.',
  },
]
</script>

<style scoped>
.faq-section { background: var(--navy-900); }

.faq-section__header {
  text-align: center; display: flex; flex-direction: column;
  align-items: center; margin-bottom: 3.5rem;
}

.faq-section__title { font-size: clamp(1.8rem, 3vw, 3rem); color: white; }

.faq-section__grid {
  display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: start;
}

@media (min-width: 1024px) {
  .faq-section__grid { grid-template-columns: 1fr 340px; gap: 3rem; }
}

.faq-section__list { display: flex; flex-direction: column; gap: 0.5rem; }

.faq-item {
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 14px;
  overflow: hidden;
  transition: border-color 0.2s;
}

.faq-item--open {
  border-color: rgba(29,111,232,0.3);
  background: rgba(29,111,232,0.04);
}

.faq-item__question {
  width: 100%; display: flex; align-items: center; justify-content: space-between;
  gap: 1rem; padding: 1.25rem 1.5rem;
  background: transparent; border: none; cursor: pointer;
  font-family: var(--font-display); font-size: 0.95rem; font-weight: 600;
  color: white; text-align: left; transition: background 0.2s;
}

.faq-item__question:hover { background: rgba(255,255,255,0.03); }

.faq-item__icon {
  width: 28px; height: 28px; border-radius: 8px;
  background: rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; color: var(--cyan-400);
  transition: transform 0.3s, background 0.2s;
}

.faq-item--open .faq-item__icon {
  transform: rotate(180deg);
  background: rgba(29,111,232,0.2);
}

.faq-item__answer { padding: 0 1.5rem 1.25rem; }
.faq-item__answer p { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.75; }

.faq-answer-enter-active, .faq-answer-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.faq-answer-enter-from, .faq-answer-leave-to {
  opacity: 0; max-height: 0;
}

.faq-answer-enter-to, .faq-answer-leave-from {
  opacity: 1; max-height: 200px;
}

.faq-section__cta {
  border-radius: 20px; padding: 2rem;
  display: flex; flex-direction: column; gap: 1rem;
  position: sticky; top: 100px;
}

.faq-section__cta-icon { font-size: 2.5rem; }

.faq-section__cta-title {
  font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; color: white;
}

.faq-section__cta-desc { font-size: 0.875rem; color: rgba(255,255,255,0.55); line-height: 1.6; }

.faq-section__cta-btns { display: flex; flex-direction: column; gap: 0.6rem; }

.w-full { width: 100%; }
.justify-center { justify-content: center; }
</style>
