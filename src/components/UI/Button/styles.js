import { StyleSheet } from 'react-native'
import { wp } from '@app/utils/responsive'
import { THEME } from '@app/config/theme'

export default StyleSheet.create({
  btn: {
    padding: THEME.SPACING.S,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: THEME.COLORS['color-primary-400'],
    borderRadius: THEME.GLOBAL_RADIUS,
    backgroundColor: THEME.COLORS['color-primary-400'],
  },
  btnText: {
    color: 'white',
    lineHeight: wp(5.5),
    fontSize: wp(4.0),
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
