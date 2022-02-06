const allegro = require('aoi.js');
var fs = require('fs');
const bot = new allegro.Bot({
	token: process.env['token'],
	prefix: '$getServerVar[prefix]'
});

const keep_alive = require('./http.js');
bot.loadCommands(`./komutlar/`);
bot.onEmojiDelete()
bot.onEmojiCreate()
bot.onInviteCreate()
bot.onInviteDelete()
bot.onBanAdd()
bot.onBanRemove()
bot.onRoleCreate()
bot.onRoleDelete()
bot.onChannelCreate()
bot.onChannelDelete()
bot.onMessageDelete()
bot.onMessageUpdate()
bot.onJoined()
bot.onLeave()
bot.onMessage()

bot.command({
        name: "eval",
        code: `$eval[$message]
$onlyForIDs[$botOwnerID;Geliştiricim Değilsin]`
})
 
bot.command({
name: "sa",
code: `<@$authorID>, Aleyküm Selam Hoş geldin!
$onlyIf[$message==;]`,
nonPrefixed: true
})


bot.deletedCommand({
channel:"$channelID",
code:`
$setServerVar[snipe1;$message]
$setServerVar[snipe2;$channelUsed]
$setServerVar[snipe3;$authorID]
$onlyIf[$isBot[$authorID]==false;]
`
})
bot.onMessageDelete()
bot.command({
name:"snipe",
code:`
$description[Son silinen mesaj sahibi: \`$userTag[$getServerVar[snipe3]]\`
Silinen mesaj: \`$getServerVar[snipe1]]\`
$footer[\`($getServerVar[snipe3])]\'
$deleteIn[20s]
$onlyIf[$getServerVar[snipe1]!=;\`Snipe'lanıcak mesaj yok]\`
`
})


bot.deletedCommand({
	channel: "$channelID",
	code: `
  $setServerVar[zerotwok;$channelUsed]
  $setServerVar[zerotwo;$message]
  $setServerVar[zerotwokk;$authorID] $setServerVar[zerotwos;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$hours;01s;4;-1];02s;5;-1];03s;6;-1];04s;7;-1];05s;8;-1];06s;9;-1];07s;10;-1];08s;11;-1];09s;12;-1];10s;13;-1];11s;14;-1];12s;15;-1];13s;16;-1];14s;17;-1];15s;18;-1];16s;19;-1];17s;20;-1];18s;21;-1];19s;22;-1];20s;23;-1];21s;00;-1];22s;01;-1];23s;02;-1];00s;03;-1]:$replaceText[$minutes;s;;-1]:$replaceText[$seconds;s;;-1]]
  $suppressErrors`
})

bot.joinCommand({
	channel: "$getServerVar[girençıkan]",
	code: `
$author[$userTag;$authorAvatar]
$description[• Bir Kullanıcı Katıldı

Katılan kullanıcı:**<@$authorID> \`($authorID)\` • $userTag**]
$color[#2ECC71]
`
})

bot.leaveCommand({
	channel: "$getServerVar[girençıkan]",
	code: `
$author[$userTag;$authorAvatar]
$description[• Bir Kullanıcı Ayrıldı

Ayrılan kullanıcı:**<@$authorID> \`($authorID)\` • $userTag**]
$color[#FF0000]
`
})


bot.leaveCommand({
	channel: "$getServerVar[modlog]",
	code: `
$author[$userTag;$authorAvatar]
$description[• Bir Kullanıcı Ayrıldı

Ayrılan kullanıcı:**<@$authorID> \`($authorID)\` • $userTag**]
$color[00204]
`
})
bot.joinCommand({
	channel: "$getServerVar[modlog]",
	code: `
$author[$userTag;$authorAvatar]
$description[• Bir Kullanıcı Katıldı

Katılan kullanıcı:**<@$authorID> \`$authorID\` • $userTag**]
$color[BLACK]
`
})



bot.roleCreateCommand({
	channel: "$getServerVar[modlog]",
	code: `
$author[$newRole[name];$serverIcon]
$footer[$authorID]
$description[• Bir Rol Oluşturuldu

Oluşturulan rol: <@&$newRole[id]> • $newRole[name]
Rol etiketlenebilirmi: **$replaceText[$replaceText[$newRole[mentionable];true;Evet;-1];false;Hayır;-1]**
Rol rengi: **$newRole[color]**
Rol izinleri: **$newRole[permissions]**]
$color[BLACK]
`
})

bot.roleDeleteCommand({
	channel: "$getServerVar[modlog]",
	code: `
$author[$oldRole[name];$serverIcon]
$footer[$authorID]
$description[• Bir Rol Silindi

Silinen rol: **$oldRole[name]**
Rol rengi: **$oldRole[color]**
Rol izinleri: **$oldRole[permissions]**]
$color[BLACK]
`
})


bot.updateCommand({
	channel: "$getServerVar[modlog]",
	code: `
$author[$userTag;$authorAvatar]
$description[• Bir mesaj düzenlendi

Düzenlenen mesaj: **$oldmessage**
Yeni mesaj: **$message**
Mesaj sahibi: <@$authorID> \`($authorID)\`]
$color[BLACK]
`
})

