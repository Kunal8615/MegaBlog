import conft from "../conf/conf";
import { Client, Account, ID ,Databases,Storage,Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client.setEndpoint(conft. appwriteUrl)
        .setProject(conft. appwriteprojectId);
        this.account = new Account(this.client);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    async createPost({title,slug,content,featuredimage,status,userid}){
        try {
            return await this.databases.createDocument(
                conft.appwritedatabaseId,
                conft.appwritecollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userid
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    async updatepost(slug,{title,content,featuredimage,status}){
        try {
            return await this.databases.updateDocument(
                conft.appwritedatabaseId,
                conft.appwritecollectionId,
                slug,
                {
                    title,content,
                    featuredimage,
                    status
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    async deletepost(slug){
        try {
            await this.databases.deleteDocument(
                conft.appwritedatabaseId,
                conft.appwritecollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async getpost(slug){
        try {
           return await this.databases.deleteDocument(
            conft.appwritedatabaseId,
                conft.appwritecollectionId,
                slug)
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async getposts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conft.appwritedatabaseId,
                conft.appwritecollectionId,
                queries,
               
            )
        } catch (error) {
            console.log(error);
            return false
        }
    }

    //file uploads service
    async uploadfile(file){
        try {
            return await this.bucket.createFile(
                conft.appwritebukectId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async deletefile(fileid){
        try {
            await this.bucket.deleteFile(
                conft.appwritebukectId,
                fileid
            )
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getFilePreview(fileid){
        return this.bucket.getFilePreview(
            conft.appwritebukectId,
            fileid
        )
    }
}

const service = new Service()
export default Service;