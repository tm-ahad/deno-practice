
class User
{
    public name: string
    public age: number
    public email: string
    public password: string

    constructor(name: string = '', age: number = 9, email: string = '', password: string = '')
    {
        this.name = name
        this.age = age
        this.email = email
        this.password = password
    }
}