import SignupRouter from "../routes/user/singup.router";
import { Generator, LoadUserReposiroty, SaveUserReposiroty } from "../../frameworks";
import { SignupUserUseCase } from "../../core";
import express from "express"

const signupRouter = new SignupRouter(new SignupUserUseCase(new Generator,new LoadUserReposiroty,new SaveUserReposiroty))


export {
    signupRouter
}