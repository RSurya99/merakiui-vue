<template>
  <div v-if="fullWidth" class="w-full text-white" :class="bgColor">
    <div class="container flex items-center justify-between px-6 py-4 mx-auto">
      <div class="flex">
        <slot name="svg">
          <svg
            class="w-6 h-6 text-white fill-current"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-if="type === 'success'"
              d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
            />
            <path
              v-if="type === 'info' || type === 'warning'"
              d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
            />
            <path
              v-if="type === 'error'"
              d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
            />
          </svg>
        </slot>

        <p class="mx-3">{{ title }}</p>
      </div>

      <button
        class="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none"
        @click="$emit('close')"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 18L18 6M6 6L18 18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
  <div
    v-else
    class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
    v-bind="$attrs"
  >
    <div class="flex" v-if="type === 'notification-pop'">
      <div class="w-2 bg-gray-800 dark:bg-white"></div>

      <div class="flex items-center px-2 py-3">
        <img v-if="img" class="object-cover w-10 h-10 rounded-full" :src="img" />

        <div class="mx-3">
          <p class="text-gray-600 dark:text-gray-200">
            <slot name="content">{{ title }}</slot>
          </p>
        </div>
      </div>
    </div>
    <div class="flex" v-else>
      <div class="flex items-center justify-center w-12" :class="bgColor">
        <slot name="svg">
          <svg
            class="w-6 h-6 text-white fill-current"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-if="type === 'success'"
              d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
            />
            <path
              v-if="type === 'info' || type === 'warning'"
              d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
            />
            <path
              v-if="type === 'error'"
              d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
            />
          </svg>
        </slot>
      </div>

      <div class="px-4 py-2 -mx-3">
        <slot name="content">
          <div class="mx-3">
            <span class="font-semibold" :class="titleColor">
              {{ title ? title : capitalizeType }}
            </span>
            <p class="text-sm text-gray-600 dark:text-gray-200">{{ text }}</p>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Alert',
  props: {
    type: {
      type: String,
      default: 'success', // success, info, warning, error, notification-pop
    },
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    capitalizeType() {
      return this.type.charAt(0).toUpperCase() + this.type.slice(1)
    },
    titleColor() {
      if (this.type === 'success') {
        return 'text-emerald-500 dark:text-emerald-400'
      } else if (this.type === 'info') {
        return 'text-blue-500 dark:text-blue-400'
      } else if (this.type === 'warning') {
        return 'text-yellow-500 dark:text-yellow-400'
      } else if (this.type === 'error') {
        return 'text-red-500 dark:text-red-400'
      }
      return 'text-gray-500 dark:text-gray-400'
    },
    bgColor() {
      if (this.type === 'success') {
        return 'bg-emerald-500'
      } else if (this.type === 'info') {
        return 'bg-blue-500'
      } else if (this.type === 'warning') {
        return 'bg-yellow-500'
      } else if (this.type === 'error') {
        return 'bg-red-500'
      }
      return 'bg-gray-500'
    },
  },
}
</script>
