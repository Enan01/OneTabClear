function confirm() {
    return true;
}
nodelist = document.querySelectorAll('#tabGroupsDiv > div > div:nth-child(1) > div > div:nth-child(5) > div:nth-child(3)');
createTimeNodeList = document.querySelectorAll('#tabGroupsDiv > div > div:nth-child(1) > div > div:nth-child(5) > div:nth-child(1)');
startNodelist = document.querySelectorAll('#tabGroupsDiv > div > div:nth-child(1) > div > picture.starImg');
lockNodelist = document.querySelectorAll('#tabGroupsDiv > div > div:nth-child(1) > div > picture.lockImg');
var startTime = new Date('2022-12-02 14:08:55');
nodelist.forEach(function (ele, index, list) {
    if (startNodelist[index].style.display != 'none' || lockNodelist[index].style.display != 'none') {
        console.log('this group is start or lock, not delete')
        return;
    }
    var ct = createTimeNodeList[index].innerText.substring(4);
    console.log(ct);
    console.log(Date.parse(ct));
    console.log(startTime.getTime());
    if (Date.parse(ct) < startTime.getTime()) {
        setTimeout(function () {
            ele.click();
            console.log('clicked')
        },
        1000 * index);
    }
});