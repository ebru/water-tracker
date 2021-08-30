import moment from 'moment'

class DateUtil {
  static current = () => moment().unix()
  static today = () => moment().format('YYYY/MM/DD')
  static tomorrow = () => moment().add(1, 'days').format('YYYY/MM/DD')
}

export default DateUtil
