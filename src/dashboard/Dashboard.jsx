// import ProfileWidget from "../dashboard/ProfileWidget";
// import WeatherWidget from "../dashboard/WeatherWidget";
// import NewsWidget from "../dashboard/NewsWidget";
// import NotesWidget from "../dashboard/NotesWidget";
// import TimerWidget from "../dashboard/TimerWidget";
import ProfileWidget from "./ProfileWidget";
import WeatherWidget from "./WeatherWidget";
import NewsWidget from "./NewsWidget";
 import NotesWidget from ".//NotesWidget";
import TimerWidget from "./TimerWidget";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="grid grid-cols-3 grid-rows-2 gap-6">
        
        {/* LEFT TOP - PROFILE */}
        <div className="col-span-1 row-span-1">
          <ProfileWidget />
        </div>

        {/* RIGHT SIDE - NEWS (spans 2 rows) */}
        <div className="col-span-2 row-span-2">
          <NewsWidget />
        </div>

        {/* LEFT BOTTOM - WEATHER + TIMER STACK */}
        <div className="col-span-1 row-span-1 flex flex-col gap-6">
          <WeatherWidget />
          <TimerWidget />
        </div>

      </div>

      {/* FULL WIDTH NOTES (Page 4 extension in Figma) */}
      <div className="mt-6">
        <NotesWidget />
      </div>
    </div>
  );
};

export default Dashboard;