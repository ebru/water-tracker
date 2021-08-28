import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen'

export const wp = percentage => {
  return wp2dp(percentage)
}

export const hp = percentage => {
  return hp2dp(percentage)
}
