function climbingLeaderboard(scores, alice) {
    const ranking = [];
    let start=scores.length-1;
    alice.forEach((score, index) => {
      console.log(start);
    let i;
    for(i=start;i>=0;i--) {
      if(score<=scores[i]) {
        start=i;
        break;
      }
    }
  //     const position = scores.filter((s) => s>score);
      const leaderboard = new Set(scores.slice(0,i+1));
      leaderboard.delete(score)
    ranking.push(leaderboard.size+1);
  });
    return ranking;
  }
  console.log(climbingLeaderboard([100,100,50,40,40,20,10], [5,25,50,120]));
  