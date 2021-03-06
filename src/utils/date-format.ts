import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUtcString(
  uscString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(uscString).format(format)
}

export function formatTimestamp(
  timestamp: number,
  format: string = DATE_TIME_FORMAT
) {
  return ''
}
