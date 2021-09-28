//number one
let userFunctionStore = {
    sayType: function() {
        console.log("I am a " + this.type);
    }
};

//#1 solution
let adminFunctionStore = Object.create(userFunctionStore);

//#2 two
function userFactory(name, score){
    let user = Object.create(userFunctionStore);
    user.type = "User";
    user.name = name;
    user.score = score;
    return user;
}

//#2 solution
function adminFactory(name,score){
    let admin = Object.create(adminFactoryStore);
    admin.name = name;
    admin.score = score;
    return admin;
}

//# 4 Make sure the value of the 'type' field for adminFactory object is 'Admin' instead of 'User'

//# 4 solution
adminFunctionStore.type = "Admin";

//#5 Make sure that adminFactory objects have access to adminFunctionStore methods, without copying them over. 

function adminFactory(name,score){
    let admin = Object.create(adminFunctionStore);
    admin.name = name;
    admin.score = score;
    return admin;
}

//#6 solution
userFunctionStore.sharePublicMessage = function (){
    console.log("Welcome Users!");
};

//#6
let adminFromFactory = adminFactory("Michael", 5);
adminFromFactory.sayType();
// -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage();
// -> Logs "Welcome users!"