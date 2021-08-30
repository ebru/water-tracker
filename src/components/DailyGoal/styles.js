import { StyleSheet } from 'react-native'
import { wp } from '@app/utils/responsive'
import { THEME } from '@app/config/theme'

export default StyleSheet.create({
  root: {},
  description: {
    color: THEME.COLORS['color-primary-400'],
    textAlign: 'center',
    marginTop: THEME.SPACING.M,
    fontSize: wp(3.8),
  },
  dailyGoalInput: {
    marginTop: THEME.SPACING.L,
  },
  updateBtn: {
    marginTop: THEME.SPACING.M,
    marginBottom: THEME.SPACING.S,
  },
})
