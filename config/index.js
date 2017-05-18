var configValues = require('./config');

module.exports = {

    getDbConnectionString: function(){
        return 'mongodb://'+ configValues.uname + ':' + configValues.pwd + 
        '@ds151697.mlab.com:51697/nodetodo';
    }
}