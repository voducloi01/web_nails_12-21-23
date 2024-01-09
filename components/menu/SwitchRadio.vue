<template>
  <div class="w-max relative" ref="radioSwithRef">
    <div
      class="px-4 radio-switch"
      :style="
        fullWidth
          ? `grid-template-columns: repeat(${items.length}, minmax(0, 1fr));`
          : ''
      "
    >
      <template v-for="(item, index) in items" :key="index">
        <label
          class="flex-center radio-switch__label px-4 whitespace-nowrap first-of-type:pl-0 last-of-type:pr-0"
          @click.prevent="handleSelectRadio(index, $event)"
          @touchstart.prevent="handleSelectRadio(index, $event)"
        >
          <p class="pointer-events-none font-sfPro_semibold">
            {{ item.title_item }}
          </p>
        </label>
      </template>
      <div
        class="flex-center radio-switch__selected overflow-hidden truncate ..."
        :style="selectStyle"
      >
        <p class="pointer-events-none font-sfPro_semibold">
          {{ labelActive }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Value } from 'sass';
import { ref, computed, onMounted } from 'vue';

//PINIA
// import { useOrderStore } from "@/stores/order";

//COMPONENT

interface Props {
  items: any[];
  fullWidth?: boolean;
  modelValue: any;
}

const props = withDefaults(defineProps<Props>(), {
  fullWidth: false,
});

const emits = defineEmits<{
  (e: 'update:modelValue', id: string): void;
  (e: 'change'): void;
}>();

const myValue = computed({
  get() {
    return props.modelValue;
  },
  set(id) {
    emits('update:modelValue', id);
  },
});
// const labelActive = computed(() => {
//     let item = props.items.find((element: any) => myValue.value == element.value)
//     return item.label || '';
// })
const selectStyle = computed(() => {
  let result = '';
  if (selectedWidth.value) result = result + `width: ${selectedWidth.value}; `;
  if (selectedLeft.value)
    result = result + `transform: ${selectedLeft.value}; `;
  return result;
});

onMounted(() => {
  myValue.value = data.value[0].value;
  let radioELList = radioSwithRef.value.querySelectorAll(
    '.radio-switch__label'
  );
  if (radioELList && radioELList.length) {
    handleSelectRadio(0, { target: radioELList[0] });
  }
});

//DATA

const data = ref([
  { label: 'asf', value: 21 },
  { label: 'bbb', value: 221 },
]);
const selectedWidth = ref('');
const selectedLeft = ref('');
const radioSwithRef = ref<any>(null);
const labelActive = ref('');

//FUNCTION
const handleSelectRadio = (index: number, e: any) => {
  // labelActive.value = ''
  setTimeout(() => {
    labelActive.value = props.items[index].title_item;
  }, 100);
  myValue.value = props.items[index].value;
  const label = e.target as HTMLElement;
  let containerEle = radioSwithRef.value.querySelector('.radio-switch');

  if (label) {
    const labelRect = label.getBoundingClientRect();
    const containerRect = containerEle.getBoundingClientRect();
    const left =
      labelRect.left - (props.fullWidth ? 0 : 16) - containerRect.left;
    selectedWidth.value = `${label.clientWidth}px`;
    selectedLeft.value = `translateX(${left}px)`;
  }
};
// const orderStore = useOrderStore();
</script>

<style lang="scss" scoped>
.radio-switch {
  display: flex;
  min-height: 50px;
  position: relative;
  &__label {
    cursor: pointer;
    font-size: 20px;
    min-width: 150px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__input {
    display: none;
  }
  &__selected {
    position: absolute;
    color: #fff;
    text-align: center;
    transition: all 0.6s ease-in-out;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    border-radius: 100px;
    font-weight: 600;
    font-size: 20px;
  }
}
</style>
