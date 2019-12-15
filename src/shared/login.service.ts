export class loginService{

    users = [{
        login: 'user',
        password: '1234',
        isAdmin: false,
    },
    {
        login: 'admin',
        password: '12345',
        isAdmin: true,
    }
    ]

    public isPresentInUsersList(login: string, password: string){
        let isInList;
        this.users.forEach(user => {
            if(user.login === login && user.password === password){
                isInList = user;
            }
        });
        return isInList; 
    }
}