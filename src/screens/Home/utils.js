import { get } from 'lodash'
import DateUtil from '@app/utils/date'

export const getFormattedCountData = data => {
  return {
    dailyTotalWater: get(data, [DateUtil.today(), 'dailyTotalWater'], '-'),
    achievedGoalDays: get(data, 'achievedGoalDays', '-'),
  }
}
export const getFormattedBodyData = data => {
  return {
    dailyTotalWater: get(data, [DateUtil.today(), 'dailyTotalWater']),
    dailyGoal: get(data, 'dailyGoal'),
  }
}
export const getUpdatedAddWaterAmountData = (data, amount) => {
  const currentDailyTotalWater = data[DateUtil.today()].dailyTotalWater
  const isAchieved = data[DateUtil.today()].achieved
  const willAchieve = currentDailyTotalWater + amount >= data.dailyGoal

  return {
    ...data,
    achievedGoalDays:
      !isAchieved && willAchieve
        ? data.achievedGoalDays + 1
        : data.achievedGoalDays,
    [DateUtil.today()]: {
      dailyTotalWater: currentDailyTotalWater + amount,
      achieved: willAchieve ? true : false,
    },
  }
}
export const getUpdatedRemoveWaterAmountData = (data, amount) => {
  const currentDailyTotalWater = data[DateUtil.today()].dailyTotalWater
  const isAchieved = data[DateUtil.today()].achieved
  const willAchieve = currentDailyTotalWater - amount >= data.dailyGoal

  return {
    ...data,
    achievedGoalDays:
      isAchieved && !willAchieve
        ? data.achievedGoalDays - 1
        : data.achievedGoalDays,
    [DateUtil.today()]: {
      dailyTotalWater:
        currentDailyTotalWater - amount >= 0
          ? currentDailyTotalWater - amount
          : 0,
      achieved: willAchieve ? true : false,
    },
  }
}
export const getUpdatedDailyGoalData = (data, dailyGoal) => {
  const currentDailyTotalWater = data[DateUtil.today()].dailyTotalWater
  const isAchieved = data[DateUtil.today()].achieved
  const willAchieve = currentDailyTotalWater >= dailyGoal

  const getAchievedGoalDays = () => {
    if (isAchieved && !willAchieve) {
      return data.achievedGoalDays - 1
    }
    if (!isAchieved && willAchieve) {
      return data.achievedGoalDays + 1
    }
    return data.achievedGoalDays
  }

  return {
    ...data,
    achievedGoalDays: getAchievedGoalDays(),
    dailyGoal,
    [DateUtil.today()]: {
      ...data[DateUtil.today()],
      achieved: willAchieve ? true : false,
    },
  }
}
