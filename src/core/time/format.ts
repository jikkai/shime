import * as fecha from 'fecha'

function format (date, fmtStr = 'YYYY-MM-DD') {
  if (date) {
    date = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date
    return fecha.format(date, fmtStr)
  } else {
    return ''
  }
}

export default format
