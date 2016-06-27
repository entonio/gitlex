/*
 Copyright (c) 2016, Antonio Marques
 All rights reserved.

 You may use and redistribute this software, with or without modification, under the following conditions:

 1. Redistributions must retain the above copyright notice, this list of conditions and the following disclaimer.
 2. If this source code is modified other than simply to allow integration with other software, no restrictions may be added to redistribution.

 THE COPYRIGHT HOLDERS PROVIDE THIS SOFTWARE IN GOOD FAITH BUT TAKE NO RESPONSIBILITY FOR IT.
 */

return // no longer needed

let diffsTab = document.getElementsByClassName('diffs-tab')[0]
try {
    if(diffsTab) {
        let clone = diffsTab.cloneNode(true)
        clone.className = 'diffsw-tab'
        let link = clone.getElementsByTagName('a')[0]
        link.href.location += '?w=1'
        link.setAttribute('data-action', 'diffs?w=1')
        link.innerText = "Changes (Ignore Whitespace)"
        let list = diffsTab.parentNode
        list.insertBefore(clone, diffsTab);
    }
}
catch(e) {
    alert(e)
}
