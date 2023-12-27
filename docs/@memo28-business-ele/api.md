---
outline: deep
---

# API 文档


## table

### `indexReverseOrder` 索引倒序

```ts
import { indexReverseOrder } from '@memo28.business/ele'

indexReverseOrder({
    pageSize,
    pageNo,
    total
})
```


### `sortIndexInOrder` 索引正序

```ts
import { sortIndexInOrder } from '@memo28.business/ele'

sortIndexInOrder({
    pageSize,
    pageNo,
    total
})
```


## date-picker

### `disableOneDay` 禁用某天



```ts
import { disableOneDay } from '@memo28.business/ele'

disableOneDay(["2023-8-12"], Date) // boolean
```

### `notDisableOneDay` 不禁用某天


```ts
import { notDisableOneDay } from '@memo28.business/ele'

notDisableOneDay(["2023-8-12"], Date) // boolean
```


### `disableStartRange` 禁用开始时间之前的所有时间

```ts
import { disableStartRange } from '@memo28.business/ele'

disableStartRange("2023-8-12", Date) // boolean
```


### `disableEndRange` 禁用结束时间之后的所有时间

```ts
import { disableEndRange } from '@memo28.business/ele'

disableEndRange("2023-8-12", Date) // boolean
```

