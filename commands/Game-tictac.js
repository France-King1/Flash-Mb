const _0x380b28=_0x29a2;function _0x1d32(){const _0xcbc3bf=['1522070FVQWed','map','some','Current\x20board:\x0a','702958OoXxwO','extendedTextMessage','8349558JITCZK','Games','split','join','\x0a---|---|---\x0a','Player\x20@','every','\x20wins!','floor',',\x20make\x20your\x20move\x20(choose\x20a\x20number\x20from\x20the\x20board).','1586610iztZHL','sendMessage','yes','\x20to\x20play\x20Tic-Tac-Toe.\x20To\x20accept\x20the\x20challenge,\x20type\x20\x27yes\x27.','20731jfCEaJ','tictac','toLowerCase','conversation','Invitation\x20refused','9289581XyXNSj','flat','message','The\x20game\x20is\x20a\x20draw!','awaitForMessage','text','Timeout','Invalid\x20move.\x20Please\x20choose\x20a\x20number\x20from\x20the\x20board.','\x20|\x20','axios','Tic-Tac-Toe\x20is\x20a\x20game\x20for\x20two\x20players.\x20Mention\x20a\x20friend\x20to\x20invite\x20them.','2302368CsJXfM'];_0x1d32=function(){return _0xcbc3bf;};return _0x1d32();}(function(_0x39593e,_0x4d2324){const _0x45f032=_0x29a2,_0x13f18f=_0x39593e();while(!![]){try{const _0x2fed92=-parseInt(_0x45f032(0xaa))/0x1+parseInt(_0x45f032(0xbf))/0x2+-parseInt(_0x45f032(0xa6))/0x3+parseInt(_0x45f032(0xba))/0x4+parseInt(_0x45f032(0xbb))/0x5+parseInt(_0x45f032(0xc1))/0x6+-parseInt(_0x45f032(0xaf))/0x7;if(_0x2fed92===_0x4d2324)break;else _0x13f18f['push'](_0x13f18f['shift']());}catch(_0x2671e1){_0x13f18f['push'](_0x13f18f['shift']());}}}(_0x1d32,0xb639a));function _0x29a2(_0x7acff6,_0x2bc056){const _0x1d32cd=_0x1d32();return _0x29a2=function(_0x29a29c,_0x2b024f){_0x29a29c=_0x29a29c-0x9e;let _0x568e33=_0x1d32cd[_0x29a29c];return _0x568e33;},_0x29a2(_0x7acff6,_0x2bc056);}const {king}=require('../france/king'),axios=require(_0x380b28(0xb8));king({'nomCom':_0x380b28(0xab),'categorie':_0x380b28(0xc2),'reaction':'🎮'},async(_0x322626,_0x34cd39,_0x5f5331)=>{const _0x348692=_0x380b28,{repondre:_0x1a5b7e,ms:_0x545f7a,auteurMessage:_0x52bc7e,auteurMsgRepondu:_0x30c2ec,msgRepondu:_0x42d3ab,arg:_0x13f50e,idBot:_0xc37cda}=_0x5f5331;if(_0x42d3ab){_0x34cd39[_0x348692(0xa7)](_0x322626,{'text':'@'+_0x52bc7e[_0x348692(0x9e)]('@')[0x0]+'\x20invites\x20@'+_0x30c2ec[_0x348692(0x9e)]('@')[0x0]+_0x348692(0xa9),'mentions':[_0x52bc7e,_0x30c2ec]});try{const _0x4c52c4=await _0x34cd39[_0x348692(0xb3)]({'sender':_0x30c2ec,'chatJid':_0x322626,'timeout':0x7530});if(_0x4c52c4[_0x348692(0xb1)][_0x348692(0xad)][_0x348692(0xac)]()===_0x348692(0xa8)||_0x4c52c4[_0x348692(0xb1)][_0x348692(0xc0)][_0x348692(0xb4)][_0x348692(0xac)]()===_0x348692(0xa8)){let _0x53ba84=[['1','2','3'],['4','5','6'],['7','8','9']],_0x4e390e=_0x52bc7e,_0x3649f4=![];while(!_0x3649f4){let _0x485404=_0x348692(0xbe)+_0x53ba84[_0x348692(0xbc)](_0x10f832=>_0x10f832[_0x348692(0x9f)](_0x348692(0xb7)))['join'](_0x348692(0xa0))+'\x0a\x0a@'+_0x4e390e[_0x348692(0x9e)]('@')[0x0]+_0x348692(0xa5);_0x34cd39[_0x348692(0xa7)](_0x322626,{'text':_0x485404,'mentions':[_0x4e390e]});const _0x454e45=await _0x34cd39[_0x348692(0xb3)]({'sender':_0x4e390e,'chatJid':_0x322626,'timeout':0x7530}),_0x489f03=_0x454e45[_0x348692(0xb1)][_0x348692(0xad)],_0x36a5c9=_0x53ba84[_0x348692(0xb0)]()['indexOf'](_0x489f03);if(_0x36a5c9!==-0x1){const _0x257ae3=Math['floor'](_0x36a5c9/0x3),_0x412fd6=_0x36a5c9%0x3;_0x53ba84[_0x257ae3][_0x412fd6]=_0x4e390e===_0x52bc7e?'X':'O';if(checkWin(_0x53ba84,_0x4e390e===_0x52bc7e?'X':'O'))_0x34cd39[_0x348692(0xa7)](_0x322626,{'text':_0x348692(0xa1)+_0x4e390e[_0x348692(0x9e)]('@')[0x0]+_0x348692(0xa3),'mentions':[_0x52bc7e,_0x30c2ec]}),_0x3649f4=!![];else _0x53ba84[_0x348692(0xb0)]()[_0x348692(0xa2)](_0x34f282=>_0x34f282==='X'||_0x34f282==='O')?(_0x34cd39['sendMessage'](_0x322626,{'text':_0x348692(0xb2),'mentions':[_0x52bc7e,_0x30c2ec]}),_0x3649f4=!![]):_0x4e390e=_0x4e390e===_0x52bc7e?_0x30c2ec:_0x52bc7e;}else _0x34cd39[_0x348692(0xa7)](_0x322626,{'text':_0x348692(0xb6),'mentions':[_0x4e390e]});}}else _0x1a5b7e(_0x348692(0xae));}catch(_0x36914a){_0x36914a[_0x348692(0xb1)]===_0x348692(0xb5)?_0x34cd39['sendMessage'](_0x322626,{'text':'@'+_0x30c2ec['split']('@')[0x0]+'\x20took\x20too\x20long\x20to\x20respond.\x20Game\x20canceled.','mentions':[_0x52bc7e,_0x30c2ec]}):console['error'](_0x36914a);}}else _0x1a5b7e(_0x348692(0xb9));});function checkWin(_0x57e57a,_0x5a5651){const _0x1c0c7f=_0x380b28,_0x305400=[[0x0,0x1,0x2],[0x3,0x4,0x5],[0x6,0x7,0x8],[0x0,0x3,0x6],[0x1,0x4,0x7],[0x2,0x5,0x8],[0x0,0x4,0x8],[0x2,0x4,0x6]];return _0x305400[_0x1c0c7f(0xbd)](_0x41f141=>_0x41f141[_0x1c0c7f(0xa2)](_0x258db2=>_0x57e57a[Math[_0x1c0c7f(0xa4)](_0x258db2/0x3)][_0x258db2%0x3]===_0x5a5651));}
