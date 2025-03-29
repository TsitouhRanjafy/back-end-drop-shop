class Validator {
    private emailExp: RegExp = /email/

    isEmailValid(email: string): boolean {
        return this.emailExp.test(email);
    }
}

export default Validator