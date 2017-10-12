# 〆

> A plugins 「〆」(collection) for Vue.

## Installation

```bash
npm i shime --save
```

## Feature List

### $time

* $time.format(date, fmtStr)

| name | type | default |
| ---- | ---- | ---- |
| date | Date | - |
| fmtStr | string | YYYY-MM-DD |

* $time.parse(str, fmtStr)

| name | type | default |
| ---- | ---- | ---- |
| date | Date | - |
| fmtStr | string | YYYY-MM-DD |

### $storage

* $storage(key, value?)

| name | type | default |
| ---- | ---- | ---- |
| key | string | - |
| value | string | number | boolean | - |

* $storage.clear()

## Dependencies List

* [fecha](https://github.com/taylorhakes/fecha)
