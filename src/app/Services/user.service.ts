export class UserService{
    users = [
        {name: 'John', status: 'active'},
        {name: 'Mark', status: 'inactive'},
        {name: 'Steve', status: 'active'}
    ]

    AddNewUser(name: string, status: string){
        this.users.push({name: name, status: status});
    }
}