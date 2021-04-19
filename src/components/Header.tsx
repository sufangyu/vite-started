import { defineComponent, PropType } from 'vue'

type Size = 'h1' | 'h2' | 'h3'

export default defineComponent({
  name: 'Header',
  props: {
    size: {
      type: String as PropType<Size>,
      default: 'md',
      validator: (value: Size) => ['h1', 'h2', 'h3'].includes(value),
    },
  },
  setup(props, { slots }) {
    return () => (
      <div class={[`${props.size}`]}>{slots.default?.()}</div>
    );
  },
});
