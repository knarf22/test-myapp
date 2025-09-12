import z from "zod";


export const registerSchema = z.object({
    fullname : z.string().min(6,"minimum 6 charactesr"),
    username : z.string().min(6,"minimum 6 characters"),
    password : z.string().min(6,"minimum 8 characters"),
    confirmPassword : z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message : "Password doesn't match",
    path : ["confirmPassword"]
})

export type RegisterSchema = z.infer<typeof registerSchema>;
