for(let index = 0; index < msgHdrs.length; index++) {
	let message = msgHdrs.queryElementAt(index, Ci.nsIMsgDBHdr);
    if(message.threadParent == nsMsgKey_None) {
        continue;
    }
    let parent = message.folder.msgDatabase.GetMsgHdrForKey(message.threadParent);
    let parentTags = parent.getStringProperty('keywords');
    let currentTags = message.getStringProperty('keywords');

    let list = currentTags.split(' ');

    for(let i = 0; i < list.length; i++) {
		if(currentTags.indexOf(list[i]) < 0) {
                         parentTags = parentTags + ' ' +list[i];
        }
    }
	message.setStringProperty('keywords', parentTags);
}