bot.deletedCommand({
	channel: "$getServerVar[modlog]",
	code: `
$author[$userTag;$authorAvatar]
$description[• Bir mesaj silindi

Silinen mesaj: **$message**
Mesaj sahibi: <@$authorID> \`($authorID)]\`
$color[BLACK]
`
})


bot.updateCommand({
	channel: "$getServerVar[message]",
	code: `
$author[$userTag;$authorAvatar]
$description[• Bir mesaj düzenlendi

Düzenlenen mesaj: **$oldmessage**
Yeni mesaj: **$message**
Mesaj sahibi: <@$authorID> \`($authorID)\`]
$color[#2ECC71]
`
})

bot.deletedCommand({
	channel: "$getServerVar[message]",
	code: `
$author[$userTag;$authorAvatar]
$description[• Bir mesaj silindi

Silinen mesaj: **$message**
Mesaj sahibi: <@$authorID>\` ($authorID)\`]
$color[#FF0000]
`
})

bot.channelCreateCommand({
	channel: "$getServerVar[kanallog]",
	code: `
$author[$newChannel[name];$serverIcon]
$footer[$authorID]
$description[• Bir kanal oluşturuldu

Kanalı oluşturan kişi: <@$authorID> \`($authorID)\`

Oluşturulan kanal: <#$newChannel[id]> • $newChannel[name]
]
$color[#2ECC71]
`
})

bot.channelDeleteCommand({
	channel: "$getServerVar[kanallog]",
	code: `
$author[$oldChannel[name];$serverIcon]
$footer[$authorID]
$description[• Bir kanal silindi

Kanalı silen kişi: <@$authorID> \`($authorID)\`

Silinen kanal: **$oldChannel[name]**]
$color[#FF0000]
`
})

bot.command({
name: "logo",
code: ` 
$title[Sunucu Logosu]
$description[$image[$serverIcon[$guildID;2048;yes]]
$color[BLACK]]
$footer[İsteyen : $username; $authorAvatar]
`
})


bot.awaitedCommand({
name:"rolal",
code:`
$takeRole[$authorID;$mentionedRoles[1]]
`})

bot.awaitedCommand({
name:"rolver",
code:`
$giveRole[$authorID;$mentionedRoles[1]]
`})


bot.joinCommand({
        channel: "$getServerVar[sayaçlog]", 
        code: `
$description[Aramıza Katıldı $username#$discriminator[$authorID]
Seninle Birlikte Toplam **$membersCount** Kişiyiz
Hedef Kişiye $sub[$getServerVar[sayaç];$membersCount] Kişi Kaldı.
$color[#ffffff]]
`
})

bot.leaveCommand({
        channel: "$getServerVar[sayaçlog]", 
        code: `
$description[Aramızdan Ayrıldı $username#$discriminator[$authorID]
Toplam $membersCount Kişi Kaldık.
Hedef Kişiye $sub[$getServerVar[sayaç];$membersCount] Kişi Kaldı.
$color[#ffffff]]
`
})



bot.status({
	text: "#Allegro ❤",
	type: "PLAYING",
	status: "online",
	time: 12
	
})




bot.variables({
	prefix: ".",
	hgbb: "",
	bbtxt: "-isimt- Tekrar görüşmek üzere bb. ^^",
	hgtxt: "-isimt- Hoş geldin umarım iyi vakit geçirsin. ^^",
	hgbbimage: "",
	mrol: "boş",
	myetkili: "",
	ticket: "0",
	ticketk: "",
	ticketk2: "",
	modlog: "",
	skanal: "",
	sayaç: "0",
	s: "kapalı",
	otorolk: "",
	otorolb: "",
	otorol: "",
	eklog: "",
	lengel: "kapalı",
	afks: "",
	afk: "hayır",
	afkss: "",
	afkmm: "0",
	afkc: "0",
	afkkk: "0",
	afkaa: "Kimse Etiketlememiş",
	saas: "açık",
	tlog: "",
	hex: "",
	zerotwo: "",
	snipe1: "",
	snipe2: "",
	snipe3: "",
	otorol: "",
	otolog: "",
	bklog: "",
	invite: "",
	bkanal: "",
	kengel: "kapalı",
	warnsayı: "0",
	warnlog: "",
	wyetkili: "",
	urol: "",
	mrol: "",
	myetkili: "",
        jaillog: "",
        jailkanal: "",
        jailyetkili: "",
  jailrol: "",
  saas: "açık",
  banlog: "",
  banrol: "",
  hata: "",
  banlayan: "",
  banlog: "",
  bansebep: "",
  banhummer: "",
  girençıkan: "",
  message: "",
  kanallog: "",
  davetlog: "",
  sayaç: "0",
  sayaçlog: "",
  ototag: "",
  ototaglog: "",
  tag:"🗿",
  tagrol:"",
  taglog:""
})
