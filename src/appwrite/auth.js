import conft from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class Authservice {
    client = new Client();
    Account;
    constructor(){
        this.client.setEndpoint(conft. appwriteUrl)
        .setProject(conft. appwriteprojectId);
        this.account = new Account(this.client)
    }
    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name)
            if(userAccount){
               return this.login({email,password})
              
            }

            else{
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
             return await this.account.createEmailSession(email,password);
        } catch (error) {
            throw error
        }
    }
    
    async getCurrentuser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("apprwite service :: getcurrent");
        }
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("error");
        }
    }

}
const authservice = new Authservice();

export default authservice;

