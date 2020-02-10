var arr = Components.classes['@mozilla.org/array;1'].createInstance(Components.interfaces.nsIMutableArray);

function getMessageKeywords(msg) {
	return msg.getStringProperty('keywords').split(" ").filter(
		keyword => {
			return !["", "$mailflagbit0", "nonjunk"].includes(keyword);
		}
	);
}

for(let index = 0; index < msgHdrs.length; index++) {
	let message = msgHdrs.queryElementAt(index, Ci.nsIMsgDBHdr);
	let parentKey = message.threadParent;

	if(getMessageKeywords(message).length > 0) {
		continue;
	}

	while(parentKey != nsMsgKey_None) {
		let parent = message.folder.msgDatabase.GetMsgHdrForKey(parentKey);
		let parentTags = getMessageKeywords(parent);
		if(parentTags.length > 0) {
			arr.clear();
			arr.appendElement(message, false);
			message.folder.addKeywordsToMessages(arr, parentTags.join(" "));
			break;
		}
		parentKey = parent.threadParent;
	}
}
