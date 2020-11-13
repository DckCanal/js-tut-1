let os = require("os");
document.write('User info: '+JSON.stringify(os.userInfo())+"<br>Platform:"+os.platform()
                +"<br>User home directory: "+os.homedir()+"<br>Architecture: "+os.arch());