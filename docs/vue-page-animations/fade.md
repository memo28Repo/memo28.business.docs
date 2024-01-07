---
outline: deep
---

# fade 效果


滑动效果参考

[fade-in](https://animista.net/play/entrances/fade-in/fade-in)



```ts
// router.ts
import { globalBeforeEach , FadeMeta, ANIMATE_NAME } from '@memo28.business/vue-page-animations'

const router = createRouter(
    {
        router: [
            {
                //  选择动画类型 用于页面进入模式
                meta: {  fadeType: ANIMATE_NAME.Fade_in  } as FadeMeta
            }
        ]
    }
)


globalBeforeEach(router)
```


```vue

<script lang="ts" setup>
  import Fade from '@memo28.business/vue-page-animations/src/features/fade/fade.vue';
</script>

<template>
  <!-- 使用Fade组件包裹router-view -->
  <Fade>
    <router-view></router-view>
  </Fade>
</template>

```
