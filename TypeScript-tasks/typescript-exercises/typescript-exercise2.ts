interface IBankAccount{
    accountNumber: number,
    balance: number,
    firstName: string,
    lastName: string,
    rateOfInterest: number,
    ssn: number;

    addInterest();
    addInterest(fee: number);
    deposit(amount: number);
    getBalance() : number;
    withdraw(amount: number);
}

abstract class BankAccount implements IBankAccount {

    accountNumber: number;
    balance: number;
    firstName: string;
    lastName: string;
    rateOfInterest: number;
    ssn: number;
    static nextAccountNumber: number = 1;
    constructor(firstname: string, lastname: string, rateofinterest: number = 0, ssn: number) {
        this.balance = 0;
        this.firstName = firstname;
        this.lastName = lastname;
        this.rateOfInterest = rateofinterest;
        this.ssn = ssn;
        this.accountNumber = BankAccount.nextAccountNumber;
        BankAccount.nextAccountNumber++;
    }

    abstract addInterest();
    abstract addInterest(fee: number);

    deposit(amount: number) {
        this.balance += amount;
    };

    getBalance(): number {
        return this.balance;
    }
    withdraw(amount: number) {
        this.balance -= amount;
        console.log("you've withdrawn: " + amount + " from your account");
        console.log("your account has: " + this.balance + " left");
    }
}

class overdraftAccount extends BankAccount {
    overdraftInterest: number;
    overdraftLimit: number;

    constructor(firstname: string, lastname: string, rateofinterest: number, ssn: number, interest: number, limit: number) {
        super(firstname,lastname,rateofinterest,ssn);
        this.overdraftInterest = interest;
        this.overdraftLimit = limit;
    }
    checklimit(): boolean {
        
        return this.balance <= this.overdraftLimit;
    }
    addInterest() {

    };
}

class loanAccount extends BankAccount {
    principal: number;

    constructor(firstname: string, lastname: string, rateofinterest: number, ssn: number, principal: number) {
        super(firstname,lastname,rateofinterest,ssn);
        this.principal = principal;
    }
    checklimit(): boolean {
        return true;
    }
    addInterest() {

    };
}



const konto: overdraftAccount = new overdraftAccount("Alex","Egeberg",0,1234,10, -1000);
const konto2: IBankAccount = new loanAccount("Alex","meh",0.20,1235,69);

konto.withdraw(999);
console.log(konto.checklimit());
// console.log(konto2.accountNumber);  