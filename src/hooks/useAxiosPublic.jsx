import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-alpha.vercel.app",
});
function useAxiosPublic() {
  return axiosPublic;
}

export default useAxiosPublic;
