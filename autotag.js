const nsMsgKey_None = 0xffffffff;

function getMessageKeywords(msg) {
	return msg.getStringProperty('keywords').split(" ").filter(
		keyword => {
			return !["", "$mailflagbit0", "nonjunk"].includes(keyword);
		}
	);
}

for(let index = 0; index < msgHdrs.length; index++) {
	let message = msgHdrs[index];
	let parentKey = message.threadParent;

	if(getMessageKeywords(message).length > 0) {
		continue;
	}

	while(parentKey != nsMsgKey_None) {
		let parent = message.folder.msgDatabase.getMsgHdrForKey(parentKey);
		let parentTags = getMessageKeywords(parent);
		if(parentTags.length > 0) {
			message.folder.addKeywordsToMessages([message], parentTags.join(" "));
			break;
		}
		parentKey = parent.threadParent;
	}
}
