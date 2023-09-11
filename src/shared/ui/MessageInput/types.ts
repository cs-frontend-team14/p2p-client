import type { Component } from 'vue'
export interface Props {
  placeholder: string
  method: (payload: MouseEvent | KeyboardEvent) => void
  icon: Component
}