import { footabll_stat, cricket_stat, basketball_stat, volleyball_stat } from "./interface"

export function sortFootballTeams(stats:footabll_stat[]):footabll_stat[] {
    stats.sort((a, b) => {
      if (a.points > b.points) return -1;
      else if (b.points > a.points) return 1;
      if (a.goals > b.goals) return -1;
      else return 1;
    })
    return stats
}

export function sortCricketTeams(stats:cricket_stat[]):cricket_stat[] {
    stats.sort((a, b) => {
      if (a.points > b.points) return -1;
      else if (b.points > a.points) return 1;

      if (a.runs > b.runs) return -1;
      else if (b.runs > a.runs) return 1;

      if (a.wickets > b.wickets) return -1;
      return 1;
    })
    return stats
}

export function sortBasketballTeams(stats:basketball_stat[]):basketball_stat[] {
    stats.sort((a, b) => {
      if (a.points > b.points) return -1;
      else if (b.points > a.points) return 1;

      if (a.margin> b.margin) return -1;
      return 1;
    })
    return stats
}

export function sortVolleyballTeams(stats:volleyball_stat[]):volleyball_stat[] {
    stats.sort((a, b) => {
      if (a.points > b.points) return -1;
      else if (b.points > a.points) return 1;

      if (a.margin> b.margin) return -1;
      return 1;
    })
    return stats
}