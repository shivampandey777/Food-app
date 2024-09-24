import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Loader2, LocateIcon, Mail, MapPin, MapPinnedIcon, Plus } from "lucide-react"
import { FormEvent, useRef, useState } from "react";
import { Form } from "react-router-dom"
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-menubar";
import { Button } from "./ui/button";

type ProfileData = {
  fullname: string;
  email: string;
  address: string;
  city: string;
  country: string;
  profilePicture: string;
};


const Profile = () => {
  // const {user, updateProfile} = useUserStore();
  const isLoading = false;
  const [profileData, setProfileData] = useState({
    // fullname: user?.fullname || "",
    // email: user?.email || "", 
    // address: user?.address || "",
    // city: user?.city || "",
    // country: user?.country || "",
    // profilePicture: user?.profilePicture || "",
    fullname: "",
    email: "",
    address: "",
    city: "",
    country: "",
    profilePicture: "",
  });
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [selectedProfilePicture, setSelectedProfilePicture] =
    useState<string>( profileData.profilePicture ||"");
  // profileData.profilePicture ||

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedProfilePicture(result);
        setProfileData((prevData) => ({
          ...prevData,
          profilePicture: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const updateProfileHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //UPDATAE PROFILE API IMPLIMENTATION
    // try {
    //   setIsLoading(true);
    //   await updateProfile(profileData);
    //   setIsLoading(false);
    // } catch (error) {
    //   setIsLoading(false);
    // }
    console.log(profileData);
  };

  return (
    <form onSubmit={updateProfileHandler} className="max-w-7xl mx-auto my-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className=" relative md:w-28 md:h-20 w-20 h-20">
            <AvatarImage className="w-20 h-20 rounded-full" src={selectedProfilePicture} />
            <AvatarFallback  className="absolute bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center">CN</AvatarFallback>
            <input
              ref={imageRef}
              className="hidden"
              type="file"
              accept="image/*"
              onChange={fileChangeHandler}
            />
            <div
              onClick={() => imageRef.current?.click()}
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full cursor-pointer w-20 "
            >
              <Plus className="text-white w-8 h-8" />
            </div>
          </Avatar>
          <Input
            type="text"
            name="fullname"
            value={profileData.fullname}
            onChange={changeHandler}
            className="font-bold text-2xl outline-none border-none focus-visible:ring-transparent"
          />

        </div>
      </div>
      <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-10">
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200 ">
          <Mail className="text-gray-500" />
          <div className="w-full">
            <Label className="font-bold">Email</Label>
            <input
              className="w-full  text-gray-600 bg-transparent focus-visible:border-transparent outline-none border-none"
              name="email"
              value={profileData.email}
              onChange={changeHandler}
            />
          </div>


        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200 ">
          <LocateIcon className="text-gray-500" />
          <div className="w-full">
            <Label className="font-bold">Address</Label>
            <input
              className="w-full  text-gray-600 bg-transparent focus-visible:border-transparent outline-none border-none"
              name="address"
              value={profileData.address}
              onChange={changeHandler}
            />
          </div>


        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200 ">
          <MapPin className="text-gray-500" />
          <div className="w-full">
            <Label className="font-bold">City</Label>
            <input
              className="w-full  text-gray-600 bg-transparent focus-visible:border-transparent outline-none border-none"
              name="city"
              value={profileData.city}
              onChange={changeHandler}
            />
          </div>


        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <MapPinnedIcon className="text-gray-500" />
          <div className="w-full">
            <Label className="font-bold">Country</Label>
            <input
              className="w-full  text-gray-600 bg-transparent focus-visible:border-transparent outline-none border-none"
              name="country"
              value={profileData.country}
              onChange={changeHandler}
            />
          </div>


        </div>
      </div>
      <div className="text-center">
        {isLoading ? (
          <Button disabled className="bg-orange hover:bg-hoverOrange">
            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button type="submit" className="bg-orange hover:bg-hoverOrange">Update</Button>
        )}
      </div>
    </form>
  )
}

export default Profile
