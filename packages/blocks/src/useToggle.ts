import { ref } from 'vue-demi'

// interface UseToggle {}

// eslint error demo
// console.log('useToggle component loaded')

export const useToggle = () => {
    const value = ref(false)

    const toggle = () => {
        value.value = !value.value
    }

    return {
        value,
        toggle
    }
}
