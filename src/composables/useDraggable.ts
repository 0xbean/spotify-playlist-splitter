import type { Data, UniqueIdentifier } from '@dnd-kit/abstract'
import { Draggable } from '@dnd-kit/dom'
import type { DraggableInput } from '@dnd-kit/dom'
import { computed, watch } from 'vue'

export interface UseDraggableInput<T extends Data = Data>
  extends Omit<DraggableInput<T>, 'handle' | 'element'> {
  handle?: Element
  element?: Element
}

export function useDraggable<T extends Data = Data>(input: UseDraggableInput<T>, manager) {
  const { disabled, data, id, modifiers, sensors } = input
  const handle = computed(() => input.handle)
  const element = computed(() => input.element)
  const isDragSource = computed(() => draggable.isDragSource)
  const status = computed(() => draggable.status)
  const draggable = new Draggable(
    {
      ...input,
      handle,
      element
    },
    manager
  )

  watch(id, (val: UniqueIdentifier) => {
    draggable.id = val
  })
  watch(handle, (val) => {
    draggable.handle = val
  })
  watch(element, (val) => {
    draggable.element = val
  })
  watch(data, (val) => {
    draggable.data = val
  })
  watch(disabled, (val) => {
    draggable.disabled = val === true
  })
  watch(sensors, (val) => {
    draggable.sensors = val
  })
  watch(modifiers, (val) => {
    draggable.modifiers = val
  })
  watch(input.feedback, (val) => {
    draggable.feedback = val ?? 'default'
  })

  return {
    draggable,
    get isDragSource() {
      return isDragSource.value
    },
    get status() {
      return status.value
    },
    handleRef: draggable.handle ?? undefined,
    ref: draggable.element ?? undefined
  }
}
