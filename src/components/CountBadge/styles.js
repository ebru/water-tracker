import { StyleSheet } from 'react-native'
import { hp, wp } from '@app/utils/responsive'
import { THEME } from '@app/config/theme'

export default StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(3),
  },
  countWrapper: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: THEME.SPACING.L,
  },
  count: {
    fontSize: wp(10),
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    marginTop: THEME.SPACING.XS,
    color: 'white',
    fontSize: wp(3.8),
    textAlign: 'center',
  },
})
