import { StyleSheet } from 'react-native'
import { hp, wp } from '@app/utils/responsive'
import { THEME } from '@app/config/theme'

export default StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: hp(2),
  },
  amountWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(8),
  },
  amount: {
    fontWeight: 'bold',
    fontSize: wp(6.5),
    color: 'white',
    opacity: 0.5,
    textAlign: 'center',
  },
  amountItem: {
    width: wp(30),
  },
  activeAmount: {
    opacity: 1,
  },
  addAmount: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: THEME.SPACING.L,
  },
  amountIconWrapper: {
    width: wp(15),
    height: wp(15),
  },
  amountIcon: {
    width: '100%',
    height: '100%',
  },
  minusIcon: {
    marginRight: 10,
  },
  plusIcon: {
    marginLeft: 10,
  },
})
