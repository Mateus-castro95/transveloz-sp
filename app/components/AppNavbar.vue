<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled, 'navbar--open': menuOpen }">
    <div class="container-xl navbar__inner">
      <!-- Logo -->
      <NuxtLink to="/" class="navbar__logo" @click="closeMenu">
        <div class="navbar__logo-icon">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M2 22L10 8L18 16L24 10L30 22H2Z" fill="url(#logoGrad)" />
            <circle cx="24" cy="10" r="3" fill="#22d3ee" />
            <defs>
              <linearGradient id="logoGrad" x1="2" y1="22" x2="30" y2="8" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1d6fe8" />
                <stop offset="1" stop-color="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="navbar__logo-text">
          <span class="navbar__brand">TransVeloz</span>
          <span class="navbar__tagline">Logística</span>
        </div>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="navbar__nav" aria-label="Navegação principal">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="navbar__link"
          :class="{ 'navbar__link--active': $route.path === item.to }"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Desktop CTA -->
      <div class="navbar__actions">
        <NuxtLink to="/rastreamento" class="btn btn-outline btn-sm">
          <IconTruck />
          Rastrear Carga
        </NuxtLink>
        <NuxtLink to="/contato" class="btn btn-primary btn-sm">
          Solicitar Orçamento
        </NuxtLink>
      </div>

      <!-- Hamburger -->
      <button
        class="navbar__hamburger"
        :class="{ 'navbar__hamburger--open': menuOpen }"
        @click="toggleMenu"
        aria-label="Menu"
        :aria-expanded="menuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="menuOpen" class="navbar__mobile">
        <nav class="navbar__mobile-nav">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="navbar__mobile-link"
            @click="closeMenu"
          >
            {{ item.label }}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
        </nav>
        <div class="navbar__mobile-actions">
          <NuxtLink to="/rastreamento" class="btn btn-outline w-full" @click="closeMenu">
            <IconTruck />
            Rastrear Carga
          </NuxtLink>
          <NuxtLink to="/contato" class="btn btn-primary w-full" @click="closeMenu">
            Solicitar Orçamento
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { Truck as IconTruck } from 'lucide-vue-next'

const scrolled = ref(false)
const menuOpen = ref(false)
const route = useRoute()

const navItems = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Áreas Atendidas', to: '/areas-atendidas' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contato', to: '/contato' },
]

function toggleMenu() { menuOpen.value = !menuOpen.value }
function closeMenu() { menuOpen.value = false }

onMounted(() => {
  const handler = () => { scrolled.value = window.scrollY > 30 }
  window.addEventListener('scroll', handler, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handler))
})

watch(() => route.path, closeMenu)
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding-block: 1.25rem;
}

.navbar--scrolled {
  background: rgba(4, 9, 26, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding-block: 0.9rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.4);
}

.navbar__inner {
  display: flex;
  align-items: center;
  gap: 2rem;
}

/* Logo */
.navbar__logo {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-shrink: 0;
}

.navbar__logo-icon {
  width: 40px;
  height: 40px;
  background: rgba(29, 111, 232, 0.12);
  border: 1px solid rgba(29, 111, 232, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar__logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
  gap: 0.15rem;
}

.navbar__brand {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: white;
}

.navbar__tagline {
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cyan-400);
}

/* Desktop Nav */
.navbar__nav {
  display: none;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
  justify-content: center;
}

@media (min-width: 1024px) {
  .navbar__nav { display: flex; }
}

.navbar__link {
  font-family: var(--font-display);
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  padding: 0.5rem 0.85rem;
  border-radius: 8px;
  transition: all 0.2s;
  position: relative;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--blue-400), var(--cyan-400));
  border-radius: 1px;
  transition: width 0.3s;
}

.navbar__link:hover {
  color: white;
  background: rgba(255,255,255,0.06);
}

.navbar__link:hover::after,
.navbar__link--active::after {
  width: 20px;
}

.navbar__link--active {
  color: white;
}

/* Actions */
.navbar__actions {
  display: none;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

@media (min-width: 1024px) {
  .navbar__actions { display: flex; }
}

.btn-sm {
  padding: 0.6rem 1.15rem;
  font-size: 0.825rem;
}

/* Hamburger */
.navbar__hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: auto;
  transition: background 0.2s;
}

.navbar__hamburger:hover {
  background: rgba(255,255,255,0.1);
}

@media (min-width: 1024px) {
  .navbar__hamburger { display: none; }
}

.navbar__hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.navbar__hamburger--open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.navbar__hamburger--open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.navbar__hamburger--open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Menu */
.navbar__mobile {
  background: rgba(4, 9, 26, 0.98);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-top: 1px solid rgba(255,255,255,0.07);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .navbar__mobile { display: none; }
}

.navbar__mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.navbar__mobile-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  padding: 1rem 1.25rem;
  border-radius: 12px;
  transition: all 0.2s;
  border: 1px solid transparent;
}

.navbar__mobile-link:hover {
  color: white;
  background: rgba(255,255,255,0.06);
  border-color: rgba(255,255,255,0.08);
}

.navbar__mobile-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.w-full {
  width: 100%;
  justify-content: center;
}

/* Transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
