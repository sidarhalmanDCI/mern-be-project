import { assets } from "../assets/assets.js"
console.log(assets.logo)

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0">
        <img className="w-28  sm:w-32" src={ assets.logo } alt="logo" />
        <button className="flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2">
            Login
            <img src={assets.arrow_icon} alt="arrow icon" />
        </button>
    </div>
  )
}
export default Navbar