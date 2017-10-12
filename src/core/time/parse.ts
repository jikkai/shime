import fecha from 'fecha'

function parse (str, fmtStr = 'YYYY-MM-DD') {
  if (str) {
    return fecha.parse(str, fmtStr)
  } else {
    return ''
  }
}

export default parse
