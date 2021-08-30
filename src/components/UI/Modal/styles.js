import { StyleSheet } from 'react-native'
import { hp, wp } from '@app/utils/responsive'
import { THEME } from '@app/config/theme'

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    paddingTop: hp(20),
    paddingHorizontal: wp(10),
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: THEME.SPACING.M,
    padding: THEME.SPACING.L,
    paddingTop: 0,
    backgroundColor: 'white',
    borderRadius: THEME.GLOBAL_RADIUS,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    color: THEME.COLORS['color-primary-400'],
    fontWeight: 'bold',
    fontSize: wp(6),
    marginBottom: THEME.SPACING.S,
    textAlign: 'center',
  },
  closeBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: THEME.SPACING.S,
    marginRight: -wp(3.5),
  },
  closeIcon: {
    fontWeight: 'bold',
    color: THEME.COLORS['color-primary-400'],
    fontSize: wp(4.3),
  },
})
