import {z} from "zod";


//zod schema will be written here in future to share types between backend and frontend

export const  CreateUserSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(6).max(20),
    name: z.string().min(3).max(50)
});

export const SignInSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(6).max(20)
});

export const CreateRoomSchema = z.object({
    name: z.string().min(3).max(20)
});