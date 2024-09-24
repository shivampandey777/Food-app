
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox";
export type FliterOptionState = {
  id: string;
  label: string;
}[];

const filterOptions: FliterOptionState = [
  { id: "burger", label: "Burger" },
  { id: "thali", label: "Thali" },
  { id: "biryani", label: "Biryani" },
  { id: "momos", label: "Momos" }
];
const FilterPage = () => {
  const appliedFilterHandler = (value: string) => {
    alert(value);
  }
  return (
    <div className="md:w-72">
      <div className="flex items-center space-x-2 my-5">
        <h1 className="font-medium text-lg ">
          Filter Cuisines
        </h1>
        <Button variant={'link'}>
          Reset
        </Button>
      </div>
      {
        filterOptions.map((Option) => (
          <div key={Option.id} className="flex items-center gap-2 space-x--2 my-5">
            <Checkbox
              id={Option.id}
              onClick={() => appliedFilterHandler(Option.label)}
            />
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {Option.label}
            </label>
          </div>
        ))
      }
    </div>
  )
}

export default FilterPage
