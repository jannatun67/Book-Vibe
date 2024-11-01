
import BannerImg from "../../assets/banner.jpg"

const Banner = () => {
    return (
        <div className="hero  bg-base-200  rounded-xl mt-10">
  <div className="hero-content flex-col lg:flex-row-reverse p-10">
    <img
      src={BannerImg}
      className="bg-base-200" />
    <div className=" space-y-6">
      <h1 className="text-5xl font-bold ">Books to freshen up your bookshelf</h1>
      
      <button className="btn bg-green-500 text-white">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;