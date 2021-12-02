// authentication for login page in add appointements
class Auth{
    constructor(){
        this.authenticated=false;
    }
    login(cb){
        this.authenticated=true;
        cb();
    }
    logout(cb){
        this.authenticated=false;
        cb();
    }
    isAuthenticated(){
        return this.authenticated;
    }
}
export default new Auth();
