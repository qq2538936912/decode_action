/*
小黑盒签到 v2.2

小黑盒签到及日常任务，日收益180H币左右（可抵0.18元）

自行捉包
heybox_id在请求参数中
cookie里面只需要pkey和x_xhh_tokenid
把这三个拼接起来，格式如下。（多账号换行或&隔开）

export BLACKBOX_COOKIE="heybox_id#pkey=xxxxxx;x_xhh_tokenid=xxxxxx&heybox_id#pkey=xxxxxx;x_xhh_tokenid=xxxxxx"

每天运行两次

cron: 3 3 9,21 * * *
*/

 var _0xode='jsjiami.com.v7';var _0x434525=_0x2b44;(function(_0x2a4219,_0x366ea9,_0x3cf664,_0x104196,_0x3e319f,_0x30804d,_0x2fbcc6){return _0x2a4219=_0x2a4219>>0x8,_0x30804d='hs',_0x2fbcc6='hs',function(_0x34c802,_0xacfde1,_0x110e45,_0x5c348e,_0x3be60a){var _0x18ed99=_0x2b44;_0x5c348e='tfi',_0x30804d=_0x5c348e+_0x30804d,_0x3be60a='up',_0x2fbcc6+=_0x3be60a,_0x30804d=_0x110e45(_0x30804d),_0x2fbcc6=_0x110e45(_0x2fbcc6),_0x110e45=0x0;var _0x5a4492=_0x34c802();while(!![]&&--_0x104196+_0xacfde1){try{_0x5c348e=-parseInt(_0x18ed99(0xae,'kNO8'))/0x1*(parseInt(_0x18ed99(0xb1,'kNO8'))/0x2)+parseInt(_0x18ed99(0x125,'kNO8'))/0x3+parseInt(_0x18ed99(0x178,'VqjJ'))/0x4+-parseInt(_0x18ed99(0x15a,'jZlT'))/0x5*(-parseInt(_0x18ed99(0xbb,'x$M('))/0x6)+parseInt(_0x18ed99(0xc0,'QRvg'))/0x7*(-parseInt(_0x18ed99(0xc2,'O((('))/0x8)+-parseInt(_0x18ed99(0xb0,'Rm6v'))/0x9+parseInt(_0x18ed99(0x169,'6OUa'))/0xa;}catch(_0x57be05){_0x5c348e=_0x110e45;}finally{_0x3be60a=_0x5a4492[_0x30804d]();if(_0x2a4219<=_0x104196)_0x110e45?_0x3e319f?_0x5c348e=_0x3be60a:_0x3e319f=_0x3be60a:_0x110e45=_0x3be60a;else{if(_0x110e45==_0x3e319f['replace'](/[tLXluxyYpNSPIfRC=]/g,'')){if(_0x5c348e===_0xacfde1){_0x5a4492['un'+_0x30804d](_0x3be60a);break;}_0x5a4492[_0x2fbcc6](_0x3be60a);}}}}}(_0x3cf664,_0x366ea9,function(_0x32d8d0,_0x307b41,_0x2e1bce,_0x972538,_0x27fce5,_0x2eeae9,_0x14917e){return _0x307b41='\x73\x70\x6c\x69\x74',_0x32d8d0=arguments[0x0],_0x32d8d0=_0x32d8d0[_0x307b41](''),_0x2e1bce='\x72\x65\x76\x65\x72\x73\x65',_0x32d8d0=_0x32d8d0[_0x2e1bce]('\x76'),_0x972538='\x6a\x6f\x69\x6e',(0x18be76,_0x32d8d0[_0x972538](''));});}(0xbf00,0x9be61,_0x4678,0xc1),_0x4678)&&(_0xode=0xc1);var cookie=process[_0x434525(0x104,'SL2D')][_0x434525(0xb8,'XW4D')];const axios=require(_0x434525(0x132,'nvEl'));function _0x2b44(_0x25e529,_0x34eef8){var _0x46782d=_0x4678();return _0x2b44=function(_0x2b4480,_0x4db1b4){_0x2b4480=_0x2b4480-0x94;var _0x484cd2=_0x46782d[_0x2b4480];if(_0x2b44['QNeSVI']===undefined){var _0x52a7f5=function(_0x5ca9d8){var _0x193cc0='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x233afe='',_0x1b95c9='';for(var _0x54bf61=0x0,_0x4b32d7,_0x31ead0,_0x5d5a90=0x0;_0x31ead0=_0x5ca9d8['charAt'](_0x5d5a90++);~_0x31ead0&&(_0x4b32d7=_0x54bf61%0x4?_0x4b32d7*0x40+_0x31ead0:_0x31ead0,_0x54bf61++%0x4)?_0x233afe+=String['fromCharCode'](0xff&_0x4b32d7>>(-0x2*_0x54bf61&0x6)):0x0){_0x31ead0=_0x193cc0['indexOf'](_0x31ead0);}for(var _0x8757dd=0x0,_0x1f6a02=_0x233afe['length'];_0x8757dd<_0x1f6a02;_0x8757dd++){_0x1b95c9+='%'+('00'+_0x233afe['charCodeAt'](_0x8757dd)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1b95c9);};var _0x49dbb8=function(_0x447738,_0x2cecdc){var _0x2d0f08=[],_0xb79932=0x0,_0x1524e6,_0x1d43b9='';_0x447738=_0x52a7f5(_0x447738);var _0x1f83d0;for(_0x1f83d0=0x0;_0x1f83d0<0x100;_0x1f83d0++){_0x2d0f08[_0x1f83d0]=_0x1f83d0;}for(_0x1f83d0=0x0;_0x1f83d0<0x100;_0x1f83d0++){_0xb79932=(_0xb79932+_0x2d0f08[_0x1f83d0]+_0x2cecdc['charCodeAt'](_0x1f83d0%_0x2cecdc['length']))%0x100,_0x1524e6=_0x2d0f08[_0x1f83d0],_0x2d0f08[_0x1f83d0]=_0x2d0f08[_0xb79932],_0x2d0f08[_0xb79932]=_0x1524e6;}_0x1f83d0=0x0,_0xb79932=0x0;for(var _0x5b1808=0x0;_0x5b1808<_0x447738['length'];_0x5b1808++){_0x1f83d0=(_0x1f83d0+0x1)%0x100,_0xb79932=(_0xb79932+_0x2d0f08[_0x1f83d0])%0x100,_0x1524e6=_0x2d0f08[_0x1f83d0],_0x2d0f08[_0x1f83d0]=_0x2d0f08[_0xb79932],_0x2d0f08[_0xb79932]=_0x1524e6,_0x1d43b9+=String['fromCharCode'](_0x447738['charCodeAt'](_0x5b1808)^_0x2d0f08[(_0x2d0f08[_0x1f83d0]+_0x2d0f08[_0xb79932])%0x100]);}return _0x1d43b9;};_0x2b44['nALnoo']=_0x49dbb8,_0x25e529=arguments,_0x2b44['QNeSVI']=!![];}var _0x12ae68=_0x46782d[0x0],_0x13342b=_0x2b4480+_0x12ae68,_0x57a056=_0x25e529[_0x13342b];return!_0x57a056?(_0x2b44['MCUkij']===undefined&&(_0x2b44['MCUkij']=!![]),_0x484cd2=_0x2b44['nALnoo'](_0x484cd2,_0x4db1b4),_0x25e529[_0x13342b]=_0x484cd2):_0x484cd2=_0x57a056,_0x484cd2;},_0x2b44(_0x25e529,_0x34eef8);}function formatSecondsTimestamp(_0x4a2099){var _0x51a8ea=_0x434525,_0x42f89d={'qCrgN':function(_0x3955cd,_0x357533){return _0x3955cd(_0x357533);},'ZfssG':function(_0x10d1ca,_0xd447ad){return _0x10d1ca+_0xd447ad;},'RCzvr':function(_0xce9613,_0x33f9f6){return _0xce9613(_0x33f9f6);},'axjVr':function(_0x3a813e,_0x26a675){return _0x3a813e(_0x26a675);}};const _0x52cd7c=new Date(_0x4a2099*0x3e8),_0x4dd6bb=_0x52cd7c[_0x51a8ea(0xd3,')qDB')](),_0x2dab23=_0x42f89d[_0x51a8ea(0x12b,'JjD2')](String,_0x42f89d['ZfssG'](_0x52cd7c[_0x51a8ea(0x186,'gU&3')](),0x1))[_0x51a8ea(0x16d,'SL2D')](0x2,'0'),_0x58424d=String(_0x52cd7c[_0x51a8ea(0x142,'y8dc')]())[_0x51a8ea(0x9c,'WYcb')](0x2,'0'),_0x465ac7=String(_0x52cd7c[_0x51a8ea(0x11d,'61R#')]())['padStart'](0x2,'0'),_0xc3349b=_0x42f89d[_0x51a8ea(0x95,'O(((')](String,_0x52cd7c['getMinutes']())[_0x51a8ea(0xf9,']i!@')](0x2,'0'),_0x34c239=_0x42f89d['axjVr'](String,_0x52cd7c[_0x51a8ea(0xa5,'!Eer')]())[_0x51a8ea(0xf9,']i!@')](0x2,'0');return _0x4dd6bb+'-'+_0x2dab23+'-'+_0x58424d+'\x20'+_0x465ac7+':'+_0xc3349b+':'+_0x34c239;}async function getHkey(_0x9b894f,_0xc85a5d,_0x1133b4=_0x434525(0xe5,'ugsC')){var _0x2f215e=_0x434525,_0x2ced28={'wQNZv':_0x2f215e(0xef,'0gF%'),'dDqbf':'MTIqD','UsIak':'Error:'};const _0x42fe08=_0x2f215e(0xd9,'kPby'),_0x3a7097={'heyboxId':_0x9b894f,'type':_0xc85a5d,'taskName':_0x1133b4},_0x1f0946={'headers':{'Content-Type':_0x2ced28[_0x2f215e(0x152,'ugsC')]},'timeout':0x1388};try{const _0x14f0ac=await axios[_0x2f215e(0xc7,'Cswy')](_0x42fe08,_0x3a7097,_0x1f0946);return _0x14f0ac[_0x2f215e(0xfe,'JjD2')];}catch(_0xd84017){if(_0x2ced28[_0x2f215e(0xbc,'3l6I')]===_0x2f215e(0x143,'ZHwf'))return console['error'](_0x2ced28[_0x2f215e(0x13d,']i!@')],_0xd84017),null;else _0x59e1f6[_0x2f215e(0xfc,'&&(w')](_0x2f215e(0x12a,'lp*5'));}}async function follow(_0x493df5,_0x590927){var _0x11681e=_0x434525,_0x43b8c2={'sPTfZ':_0x11681e(0xb5,'kNO8'),'TeKDJ':function(_0x3c36ad,_0x531809,_0x2c0f4f){return _0x3c36ad(_0x531809,_0x2c0f4f);},'ioaMO':_0x11681e(0x14b,'kNO8'),'AWcph':_0x11681e(0x159,'VqjJ'),'XcvVS':_0x11681e(0x114,')qDB')},_0x1f8d76=_0x493df5[_0x11681e(0x177,'WYcb')]('#'),_0x379fe7=_0x1f8d76[0x0],_0x493df5=_0x1f8d76[0x1],_0x276d76=_0x43b8c2[_0x11681e(0x94,'WYcb')],_0x2e1179=await _0x43b8c2[_0x11681e(0xe3,'t82E')](getHkey,_0x379fe7,0x3);hkey=_0x2e1179[_0x11681e(0xa1,'ugsC')],timestamp=_0x2e1179[_0x11681e(0x188,'3l6I')];var _0x1e1f38={'headers':{'Referer':_0x43b8c2[_0x11681e(0x17e,'T7S1')],'User-Agent':_0x11681e(0x141,'QRvg'),'Host':_0x43b8c2[_0x11681e(0x129,'Sq)V')],'Connection':'Keep-Alive','Accept':_0x43b8c2['XcvVS'],'Cookie':_0x493df5},'timeout':0x1388};try{var _0xa6913a=await axios['post'](_0x11681e(0xf1,'g5Pn')+_0x379fe7+_0x11681e(0x15d,')fWV')+hkey+_0x11681e(0x175,'Sq)V')+timestamp+_0x11681e(0xf2,'J4Fu'),_0x276d76,_0x1e1f38);return _0xa6913a['data'];}catch(_0x17e733){return console['error'](_0x11681e(0xfd,'y8dc'),_0x17e733),null;}}async function getTaskList(_0x55db29,_0x40394){var _0x377b02=_0x434525,_0xe44be4={'PqrTo':_0x377b02(0xe7,']i!@'),'rReOU':function(_0x271d9e,_0x288fec,_0x4d2a60){return _0x271d9e(_0x288fec,_0x4d2a60);},'lATaA':_0x377b02(0x154,'g5Pn'),'rUrVb':_0x377b02(0x120,'gU&3'),'OWJeF':_0x377b02(0xb6,'zbq7'),'zEiyt':_0x377b02(0x187,'WYcb'),'OaOvi':function(_0xa8b1f7,_0x1c1c3f){return _0xa8b1f7!==_0x1c1c3f;},'eKZxM':_0x377b02(0x98,'YDZ@'),'bDJjU':_0x377b02(0xee,'0gF%')},_0x15d399=_0x55db29[_0x377b02(0x172,'lp*5')]('#'),_0x48eec7=_0x15d399[0x0],_0x55db29=_0x15d399[0x1],_0xbd1e6a=await _0xe44be4['rReOU'](getHkey,_0x48eec7,0x2);hkey=_0xbd1e6a[_0x377b02(0x11b,'61R#')],timestamp=_0xbd1e6a[_0x377b02(0xbf,'O(((')];var _0x282db5={'headers':{'Referer':_0xe44be4[_0x377b02(0x10f,'0gF%')],'User-Agent':_0x377b02(0xb9,'3l6I'),'Host':_0xe44be4[_0x377b02(0x127,'J7oR')],'Connection':_0xe44be4['OWJeF'],'Accept':_0xe44be4['zEiyt'],'Cookie':_0x55db29},'timeout':0x1388};try{if(_0xe44be4['OaOvi'](_0xe44be4[_0x377b02(0xa9,'G7^5')],_0x377b02(0x137,'IpmT')))_0x71f417[_0x377b02(0x107,'YDZ@')](_0xe44be4[_0x377b02(0xc8,'J4Fu')]);else{var _0x4d22bf=await axios[_0x377b02(0xff,'61R#')](_0x377b02(0xc1,']i!@')+_0x48eec7+'&imei=4187fb55b1be198a&device_info=XiaoMi%2013%E7%A7%81%E4%BA%BA%E8%AE%A2%E5%88%B6%E7%89%88&nonce=tb6e1k7WqQCIHToyzWzI8Ogq9d0EIgpb&hkey='+hkey+_0x377b02(0x103,')fWV')+timestamp+_0x377b02(0x147,'6OUa'),_0x282db5);return _0x4d22bf[_0x377b02(0x18a,'jZlT')];}}catch(_0x7b46f5){return console['error'](_0xe44be4[_0x377b02(0xa7,'lp*5')],_0x7b46f5),null;}}async function getSignIn(_0x342b7b,_0x547f97){var _0x1fc98e=_0x434525,_0x2ea32c={'KZKaZ':function(_0x952665,_0x55a529,_0x176258){return _0x952665(_0x55a529,_0x176258);},'SEVua':_0x1fc98e(0x160,'mgc0'),'Qcylr':_0x1fc98e(0x135,'T7S1'),'cPioR':'Keep-Alive','hFvej':_0x1fc98e(0xe4,'G7^5'),'tNVEb':_0x1fc98e(0xeb,'T7S1')},_0x46f3c4=_0x342b7b['split']('#'),_0x2b0376=_0x46f3c4[0x0],_0x342b7b=_0x46f3c4[0x1],_0xa3ac8b=await _0x2ea32c[_0x1fc98e(0x17f,'SL2D')](getHkey,_0x2b0376,0x1);hkey=_0xa3ac8b[_0x1fc98e(0x15f,'Hiyz')],timestamp=_0xa3ac8b[_0x1fc98e(0xbf,'O(((')];var _0x81e165={'headers':{'Referer':_0x2ea32c[_0x1fc98e(0x10c,'nvEl')],'User-Agent':_0x2ea32c[_0x1fc98e(0xf6,'Cswy')],'Host':_0x1fc98e(0x118,'&&(w'),'Connection':_0x2ea32c['cPioR'],'Accept':_0x2ea32c['hFvej'],'Cookie':_0x342b7b},'timeout':0x1388};try{var _0x4064c2=await axios[_0x1fc98e(0x16c,'SL2D')](_0x1fc98e(0x168,'&&(w')+_0x2b0376+'&imei=4187fb55b1be198a&device_info=XiaoMi%2013%E7%A7%81%E4%BA%BA%E8%AE%A2%E5%88%B6%E7%89%88&nonce=tb6e1k7WqQCIHToyzWzI8Ogq9d0EIgpb&hkey='+hkey+_0x1fc98e(0x138,']^kT')+timestamp+_0x1fc98e(0xf2,'J4Fu'),_0x81e165);return _0x4064c2[_0x1fc98e(0xaa,'3l6I')];}catch(_0x17f8ac){return console[_0x1fc98e(0xd4,']^kT')](_0x2ea32c[_0x1fc98e(0x123,'!Eer')],_0x17f8ac),null;}}async function doTask(_0x56b27f,_0x416d31){var _0x50defc=_0x434525,_0x41cff4={'yXick':'10|0|8|2|6|3|13|4|9|11|12|1|5|14|7','zGZsQ':_0x50defc(0xa0,'y8dc'),'PKXNe':function(_0x131bf0,_0x35120e,_0x24a621,_0x503a6f){return _0x131bf0(_0x35120e,_0x24a621,_0x503a6f);},'vHbWr':_0x50defc(0x14d,'kPby'),'kPYOK':_0x50defc(0x17d,'YDZ@'),'cboNw':_0x50defc(0xf0,'Hiyz'),'EJPEX':_0x50defc(0x18c,'kNO8'),'uJsPS':_0x50defc(0xbe,'kNO8'),'YrsHW':_0x50defc(0xcd,'J7oR'),'WjjML':'Keep-Alive','mupBL':_0x50defc(0x10e,'&&(w')},_0x558906=_0x41cff4[_0x50defc(0x14f,'Rm6v')][_0x50defc(0xd2,'x$M(')]('|'),_0x218d1b=0x0;while(!![]){switch(_0x558906[_0x218d1b++]){case'0':var _0x3f3ec5=_0xa82200[0x0];continue;case'1':_0x198f93['append'](_0x41cff4[_0x50defc(0x9a,'IpmT')],_post_key);continue;case'2':var _0x80e14f=await _0x41cff4[_0x50defc(0xa4,'61R#')](getHkey,_0x3f3ec5,0x5,_0x416d31);continue;case'3':_time=_0x80e14f[_0x50defc(0xe2,'ZHwf')];continue;case'4':_post_key=_0x80e14f[_0x50defc(0x108,'JjD2')];continue;case'5':_0x198f93[_0x50defc(0x171,'QRvg')](_0x50defc(0xd5,'Cswy'),_post_sid);continue;case'6':hkey=_0x80e14f[_0x50defc(0x119,'J4Fu')];continue;case'7':try{var _0x1d00f5=await axios[_0x50defc(0x10d,'J7oR')](_0x50defc(0x134,'oI9M')+_time+'&session_id=77ee4fea-46d9-4a53-b5ce-5df9cf056b7e&heybox_id='+_0x3f3ec5+_0x50defc(0xd8,'Cswy')+hkey+_0x50defc(0x115,'kNO8')+_time+_0x50defc(0x11c,'kNO8'),_0x198f93,_0x3e4ee5);return _0x1d00f5['data'];}catch(_0x445efc){return console[_0x50defc(0xfa,'7w^w')](_0x41cff4[_0x50defc(0x180,'Cswy')],_0x445efc),null;}continue;case'8':var _0x56b27f=_0xa82200[0x1];continue;case'9':_post_sid=_0x80e14f['sid'];continue;case'10':var _0xa82200=_0x56b27f['split']('#');continue;case'11':var _0x198f93=new URLSearchParams();continue;case'12':_0x198f93[_0x50defc(0x12d,'!Eer')](_0x41cff4['kPYOK'],_post_data);continue;case'13':_post_data=_0x80e14f[_0x50defc(0x176,'0gF%')];continue;case'14':var _0x3e4ee5={'headers':{'Referer':_0x41cff4['cboNw'],'User-Agent':_0x41cff4['EJPEX'],'Cookie':_0x56b27f,'Content-Type':_0x41cff4[_0x50defc(0x113,'@H$f')],'Host':_0x41cff4['YrsHW'],'Connection':_0x41cff4[_0x50defc(0x112,'kNO8')],'Accept-Encoding':_0x41cff4['mupBL']},'timeout':0x1388};continue;}break;}}async function main(){var _0x1ab581=_0x434525,_0x38661b={'Jdmtu':function(_0x4125bb,_0x4b8f02){return _0x4125bb+_0x4b8f02;},'LHEkn':function(_0xd9bb1d,_0x529a77){return _0xd9bb1d==_0x529a77;},'Jbqpk':'finish','gEYBF':_0x1ab581(0xcc,'T7S1'),'uJDiY':_0x1ab581(0xab,'nvEl'),'WNqCO':function(_0x41f637,_0x119801){return _0x41f637<_0x119801;},'qDkzv':'0|3|1|2|4','xDiZC':function(_0x32b92e,_0x3faafd){return _0x32b92e(_0x3faafd);},'huGDi':function(_0x2c27bd,_0x48afdc,_0x262006){return _0x2c27bd(_0x48afdc,_0x262006);},'kQSjd':function(_0x246da9,_0x5c28fe){return _0x246da9+_0x5c28fe;},'Zrrgh':_0x1ab581(0xd6,'t82E'),'IHlhZ':function(_0x4163eb,_0x466133){return _0x4163eb==_0x466133;},'SYigF':'请重新登录','LAsQm':function(_0x1a703e,_0x13fb15){return _0x1a703e!==_0x13fb15;},'varfh':_0x1ab581(0x163,'ugsC'),'RWXsY':'--开始做分享贴子任务--','qCvyx':_0x1ab581(0xd7,'@H$f'),'QIyil':function(_0x5afc2f,_0x14e9f1){return _0x5afc2f==_0x14e9f1;},'qNyVt':_0x1ab581(0x126,'nvEl'),'cRpAC':_0x1ab581(0x10a,'oI9M'),'PmurB':_0x1ab581(0xea,'x$M('),'JnwKe':'--开始做分享游戏详情任务--','AfYUJ':function(_0x29efaf,_0x1e9829,_0x5265ac){return _0x29efaf(_0x1e9829,_0x5265ac);},'ihqaS':_0x1ab581(0xa8,'oI9M'),'BDoTy':_0x1ab581(0x146,'61R#'),'qezkY':function(_0x24a049,_0x5fb6ce){return _0x24a049===_0x5fb6ce;},'JIsSt':_0x1ab581(0x164,'7w^w'),'kIfRo':_0x1ab581(0xa6,'gU&3'),'ukUEr':_0x1ab581(0xa3,'JjD2'),'fgNTd':_0x1ab581(0xb3,'oJJX'),'dFRCU':function(_0x40f7e1,_0x5cbcba,_0x5ccd7a){return _0x40f7e1(_0x5cbcba,_0x5ccd7a);},'HtDWs':_0x1ab581(0x162,'oI9M'),'mckeE':_0x1ab581(0xe0,'J4Fu'),'pjRlt':function(_0x27958a,_0x208323){return _0x27958a+_0x208323;},'dbTSK':_0x1ab581(0xb7,'oJJX'),'DYbxB':function(_0x323cbe,_0x3cb868){return _0x323cbe===_0x3cb868;},'lLDYv':_0x1ab581(0x13b,'jZlT'),'bHPsA':_0x1ab581(0xca,'xe[Q'),'HZylu':function(_0x41e32f,_0x47b354){return _0x41e32f<_0x47b354;},'scAjJ':function(_0x202380,_0x25c22f){return _0x202380==_0x25c22f;},'lwoEa':_0x1ab581(0x12c,'J4Fu'),'cTZLf':_0x1ab581(0x165,')qDB')};if(cookie[_0x1ab581(0xce,'Sq)V')]('&'))var _0x39ae1a=cookie[_0x1ab581(0xe8,'ZHwf')]('&');else var _0x39ae1a=[cookie];console['log']('找到'+_0x39ae1a[_0x1ab581(0xf7,'ugsC')]+_0x1ab581(0x144,'c%tG'));for(var _0x208bb2=0x0;_0x38661b[_0x1ab581(0x170,'G7^5')](_0x208bb2,_0x39ae1a[_0x1ab581(0x17b,'c%tG')]);_0x208bb2++){follow(_0x39ae1a[_0x208bb2],_0x208bb2+0x1),console[_0x1ab581(0x16b,'J7oR')](_0x1ab581(0x136,'oJJX'));var _0x3b29d1=await _0x38661b[_0x1ab581(0x109,'T7S1')](getSignIn,_0x39ae1a[_0x208bb2],_0x38661b[_0x1ab581(0x148,'Cswy')](_0x208bb2,0x1));if(_0x3b29d1[_0x1ab581(0x13e,')fWV')][_0x1ab581(0xd1,'IpmT')]==_0x38661b[_0x1ab581(0x189,']^kT')])console[_0x1ab581(0x96,']i!@')]('账号'+_0x38661b[_0x1ab581(0x157,'kPby')](_0x208bb2,0x1)+_0x1ab581(0x13f,'jZlT'));else{if(_0x38661b['IHlhZ'](_0x3b29d1[_0x1ab581(0x11a,'WYcb')],_0x38661b[_0x1ab581(0xa2,'T7S1')]))console['log']('账号'+_0x38661b[_0x1ab581(0x11e,'0gF%')](_0x208bb2,0x1)+_0x1ab581(0xf8,'oI9M'));else{if(_0x38661b[_0x1ab581(0x14a,'G7^5')](_0x1ab581(0x117,'gU&3'),_0x38661b[_0x1ab581(0xda,'ZHwf')]))console[_0x1ab581(0x166,'Rm6v')]('账号'+_0x38661b[_0x1ab581(0x151,']^kT')](_0x208bb2,0x1)+_0x1ab581(0x150,'Rm6v'));else var _0x24b377=_0x397336[_0x1ab581(0xdd,'Q7pS')]('&');}}console['log'](_0x38661b[_0x1ab581(0x13c,'kNO8')]);var _0x3b29d1=await doTask(_0x39ae1a[_0x208bb2],_0x38661b[_0x1ab581(0x185,'XW4D')]);if(_0x38661b['QIyil'](_0x3b29d1['msg'],'')){if(_0x38661b[_0x1ab581(0x11f,'SL2D')]!==_0x38661b[_0x1ab581(0x100,'lp*5')])console[_0x1ab581(0x15b,'t82E')](_0x38661b['PmurB']);else var _0x3011af=[_0x2162cf];}else console[_0x1ab581(0x149,'xe[Q')](_0x3b29d1);console['log'](_0x38661b['JnwKe']);var _0x3b29d1=await _0x38661b[_0x1ab581(0x10b,'ugsC')](doTask,_0x39ae1a[_0x208bb2],_0x38661b[_0x1ab581(0xb4,'IpmT')]);if(_0x38661b[_0x1ab581(0xaf,']^kT')](_0x3b29d1['msg'],''))_0x38661b['BDoTy']==='TXnAI'?_0x7c0681[_0x1ab581(0x181,'mgc0')]('账号'+_0x38661b[_0x1ab581(0x161,'t82E')](_0x1a942f,0x1)+'\x20->\x20签到成功！'):console['log'](_0x38661b[_0x1ab581(0xf3,'x$M(')]);else{if(_0x38661b[_0x1ab581(0x155,'LFER')](_0x38661b['JIsSt'],_0x38661b[_0x1ab581(0xdf,'JjD2')]))console[_0x1ab581(0xba,'oI9M')](_0x3b29d1);else{var _0x34cd3c=_0x225336[_0x3d87a4][_0x1ab581(0xbd,'LFER')][_0x324bc0][_0x1ab581(0x110,'Rm6v')],_0x482e56=_0x8417bd[_0x181f4][_0x1ab581(0x133,'J4Fu')][_0x5578d4][_0x1ab581(0xd1,'IpmT')],_0x4faa19=_0x280a38[_0x3e0ff8][_0x1ab581(0xd0,'QRvg')][_0x5b6cae]['task_end_time'],_0x38fae0=_0x535d8b(_0x4faa19);_0x1173ac['log'](_0x1ab581(0x182,'Cswy')+_0x34cd3c+_0x1ab581(0xb2,'LFER')+(_0x38661b[_0x1ab581(0x14e,'J4Fu')](_0x482e56,_0x38661b[_0x1ab581(0x13a,'lp*5')])?_0x38661b['gEYBF']:_0x38661b['uJDiY'])+_0x1ab581(0xcb,'JjD2')+_0x38fae0);}}console[_0x1ab581(0x179,'WYcb')](_0x38661b[_0x1ab581(0xe6,'IpmT')]);var _0x3b29d1=await doTask(_0x39ae1a[_0x208bb2],_0x38661b[_0x1ab581(0x15c,'Cswy')]);_0x38661b[_0x1ab581(0x130,'!Eer')](_0x3b29d1['msg'],'')?console['log'](_0x38661b['PmurB']):console[_0x1ab581(0x17c,'LFER')](_0x3b29d1);console[_0x1ab581(0x12e,'kNO8')](_0x38661b[_0x1ab581(0x12f,'WYcb')]);var _0x3b29d1=await _0x38661b[_0x1ab581(0xc4,'T7S1')](doTask,_0x39ae1a[_0x208bb2],_0x38661b[_0x1ab581(0x105,'ZHwf')]);if(_0x3b29d1['msg']=='')console[_0x1ab581(0xfc,'&&(w')](_0x38661b[_0x1ab581(0x145,'Hiyz')]);else{if(_0x38661b['mckeE']!==_0x38661b[_0x1ab581(0xad,'lp*5')]){_0x50dce6[_0x1ab581(0xf5,'lp*5')](_0x1ab581(0xf4,'JjD2'));for(var _0x2f14a3=0x0;_0x38661b['WNqCO'](_0x2f14a3,_0x461c7f[_0x5c0037]['tasks'][_0x1ab581(0xec,']^kT')]);_0x2f14a3++){var _0x2007f2=_0x38661b[_0x1ab581(0x156,'zbq7')][_0x1ab581(0x158,'17yJ')]('|'),_0x3ed748=0x0;while(!![]){switch(_0x2007f2[_0x3ed748++]){case'0':var _0x360281=_0x346e4d[_0x4f37d9][_0x1ab581(0x16e,'SL2D')][_0x2f14a3][_0x1ab581(0xdc,'mgc0')];continue;case'1':var _0x41ac09=_0x154186[_0x42634c][_0x1ab581(0x16f,'Sq)V')][_0x2f14a3][_0x1ab581(0xdb,')qDB')];continue;case'2':var _0x2dbb62=_0x38661b['xDiZC'](_0xcb222e,_0x41ac09);continue;case'3':var _0xc48815=_0x3ecb8c[_0x1461cc][_0x1ab581(0x153,']i!@')][_0x2f14a3]['state'];continue;case'4':_0x2b0420['log']('任务：'+_0x360281+'\x20->\x20'+(_0x38661b[_0x1ab581(0x15e,'t82E')](_0xc48815,_0x1ab581(0x122,'!Eer'))?_0x38661b[_0x1ab581(0xe1,']^kT')]:_0x1ab581(0x9e,'@H$f'))+'\x20--\x20结束时间'+_0x2dbb62);continue;}break;}}}else console['log'](_0x3b29d1);}var _0x17cb77=await getTaskList(_0x39ae1a[_0x208bb2],_0x38661b['pjRlt'](_0x208bb2,0x1)),_0x15beec=_0x17cb77[_0x1ab581(0x9b,'G7^5')][_0x1ab581(0x9d,'y8dc')][_0x1ab581(0x167,'kPby')];console['log'](''+_0x15beec);var _0x586535=_0x17cb77['result'][_0x1ab581(0xc3,'O(((')];for(var _0x45382f=0x0;_0x38661b[_0x1ab581(0x140,'g5Pn')](_0x45382f,_0x586535['length']);_0x45382f++){if(_0x38661b[_0x1ab581(0xe9,'kPby')](_0x586535[_0x45382f]['title'],_0x38661b[_0x1ab581(0x173,'VqjJ')])){if(_0x38661b[_0x1ab581(0x128,'ZHwf')](_0x38661b[_0x1ab581(0xc9,'0gF%')],_0x38661b[_0x1ab581(0x18b,'jZlT')])){console[_0x1ab581(0x14c,'3l6I')](_0x38661b[_0x1ab581(0x121,'YDZ@')]);for(var _0x1a7c3d=0x0;_0x38661b['HZylu'](_0x1a7c3d,_0x586535[_0x45382f]['tasks'][_0x1ab581(0xfb,'y8dc')]);_0x1a7c3d++){var _0x474958=_0x586535[_0x45382f][_0x1ab581(0x102,'oJJX')][_0x1a7c3d][_0x1ab581(0x9f,'G7^5')],_0x10510f=_0x586535[_0x45382f][_0x1ab581(0x174,'WYcb')][_0x1a7c3d]['state'];console['log'](_0x1ab581(0xc6,'SL2D')+_0x474958+_0x1ab581(0x139,'kNO8')+(_0x10510f==_0x38661b[_0x1ab581(0x99,'XW4D')]?_0x38661b['gEYBF']:_0x38661b['uJDiY']));}}else _0x7e7d6[_0x1ab581(0x131,'gU&3')](_0x490961);}else{if(_0x38661b[_0x1ab581(0x183,'zbq7')](_0x586535[_0x45382f]['title'],_0x38661b[_0x1ab581(0x106,'y8dc')])){console[_0x1ab581(0x96,']i!@')](_0x38661b[_0x1ab581(0x111,'Q7pS')]);for(var _0x4639a9=0x0;_0x4639a9<_0x586535[_0x45382f][_0x1ab581(0x184,'zbq7')][_0x1ab581(0xc5,'XW4D')];_0x4639a9++){var _0x578465=_0x1ab581(0x116,'mgc0')['split']('|'),_0x350eb6=0x0;while(!![]){switch(_0x578465[_0x350eb6++]){case'0':var _0x1191d6=_0x38661b['xDiZC'](formatSecondsTimestamp,_0x467cbf);continue;case'1':var _0x10510f=_0x586535[_0x45382f]['tasks'][_0x4639a9]['state'];continue;case'2':var _0x467cbf=_0x586535[_0x45382f][_0x1ab581(0x16e,'SL2D')][_0x4639a9][_0x1ab581(0x97,'oJJX')];continue;case'3':var _0x474958=_0x586535[_0x45382f]['tasks'][_0x4639a9]['title'];continue;case'4':console[_0x1ab581(0x14c,'3l6I')]('任务：'+_0x474958+_0x1ab581(0x124,'Cswy')+(_0x10510f==_0x38661b['Jbqpk']?'已完成':_0x38661b[_0x1ab581(0xcf,'ZHwf')])+'\x20--\x20结束时间'+_0x1191d6);continue;}break;}}}}}console[_0x1ab581(0xba,'oI9M')]();}}main();function _0x4678(){var _0x4edc4b=(function(){return[_0xode,'upjusuSRjiIxaCSmPLifL.ItcytNoXmYl.xxv7fY==','W5rPfKFdJqJdR23cLmkYAW7cKCkeDSkDW4m1W5z8WRHoW7HTuKHOW4iiFdrDj8oydIpdMmoViWZdJNnVWQb1jSoACerYw23cOINcGCocW5f0W5PZa8oCja','EIxcJwRdQ8oVWQ7dUuLtBcNdR2v1WOn3ymkBj8oeaSoUvmogWPJcVHTTamohdCo3WODuxe3dGWhcR8oNW7u','W5RdN8o6Cgy','A1dLV7/LPj3MO4BMNB7PMPlML6FKUQtLIyVLIyVOOyWOW7m','W4NdLtW','WOBcN0zuwW','W6ORq0JdOKu','FCkoBCo1W7ddISk+tSkAcUI8QUAFIW','WRCDCCkCrCoFWQCM','pmkmW6PWoq','DmkfW77cIx9Y','W7xcGbO','xCksW6lcGxKG','iHZcI8k3','n8ozW50','W4BdQcVdLb8','WRf8hH7cRXrMW6xdUmkBwmo8WOi','DwBcRCorWQy','WRRdPSoiWPpcT8oCDXJdQuxdQIxcOWGlW6BcNmkKq8oGW5SFWRRdOxexFmk2EmkmWQVcRttdUdZdNCk4WPJcSeRcKSoGsCoDWPHFuCo4mKNdOL59zsb/crjOW7ZcPSkKrMRdTw4PgmkVWRpcTmkLkbSRB37cPNxdOCoTWP9+iu5mtYeFW64chSoNWOqSW5PqeCoSWQe5','W7umzW','vrVcJxpdIG','DmkxW7/cQ2O','W5CHzq','lrJcHG','W6JcJv1Fua','d8oHjmkVW5S','W4CODhRdNa','yCoFr17cPq','W5/dOqCl','W77cLrqg','uCoyffiU','hM/cHrGZ','WOD1WQZcQ1y','W6vYnGK1','ACo1ph7cRG','WOBcMYK','WPr3lXSnWOyVlCo+FXTMv8o9qSoDc2bUWRVcVSkgnCoKW7ddNfGNtCoRx8oRfmollgOBCMOjtmo/cIi0W6SNamonW5rLW6xdSSoifN3dH8oMWRhcGgi2WQRcQL/cJ8oEaxdcNSoUaCkojXvLcJzqpmkyE8oMW6ldR8kqgGT0ku0uxSkpWPpdSvtcJ8ojB8ka','WORdHdCMWOvOWQmZBG','W7pdOctdQ8kv','W7JcNXryt8obW5RdGhRdUJxcVmkRr8oKfG','ncRcNY4','WRerkW','omoxW4X5','WPr8k3LnW41NBSkGvHrSs8o3r8kerx1iWRBcOSkHhSoLW6NdMaOlsSkPvCoBhmoFEI8SDh8crSoP','n8ozW51iW7VdU8kBtG','vSoie1Kl','W6eSAmk6W50','W4pdIshcKSk4W53dU0ldIcdcOmkxW5ZcV0Sd','W5KguJJdSW','rwWwvSkFW5u','v0SUESko','W7FdKqey','WOeRBNviW4LQo8kVxcbLuq','FSo/qN/cOa','W53dMWyPWOq','wtBcQ1ZdUW','WQldRCoBxmop','W4RdKE+9MG','nZ7cJCkXsa','6zIm5PA35lIb5yU2','qNuiwSkcW5K','W553oW','WROfaHBcHq','AK0uv8k2','W47dLI8','u8oIEetcTW','kcdcItZcRa','nCoxj8kLW6dcN8o+cSkxdSkzWRusW6tcSGmzuCoEWQ0/WPNdLCk1jfTkrmkkWOBcJSoBESoCWRLMWPpcNSoEESoNbJC3sSkBW49VeSk7q8kQDSkWW7hcGsFcImkNr8k6bW','W43cL2bYvtyzW4KyW6jOW6RcGtKNWPj4WOHFhCoUpmo9gwNdV8o6kbLOWOLKWPVdTmkVW43cTCo1pCkZASoqWQ9LWOu9C8k3W6m9i8oXmmoMASkJzmkzWQTBWR1ZWQLUW4PTnmoDxSkErq3cKXBdObaDxWyowfmutti8arRdQve/W5/dIfVcRaNcKmoY','lcRLV57LPBhLGO/NRPpLIPNKUR3LI60LWO0','i8oXWQ9DWOS','W6PvWQLvkXNdRCozWQ0FWR/dGh4+WPvHWRfjW40uWRlcR8knW5FcGInDW6PVsXFdR8otW5BcJv3cGs7cU8kFeCojWRJdGZZcPfJcISoyWQZdO8kEyavtxdzJW6pcGmkPWPhcJmkzsLGEW4qcjCokWPPkfhpdG8oFWQBcSu3cMbhcLCoVp8kbgxeQWQPpymkYWOZcMNNdL8kaW65sia','WPi1yMq','W6/dMcRdPtC','yCkZWRO6W7a','W6bpbdCG','WPipxmkUwG','W67dRmoiWRNcR8or','aSorW6fj5lMF5PEO5BEM562b5yQu6l6t772K','W6Tte3tdSq','W5VcNmotENyRDglcGmkOW7DTFJrNW6HAW7xcIbBdG8kIW5z6tmoDFg4uWOldQSo0gLbOxG/cKCokW5RdVsKrECo4r3rZnIhcUb1Mc8ovsSkrdSo3W6/dGKnXsSkoCSolg8oEW7xdVCkJh8odWQ9sWPCMW7S7W4XkhLfOqCoddmkdWO0YWPRcU8oTW4eKW5ldLq','F8kfW6tcQMPUwa'].concat((function(){return['udVcGfxdVq','5lMb6lAn5y6L','pCoauCk5W68','aCofW4DKW50','WOddVLHkvmoAWOjuymomjx1IWPiwptdcHK0UvIddLszlfWutbmovW6SBgCoIW7mepZbrWOGpWP4','WRZcRwXstq','W6u3WRW','WRLXWP0bwG','W5PSkdrdW5bWkCkZv1TVrmoQqCoqtdzsWRVcOmo2','W6vTWRm','W7XFW5ldQ09N','eaNcVZZcSq','e17cMbC9','sIVdJ1tNRkJLIjBMIz7LIPRVVyW','WQDRWOLGoW','W7eFy3xdOa','WRmDzSkKqG','W5rPfKFcHb3dRYpcHCkRle3cImkvFCkBW4P+W5X7WRbp','WOSBWO0CAG','W71KWOZcIqC','W7njW43dSeG','W4RdPSo9W5r/','vfurWR3dTmkBWOtcMH7cRmkhhsTvWOpcMG','emomWQ8nW7nbrxm','W44EWO8','WQlcL2P9wW','WRRdOmowWQNcQSkym0ZdRdpdOIpdPfiaWRpdMmk5lCk2WPaHW6JdVgqekmkuC8k3WRdcRdVdSYFdVCkoWPRcS27cNSkRd8kYW50vbmoyoahdJaSXmxr8i1usW4JcGSoZD0lcV0uSbmoiWOddTmkwAvCbngBcR2pdT8kbWPPOvL8laNfwWRihamk+W5PKW6zbrCoTW7nTt2aqvuOUW7ZdVMbqkmolW794een+W4GbzLvCnCoaW6ldUZxdN1hcLJ1FWPKeW70','W645WQ3cHxa','bCogqCkY','W5hdJhiQWO07WRWUkIFdOJjfCmk1WOm7WQBcJmoQW51B','W6GvWOxcMMS','k8okimk8W6FdOSkWsmkwpCkmWRPx','W58RwgldHa','hmkYW69DlW','WOhcMEw8G+wKUoAISoADRUMyVoAwLos5VowlLowkO+IIT8kRWPm','bMNcLG','W4XEW4xdTLm8h3i','W7hcMWKgrmksWPtcGhpdRZxdUSk2amoMf8krWOtdQueVsshcVmkbDcJcHSkZWROYhmkZBmkJA8kAWOxdQSo5rrSUW7SJWOJcPCkvWQ5NWRhcRCon','WPhcQbXgwCorWOOttCoti2Dj','W61sEsVcKvfrkmkK','W4pdOrm','W7Chzq','W6adDCk/W50lbmou','W6qdySkhW5O','WPFdM8olr8ou','WQj+WP8tEa','W7FcG8ozDNqJ','W5BdIJFdVcG','uuCSW4ddHW','WQGdpYNcKG','W4xdLColC8otW4f2BSo6WR/dSgCElmovW6FdICkrWRpdK8kgzmkUbYVcHWtdPSo6umkuemk1wIa3W5eAF8oVWRpdUCo7W6hdTaBdHKftW5vEWQWXWO5sxcSTWR84W7KFWRZcNmkXWQ90hIddKNZcJKlcGKVdG3FcOSkkWONcQcxdVMpcOmkbuwvCWPZdSglcG8ktW6RdOM/cQhdcPtW','wCo4nfi','WQ8sicVcLq','bXvnWQFcU8olW5pcUtRcKmk3iqa','WRankW','mZFcRSoEWRpcOCo4cG','b8oopmkBBmk0','WPyrWPa','W58VDIO','W6NcL3TwDG','W5S4wSknW7m','WQhcTf1VwW','W5xdL2e','5lIS5yMD77YL','W79dWQBcMtS','W7HbWPtcMai','WRVcUSoxWOZcPW','W4xdNdZdSCkVW5RdRKu','W7znzG','W71RWRNdMMDBW5W7lG','WPziWQHTnW','rSkDWQSi','tSkWWPSWW6m','W793jI0vWPm+z8o2eeuIzmoIw8ovse9uWRBcHSkWnCkYWRxcILjiemk5dCkSnSoNxL8ipsymqmo6g10hW7C0dSkFWPaQW4tdS8owhdBdJCk6W5RdHYL0W7FdSqldLSorfMFdMCkZu8kUlXXQrw5roSkfF8o7W6pdV8oslHjXabfui8oxW5tcGrhdImku','WQ8YgctcUW','s8oWqmoAba','WQStCG','DwBcRCorWORcImohiHn8W4NcLmke','W5ORDXVdKW','WOdcM8oqWOxcTa','omotWOb+WRS','WODvWP0LwW0','WQWdkbhcLv9VjG','BCktW7xcNa'].concat((function(){return['5PY25AYZ5OMF','WOfzWPO8uG','C8kfW6K','W64Lsfy','W5pcOxn8FW','nrxcNSkKy8oCWQn8oSkPm0LOWRS+iW','amo3W7foW7e','rgamBmkjW54/W4XeW6C','WO/cLow9IowLT+wcMUwkSUs4SEA4LEAkR+IUGEs4VUs4HowiMmk8bq','W4FdVHhdVWK','lSolmSkNW7BdOSkWsmkwk8kiWQbDW7xcTW','WPb7WRqOEG','W61JWQddNG','5PYy5AYw5OIb','DSkMW68+W53cQXFcSCoRFeZcNG','W4JdMtddSbK','WOmTAxCOWPqUdCkHCW','WOvYWRzIbq','uJ7dGufGeh1gbbjYvLS','WOmOBxqYWOu3o8kruq','W5PtW4Lx','lcRLV57LPBhMU63MI6lMPlxLJjpLGjdNLzhcKCojWPlKU5xLIOFcN8kF','k8o8WQTSWRK','W5r3mcGwWOG2jSkKyrXMgmkJgCkkhcabW6FdUq','W4DfWOlcG1ZcUvbEW5FdIq','5Q+o5PEI5lIL5yIB','WOJcTCoGWRBcLbBcT8k8WOKReCkfW5jMpG','W4rTWQ7dLNHdW5X5A8orWPzWvSkdcmoBW6/dIcWmW4hdUcFcJmkHwxVdKCk+FSo9jCo9W7uLWOtcUaCQlmk0hcFcK8oLWPuJW5hcJ1BdQCoUW7dcSSkCpSoYW4vitmkoW6FdImk2lYHOFCkOW740BMfGWQtcLmkgWRbYW77cTJTYWOrkBSo4WPmfAwv/bGK+ahBdMG','mComna','WRVcGmk3mbBcRqNdSCkDydlcO8o2','W61gWQxdNxi','WO4FWOqCqa','W5nOlcGqWPW+pmkQurSTxCk/xmoowJvxWRVcV8k0BmoOW7ldLqaiqmoGsCoHgq','BCoAv8ojbConWPfXFa','WQFdG8kCEMOOwtFdHa','WQ8iyCk/qSkeW7P9WOHdlYJdJSkVq8o+nCocegRcRbFdK8oUW70hW4RdH2XDbmodmSoKC8ksWQr/pCk1W6j2W6/dJ8oCWPPmWRXA','lCkbd8kFqCkpWPrVxbnPW4u','BCossCohkCovWPLVEa','W6tcVKHyBa','WQBcNmopWPlcQZW','5lMR5yUd77Yl','WQFcK0Xm','dddcIapcSa','uCovbgOz','WQr15B+B5AAH5Qoe5P+75QYR5PAR5lMH5yML5yMF6kchW6VdUq','zLddKSo257Uv5P+e5Ps06zEL','5BwY5A205OIk','W4VdRWaEW4GEwmk5W4VdPSoUWQ3cHNTSlWG','WORdLmoBqmosW5XJEa','AcxcJu3dOa','W6lcKSoAEgK','mCoGWRT5WO8','W7NdGSoJA1a','W4VdKxFcTqxdPWa7W6iuW4y','WQLiWQHLlq','WQtcLvS','W4SwWOBcGwZdPa','B8oxlLZcMaPLW5q+W77cRmk9','W7hcLvjDqbSeWOddT08Vq8kRW6FdVuSDCseuW7hdMmkyuCowW47dIwhcOhZcHCoic2fqC8kbWQuxWQ1MW5RcQCk5W7PpcCoIWRK/W5/dP8kyW65mWPfEW4jFkSkgW5NdRtLeW67dR8kuESoqW4hcICk6iSoCrSopWPdcICkzxcuhWQddQCkBvwyDW4mUhmoVW5pcSmoaW5ZcRmk0WRDsl8kxW77cNCorWRKTiSoyW4uClCo/imo5WQ7dQfLbWPFcGSokgmk2W7tdUsbTWO1dbmoNW44cdW','W5fzW5tdTaDYxspcPSohtSoWWQipWQFdHSkUW7H0WPldOMZcVCoKmSoIWPddGCkfWRi','AW7cU0ldKq','W5JdLxdcMc/dRGigW5GbW53cSSoJ','W43dKxi2W5i','WPDrWPRcJKq','B3ldIgBdRSoRWQpcRezzwcddTq','ddtcJmkfCG','dtNcSW3cUG','WQT/WOnigq','AqBcPehdIIxcLCoaWQi','W7yuWQpcQLq','W58FW4q','W6G7qum','kCoDWRXFWOu','WQGx77Yu','BH/cPu3dJq','W7vLW6xdR1m','W6xdME++JG','W4xcIMH0s2a','WQbFWRrTkWG','kSoqWQxdMJWJcZpcJ8ofW63cQwG','EmoRmLWDW5u','xmoPmf8gWOXAmCkfEapcVYRcUaqX','bCozumk7WPFdUmomW5tcPmk1ir7cRConW7mYsSoLWPhdU8kBAq'];}()));}()));}());_0x4678=function(){return _0x4edc4b;};return _0x4678();};var version_ = 'jsjiami.com.v7';
