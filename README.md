# 〆

> A plugins 「〆」(collection) for Vue.

## Installation

```bash
npm i shime --save
```

## Usage

```javascript
import Vue from 'vue'
import Shime from 'shime'

Vue.use(Shime)
```

## Feature List

### $time

`$time.format(date: Date, fmtStr: string = 'YYYY-MM-DD')`

`$time.parse(str: string, fmtStr: string = 'YYYY-MM-DD')`

### $storage

`$storage(key: string, value?: string | number | boolean)`

`$storage.clear()`

## Dependencies List

* [fecha](https://github.com/taylorhakes/fecha)
