import { ref } from 'vue'

export default function useAlert(startVisibility = false) {
  const alertIsVisible = ref(startVisibility)

  function showAlert() {
    alertIsVisible.value = true
  }

  function hideAlert() {
    alertIsVisible.value = false
  }

  return [
    alertIsVisible,
    showAlert,
    hideAlert
  ]
}