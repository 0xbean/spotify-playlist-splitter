import type { Data } from '@dnd-kit/abstract'
import { Droppable } from '@dnd-kit/dom'
import type { DroppableInput } from '@dnd-kit/dom'
import { computed, watch } from 'vue'

export interface UseDroppableInput<T extends Data = Data>
  extends Omit<DroppableInput<T>, 'element'> {
  element?: Element
}

export function useDroppable<T extends Data = Data>(input: UseDroppableInput<T>, manager) {
  const { collisionDetector, data, disabled, id, accept, type } = input
  const element = computed(() => input.element)
  const droppable = new Droppable(
    {
      ...input,
      element
    },
    manager
  )
  const isDropTarget = computed(() => droppable.isDropTarget)

  watch(id, (val) => (droppable.id = val))
  watch(accept, (val) => (droppable.id = val))
  watch(collisionDetector, (val) => (droppable.id = val))
  watch(data, (val) => val && (droppable.data = val))
  watch(disabled, (val) => (droppable.disabled = val === true))
  watch(element, (val) => (droppable.element = val))
  watch(type, (val) => (droppable.id = val))

  return {
    get isDropTarget() {
      return isDropTarget.value
    },
    ref: droppable.element ?? undefined,
    droppable
  }
}
