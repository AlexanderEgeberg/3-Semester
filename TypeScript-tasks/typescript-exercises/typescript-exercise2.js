var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(firstname, lastname, rateofinterest, ssn) {
        if (rateofinterest === void 0) { rateofinterest = 0; }
        this.balance = 0;
        this.firstName = firstname;
        this.lastName = lastname;
        this.rateOfInterest = rateofinterest;
        this.ssn = ssn;
        this.accountNumber = BankAccount.nextAccountNumber;
        BankAccount.nextAccountNumber++;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    ;
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.withdraw = function (amount) {
        this.balance -= amount;
        console.log("you've withdrawn: " + amount + " from your account");
        console.log("your account has: " + this.balance + " left");
    };
    BankAccount.nextAccountNumber = 1;
    return BankAccount;
}());
var overdraftAccount = /** @class */ (function (_super) {
    __extends(overdraftAccount, _super);
    function overdraftAccount(firstname, lastname, rateofinterest, ssn, interest, limit) {
        var _this = _super.call(this, firstname, lastname, rateofinterest, ssn) || this;
        _this.overdraftInterest = interest;
        _this.overdraftLimit = limit;
        return _this;
    }
    overdraftAccount.prototype.checklimit = function () {
        return this.balance <= this.overdraftLimit;
    };
    overdraftAccount.prototype.addInterest = function () {
    };
    ;
    return overdraftAccount;
}(BankAccount));
var loanAccount = /** @class */ (function (_super) {
    __extends(loanAccount, _super);
    function loanAccount(firstname, lastname, rateofinterest, ssn, principal) {
        var _this = _super.call(this, firstname, lastname, rateofinterest, ssn) || this;
        _this.principal = principal;
        return _this;
    }
    loanAccount.prototype.checklimit = function () {
        return true;
    };
    loanAccount.prototype.addInterest = function () {
    };
    ;
    return loanAccount;
}(BankAccount));
var konto = new overdraftAccount("Alex", "Egeberg", 0, 1234, 10, -1000);
var konto2 = new loanAccount("Alex", "meh", 0.20, 1235, 69);
konto.withdraw(999);
console.log(konto.checklimit());
// console.log(konto2.accountNumber);  
