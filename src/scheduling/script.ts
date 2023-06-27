//something is screaming A* for the deadline:
///when considering the current time slot, compute the probability for each event by:
// if time to event deadline - remaining duration - spare time > 0, this is good as it means event will be completed with spare time. Do not amend probability.
// if < 0 this means it might not be completed in spare time. p*10
// if high priority, p*10
/*@desc Plan focus sessions for the current day. If the current total focus time < max daily focus time, look in preferred time frame
//*@params eventArr = [{eventID, priority: number}]
//*@params maxDailyFocusTime*/
//*@params timeFrameStudiedBest
