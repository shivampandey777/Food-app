// import exp from 'constants';
import {z} from 'zod';

export const userSignupSchema = z.object({
    fullname: z.string().min(1,"Fullname is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6,"Password is too short"),
    contact: z.string().min(10,"Constact number must of 10 digits")    
});

export type SignupInputState = z.infer<typeof userSignupSchema>;

export const userLoginSchema = z.object({
 
    email: z.string().email("Invalid email address"),
    password: z.string().min(6,"Password is too short"),
       
});

export type LoginInputState = z.infer<typeof userLoginSchema>;