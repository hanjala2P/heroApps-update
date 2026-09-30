import { FiTrendingUp } from "react-icons/fi";
import { Link, useLoaderData } from "react-router";
import AppCard from "./AppCard";

const OurApps = () => {
  const data = useLoaderData();

  // ডেটা অ্যারে কিনা তা নিশ্চিত করা (যদি ব্যাকএন্ড থেকে অবজেক্ট বা অন্য কিছু আসে)
  const apps = Array.isArray(data) ? data : (data?.apps || []);

  return (
    <div>
      <div className="">
        <h2 className="text-4xl font-bold text-center text-primary flex justify-center gap-3">
          Trending Apps
          <FiTrendingUp size={48} className="text-secondary"></FiTrendingUp>
        </h2>
        <p className="text-center text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-5">
        {Array.isArray(apps) && apps.length > 0 ? (
          apps.slice(0, 8).map((app) => (
            <AppCard key={app._id || app.id} app={app}></AppCard>
          ))
        ) : (
          <div className="col-span-full text-center py-5">
            <p className="text-gray-400">No trending apps found.</p>
          </div>
        )}
      </div>

      <div className="text-center">
        <Link
          to="/apps"
          className="btn btn-wide text-white hover:shadow-xl bg-gradient-to-tl to-[#632EE3] from-[#9F62F2]"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default OurApps;