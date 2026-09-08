//New approach#1
//T(C(N))==O(N)  and S(C(N))==O(1) as it requires const space alloc iteratively
const distanceBetweenBusStops=(e,t,n)=>Math.min(...[[t,n],[n,t]].map(([t,n])=>{let s=t,o=0;for(;s!==n;)o+=e[s],s=(s+1)%e.length;return o}));//Printing Minium distance between bus stops
//Old approach
// var distanceBetweenBusStops = function(distance, start, destination) {
//     // n=distance.length;

    // Stream stream=new Stream();
    // for(let i=0;i<n;i++){
    //     for(let j=i+1;i<n-1;i++){
    //         if(distance[j]>distance[i]){
    //             destination[i]+=Math.max(stream.count(destination[i],destination[j]));
    //         }else destination[j]-=Math.max(stream.count(destination[i],destination[j]));
    // }
    // }return destination;
