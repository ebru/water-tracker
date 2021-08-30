import { StyleSheet } from 'react-native'
import { THEME } from '@app/config/theme'
import { wp } from '@app/utils/responsive'

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingVertical: THEME.SPACING.S,
    paddingHorizontal: THEME.SPACING.M,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: THEME.COLORS['color-primary-400'],
    borderRadius: THEME.GLOBAL_RADIUS,
    lineHeight: wp(5.5),
    fontSize: wp(4.5),
    color: THEME.COLORS['color-primary-400'],
  },
  postFix: {
    position: 'absolute',
    top: '25%',
    right: '25%',
    lineHeight: wp(5.5),
    fontSize: wp(4.5),
    color: THEME.COLORS['color-primary-400'],
  },
})
