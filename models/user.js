module.exports = (seq, datatype) => {
    const user = seq.define('user', {
        email : {
            type : datatype.STRING(255),
            allowNull : false,
            primaryKey : true
        },
        password : {
            type : datatype.STRING(45),
            allowNull : false
        },
        username : {
            type : datatype.STRING(24),
            allowNull : false,
            primaryKey : true,
            unique : true
        },
        id : {
            type : datatype.STRING(255),
            allowNull : false,
            primaryKey : true,
            unique : true
        },
        time : {
            type : datatype.DATE,
            allowNull : false
        },
        gender : {
            type : datatype.INTEGER,
            allowNull : false
        },
        age : {
            type : datatype.DECIMAL
        }
    }, {
        tableName : 'user',
        freezeTableName : false,
        timestamps : true
    });

    return user;
}