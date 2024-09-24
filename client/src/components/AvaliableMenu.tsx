import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card"
import Image from "@/assets/hero_pizza.png";


const AvaliableMenu = () => {
    return (
        <div className="md:p-4">
            <h1 className="text-xl md:text-2xl font-extrabold mb-6 ">Avaliable Menu</h1>
            <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
                <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
                    <img src={Image} alt="image" 
                    className="w-full h-42 object-cover" />
                    <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Tamdoori Briyani
              </h2>
              <p className="text-sm text-gray-600 mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium pariatur aut excepturi libero id ab similique.</p>
              <h3 className="text-lg font-semibold mt-4">
                Price: <span className="text-[#D19254]">₹500</span>
              </h3>
            </CardContent>
            <CardFooter className="p-4">
              <Button
                // onClick={() => {
                //   addToCart(menu);
                //   navigate("/cart");
                // }}
                className="w-full bg-orange hover:bg-hoverOrange"
              >
                Add to Cart
              </Button>
            </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default AvaliableMenu
