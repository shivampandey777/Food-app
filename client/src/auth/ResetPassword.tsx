import { Input } from "@/components/ui/input";
import { Loader2, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState<string>("");
    const Loading:boolean = false;
    return (
        <div className="flex items-center justify-center  min-h-screen w-full">
            <form className="flex flex-col gap-5 md:border md:p-8 w-full max-w-md rounded-lg mx-4">
                <div className="text-center">
                    <h1 className="font-extrabold text-2xl mb-2">Reset Password</h1>
                    <p className="text-sm text-gray-600">
                        Enter your new password to reset your password
                    </p>
                </div>
                <div className="relative w-full">
                    <Input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter your new Password"
                        className="pl-10 "
                    />
                    <LockKeyhole className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />

                </div>
                {
                    Loading ? (
                        <button disabled className="bg-orange hover:bg-hoverOrange text-white py-2 rounded-lg">
                            <span className="flex items-center justify-center">
                                <span className="mr-2">Please wait</span>
                                <span className="animate-spin">
                                    <Loader2 />
                                </span>
                            </span>
                        </button>
                    ) : (
                        <button className="bg-orange hover:bg-hoverOrange text-white py-2 rounded-lg">
                             Reset 
                        </button>
                    )
                }
                <span className="text-center">
                    Back to{" "} 
                    <Link to="/login" className= "hover:text-blue-500 hover:underline">Login</Link>
                </span>
            </form>
        </div>
    );
}
