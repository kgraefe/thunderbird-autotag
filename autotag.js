var arr = Components.classes['@mozilla.org/array;1'].createInstance(Components.interfaces.nsIMutableArray);

for(let index = 0; index < msgHdrs.length; index++) {
	let message = msgHdrs.queryElementAt(index, Ci.nsIMsgDBHdr);
	let parentKey = message.threadParent;

	if(message.getStringProperty('keywords')) {
		continue;
	}

	while(parentKey != nsMsgKey_None) {
		let parent = message.folder.msgDatabase.GetMsgHdrForKey(parentKey);
		let parentTags = parent.getStringProperty('keywords');

		if(parentTags) {
			arr.clear();
			arr.appendElement(message, false);
			message.folder.addKeywordsToMessages(arr, parentTags);
			break;
		}
		parentKey = parent.threadParent;
	}
}
