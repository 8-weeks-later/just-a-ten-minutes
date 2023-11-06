interface Action {
  name: string;
  abilityId: string;
  startTime: string; // dateString
  endTime: string; // dateString
  xp: number;
}

interface Ability {
  id: string;
  name: string;
  level: number;
}
