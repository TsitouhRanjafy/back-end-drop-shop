class Validator {
    private emailExp = /email/

    isEmailValid(email: string): boolean {
        return this.emailExp.test(email);
    }

}

export default Validator