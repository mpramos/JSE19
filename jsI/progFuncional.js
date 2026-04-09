// Ciclos for while dowhile
let emojis = ['🌟','👍','🤓','👋']
emojis.forEach((emoji)=>console.log(emoji));


let emojiMap =emojis.map((emoji)=>{return emoji + '🌟'})
console.log(emojiMap);
 let emojiFIlter = emojis.filter((emoji)=> emoji!== '👋')
console.log(emojiFIlter);


