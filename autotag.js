var arr = Components.classes['@mozilla.org/array;1'].createInstance(Components.interfaces.nsIMutableArray);

for(let index = 0; index < msgHdrs.length; index++) {
	let message = msgHdrs.queryElementAt(index, Ci.nsIMsgDBHdr);
	if(message.threadParent == nsMsgKey_None) {
		continue;
	}
	let parent = message.folder.msgDatabase.GetMsgHdrForKey(message.threadParent);
	let parentTags = parent.getStringProperty('keywords');

	arr.clear();
	arr.appendElement(message, false);
	message.folder.addKeywordsToMessages(arr, parentTags);
}
