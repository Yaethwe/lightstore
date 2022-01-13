let c;
const sidebar = document.getElementById('sidebar');
const menubar = document.getElementById('menuBar');
const apkViewer = document.getElementById('apk');
const allapks = document.getElementById('allapk');
const apks = [
    {
        id:1,
        name: "Canchat",
        version: "0.1",
        info: "This app is a peer to peer chat app.",
        icon: "img/canchat.png",
        link: "downloads/CanChat.apk",
        zip : "downloads/CanChat.zip"
    },
    {
        id:2,
        name: "LightStore",
        version: "0.1",
        info: "This app is a light weight application store.",
        icon: "img/LSI.png",
        link: "downloads/CanChat.apk",
        zip : "downloads/CanChat.zip"
    },
];

function home() {
    location.href="#/home";
}

function mclick() {
    location.reload();
}

function hide() {
    allapks.innerHTML=" ";
}

function loadItems(id) {
    for (let i=0; i<apks.length; i++) {
        hide();
        if (id==apks[i].id) {
            apkViewer.innerHTML=`
                <div class="itemApp">
                    <div class="infoDiv">
                        <div class="itemGraphDiv">
                            <img src=${apks[i].icon} class="itemIcon">
                            <label>${apks[i].name}</label>
                        </div>
                        <div class="itemTextDiv">
                            <a class="versionText">Version: ${apks[i].version}</a>
                            <label>${apks[i].info}</label>
                        </div>
                    </div>
                    <div class="dvDiv">
                        <a href=${apks[i].link}><button class="downloadApkBtn">DOWNLOAD APK</button></a>
                        <a href=${apks[i].zip}><button class="downloadApkBtn">DOWNLOAD ZIP</button></a>
                    </div>
                </div>
            `;
            break;
        }
    }
    
    return data;
}

function allapk() {
    let data = " ";
    for (let i=0; i<apks.length; i++) {
        data = data+ `
                    <a href=${'#/'+apks[i].name}>
                    <div class="itemGraphDiv" onclick="loadItems(${apks[i].id});">
                        <img src=${apks[i].icon} class="itemIcon">
                        <label>${apks[i].name}</label>
                    </div>
                    </a>
            `;
        
    }
        allapks.innerHTML=data;
    
}


allapk();
