const $storage:any = (key: string, value) => {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    return JSON.parse(localStorage.getItem(key))
  }
}
$storage.clear = () => {
  localStorage.clear()
}

export default $storage
