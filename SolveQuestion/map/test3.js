function climbingLeaderboard(ranked, player) {
    // Write your code here
    let s=new Set(ranked)
    console.log(s);
    let res=[];
    player.forEach(element => {
        let rank=1;
        for(let e of s ){
            if(element>=e){
                break;
            }
            rank++;
        }
        res.push(rank);

    });
    return res;
    

}

ranked =[100, 90, 90, 80]
player =[70, 80, 105]
let ans=climbingLeaderboard(ranked,player);
console.log(ans);
