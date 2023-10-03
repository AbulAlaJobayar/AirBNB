import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";
const CategoryBox = ({ label, icon: Icon }) => {
    const navigate=useNavigate()
  const [params, setParams] = useSearchParams();
  const value = params.get("category");
  const handleClicked = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updateQuery = { ...currentQuery, category: label };
    const url = qs.stringifyUrl({
      url: "/",
      query: updateQuery,
    },{skipNull:true})
    navigate(url)
  };
  console.log(value);
  return (
    <div
      onClick={handleClicked}
      className="flex flex-col justify-center items-center gap-2 p-3 border-b-2 cursor-pointer hover:text-neutral-800 border-transparent text-neutral-500"
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
