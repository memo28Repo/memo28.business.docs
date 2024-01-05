---
outline: deep
---

# Slide 效果


滑动效果参考


- [slide-left](https://animista.net/play/entrances/slide-in/slide-in-left)

- [slide-right](https://animista.net/play/entrances/slide-in/slide-in-right)

- [slide-top](https://animista.net/play/entrances/slide-in/slide-in-top)

- [slide-bottom](https://animista.net/play/entrances/slide-in/slide-in-bottom)

- [slide-top-blurred](https://animista.net/play/entrances/slide-in-blurred)

- [slide-bottom-blurred](https://animista.net/play/entrances/slide-in-blurred/slide-in-blurred-bottom)
 
- [slide-left-blurred](https://animista.net/play/entrances/slide-in-blurred/slide-in-blurred-left)
 
- [slide-right-blurred](https://animista.net/play/entrances/slide-in-blurred/slide-in-blurred-right)



```ts
// router.ts
import { globalBeforeEach , SliceMeta, ANIMATE_NAME } from '@memo28.business/vue-page-animations'

const router = createRouter(
    {
        router: [
            {
                //  选择动画类型 用于页面进入模式
                meta: {  slideType: ANIMATE_NAME.Slide_Bottom  } as SliceMeta
            }
        ]
    }
)


globalBeforeEach(router)
```


```vue

<script lang="ts" setup>
  import Slice from '@memo28.business/vue-page-animations/src/features/slide/slide.vue';
</script>

<template>
  <!-- 使用slide组件包裹router-view -->
  <Slice>
    <router-view></router-view>
  </Slice>
</template>

```
