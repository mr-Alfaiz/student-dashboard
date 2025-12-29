// lib/appwrite.ts

import { Client, Account, Databases, ID, Query } from "appwrite";

const client = new Client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

export const account = new Account(client);
export const databaseId = '69493fc00015e17e6634'
export const studentCollectionId ='student-data'
export const database = new Databases(client)
export { ID }
export { Query }