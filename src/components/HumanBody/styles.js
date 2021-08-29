import { StyleSheet } from 'react-native'
import { THEME } from '@app/config/theme'
import { wp } from '@app/utils/responsive'

const HUMAN_BODY_WIDTH = 147
const HUMAN_BODY_HEIGHT = 338

export default StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  humanBody: {
    flexDirection: 'column-reverse',
    width: HUMAN_BODY_WIDTH,
    height: HUMAN_BODY_HEIGHT,
  },
  graphic: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 10,
  },
  progress: {
    width: '100%',
    backgroundColor: THEME.COLORS['color-primary-900'],
  },
  callToActionWrapper: {
    paddingVertical: THEME.SPACING.L,
    width: HUMAN_BODY_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  callToAction: {
    fontWeight: 'bold',
    fontSize: wp(4.5),
    color: 'white',
    textAlign: 'center',
  },
  dailyGoalWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginTop: -8,
    marginRight: -75,
  },
  dailyGoal: {
    color: 'white',
    fontWeight: '600',
    fontSize: wp(4),
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pencilIcon: {
    width: wp(4),
    height: wp(4),
    marginLeft: THEME.SPACING.S,
  },
})
