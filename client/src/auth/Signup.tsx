import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SignupInputState, userSignupSchema } from "@/schema/userSchema"
import { Separator } from "@radix-ui/react-separator"
import { Loader2, LockKeyhole, Mail, PhoneOutgoing, User } from "lucide-react"
import { ChangeEvent, FormEvent, useState } from "react" // Import ChangeEvent from react
import { Link } from "react-router-dom"


// type SignupInputState = {
//   email: string;
//   password: string;
//   fullname: string;
//   contact: number;
// }
const Signup = () => {
  const [input, setInput] = useState<SignupInputState>({
    email: "",
    password: "",
    fullname: "",
    contact: ""
  });
  const [errors, setErrors] = useState<Partial<SignupInputState>>({});
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value })
  }
  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    //form validation check
    const result = userSignupSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<SignupInputState>);

      return;
    }
    //login api implimentation start here
    console.log(input)

  }
  const loading = false;
  return (
    <div className="flex items-center justify-center min-h-screen w-full ">
      <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-center">Platter</h1>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="Text"
              value={input.fullname}
              onChange={changeEventHandler}
              name="fullname"
              placeholder="Fullname"
              className="pl-10 focus-visible:ring-1"
            />
            <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {
              errors && <span className="text-red-500 text-xs">{errors.fullname}</span>
            }
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="email"
              value={input.email}
              onChange={changeEventHandler}
              name="email"
              placeholder="Email"
              className="pl-10 focus-visible:ring-1"
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {
              errors && <span className="text-red-500 text-xs">{errors.email}</span>
            }
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <Input
              type="password"
              value={input.password}
              onChange={changeEventHandler}
              name="password"
              placeholder="Password"
              className="pl-10 focus-visible:ring-1"
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {
              errors && <span className="text-red-500 text-xs">{errors.password}</span>
            }
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              value={input.contact}
              onChange={changeEventHandler}
              name="contact"
              placeholder="Contact"
              className="pl-10 focus-visible:ring-1"
            />
            <PhoneOutgoing className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {
              errors && <span className="text-red-500 text-xs">{errors.contact}</span>
            }
          </div>
        </div>
        <div className="mb-10">
          {
            loading ? <Button disabled className="w-full bg-orange hover:bg-hoverOrange"><Loader2 className="mr-2 h-4 w-4 animate-spin" />please wait</Button> : <Button type="submit" className="w-full bg-orange hover:bg-hoverOrange">Signup</Button>
          }

        </div>
        <Separator />
        <p className="mt-2 text-center">
          Already have an account?{""}
          <Link to="/login" className="text-blue-500 hover:bg-text-blue-500 hover:underline">Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Signup


