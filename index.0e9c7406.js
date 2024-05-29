class t{static gameStatuses={idle:"idle",playing:"playing",win:"win",lose:"lose"};constructor(e=Array.from({length:4},()=>[,,,,].fill(0))){this.initialState=e,this.state=e.map(t=>[...t]),this.status=t.gameStatuses.idle,this.score=0}moveLeft(){if(!this.isStateValid(this.state))return;let t=this.state.map(t=>this.applyMove(t));this.updateGameState(t),this.completeMoveTasks()}moveRight(){let t=this.state.map(t=>[...t].reverse());if(!this.isStateValid(t))return;let e=t.map(t=>this.applyMove(t).reverse());this.updateGameState(e),this.completeMoveTasks()}moveUp(){let t=this.rotateRight(this.state);if(!this.isStateValid(t))return;let e=[...t.map(t=>this.applyMove([...t]))],s=this.rotateLeft(e);this.updateGameState(s),this.completeMoveTasks()}moveDown(){let t=[...this.rotateRight(this.state).map(t=>[...t].reverse())];if(!this.isStateValid(t))return;let e=t.map(t=>this.applyMove([...t]).reverse()),s=this.rotateLeft(e);this.updateGameState(s),this.completeMoveTasks()}applyMove(t){let e=[],s=0;for(;s<t.length;){let a=t[s],r=t[s+1];a?a===r?(e.push(2*a),this.score+=2*a,s+=2):(e.push(a),s++):s++}for(;e.length<t.length;)e.push(0);return e}getScore(){return this.score}getState(){return this.state}getStatus(){return this.status}start(){this.status=t.gameStatuses.playing,this.completeMoveTasks(2)}restart(){this.resetState(),this.status=t.gameStatuses.idle,this.score=0}generateNewTile(){let t=this.getEmptyCells();if(!t.length)return;let[e,s]=t[Math.floor(Math.random()*t.length)];this.state[e][s]=.9>Math.random()?2:4}getEmptyCells(){return this.getState().flatMap((t,e)=>t.map((t,s)=>0===t?[e,s]:null)).filter(t=>null!==t)}rotateLeft(t){let e=[],s=t[0].length,a=t.length;for(let t=0;t<s;t++)e.push(Array.from({length:a},()=>""));for(let r=0;r<a;r++)for(let a=0;a<s;a++){let i=s-1-a;e[r][i]=t[a][r]}return e}rotateRight(t){let e=[],s=t[0].length,a=t.length;for(let t=0;t<s;t++)e.push(Array.from({length:a},()=>""));for(let r=0;r<a;r++)for(let a=0;a<s;a++){let i=r;e[s-1-a][i]=t[r][a]}return e}isStateValid(e){if(this.status!==t.gameStatuses.playing)return!1;for(let t of e){let e=!1,s=!1;for(let a=0;a<t.length-1;a++){if(t[a]===t[a+1]){e=!0;break}t[a]||(s=!0)}if(e||s)return!0}return!1}completeMoveTasks(e=1){for(let t=0;t<e;t++)this.generateNewTile();let s=this.getState();this.isVictory(s)?this.status=t.gameStatuses.win:this.isDefeat(s)&&(this.status=t.gameStatuses.lose)}isDefeat(t){let e=this.rotateRight(t);return[t,e].every(t=>!this.isStateValid(t))}isVictory(t){return t.flat().some(t=>2048===t)}resetState(){this.state=[...this.initialState.map(t=>[...t])]}updateGameState(t){this.state=t}}const e=new t,s=document.querySelector(".container"),a=document.querySelector(".game-field"),r=s.querySelector(".button"),i=s.querySelector(".game-score"),l={start:s.querySelector(".message-start"),restart:s.querySelector(".message-restart"),lose:s.querySelector(".message-lose"),win:s.querySelector(".message-win")},o=[...a.querySelectorAll(".field-row")].map(t=>[...t.children]);function n(t,e){t.forEach((t,s)=>{t.forEach((t,a)=>{let r=e[s][a];r.className=t?`field-cell field-cell--${t}`:"field-cell",r.innerHTML=t||""})})}function h(){let t=e.getStatus();for(let e in l)if(Object.hasOwnProperty.call(l,e)){let s=l[e];s&&s.classList.toggle("hidden",e!==t)}}r.addEventListener("click",()=>{if("Start"===r.textContent)e.start(),r.textContent="Restart",r.classList.replace("start","restart");else{var t;e.restart(),t=e.getScore(),i.innerHTML=t,r.textContent="Start",r.classList.replace("restart","start")}n(e.getState(),o),h()}),document.addEventListener("keydown",t=>{if(t.preventDefault(),"playing"!==e.getStatus())return;let s={ArrowUp:e.moveUp,ArrowDown:e.moveDown,ArrowLeft:e.moveLeft,ArrowRight:e.moveRight}[t.key];s&&s.call(e);let a=e.getScore();n(e.getState(),o),i.innerHTML=a,h()});
//# sourceMappingURL=index.0e9c7406.js.map
