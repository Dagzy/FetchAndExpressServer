class Cat {
    constructor(name = 'Ricky', weight, tail){
        this.name = name,
        this.weight = weight,
        this.tail = tail
    }
    
}
const kitty = new Cat()
console.log(kitty.name)

class Lion extends Cat{
    constructor(name, weight){
        super(name, weight)
        this.tail = true
    }
    roar(){
        console.log(`I am ${this.name}, hear me meow!`)
    }
}
const Timmy = new Lion('Timmy', 300)
console.log(Timmy.weight)
console.log(`Lions have tails: ${Timmy.tail}`)
Timmy.roar()



class User {
    constructor(name = 'JimmyJam', age, height) {
        this.name = name,
        this.age = age,
        this.height = height
    }
}
class superUser extends User {
    constructor(name, age) {
        super(name, age)
    }
    consoleLog(){
        console.log(`My name is ${this.name}, and I am ${this.age} years old. `)
    }
}
const quincy = new superUser('Quincy', 34)
quincy.consoleLog()
console.log(new User().name)



class baseModel {
    constructor(options = {}, data = []) { // class constructor
        this.name = 'Base'
        this.url = 'http://azat.co/api'
        this.data = data
        this.options = options
    }

    getName() { // class method
        console.log(`Class name: ${this.name}`)
    }
}
class AccountModel extends baseModel {
    constructor(options, data) {
        super({
            private: true
        }, ['32113123123', '524214691']) //call the parent method with super
        this.name = 'Account Model'
        this.url += '/accounts/'
    }
    get accountsData() { //calculated attribute getter
        // ... make XHR
        return this.data
    }
}
let accounts = new AccountModel(5)
accounts.getName()
console.log('Data is %s', accounts.accountsData, accounts.url, accounts.options)

// git status git add . git commit -m "" git push [origin] [master]