import { stats } from "../constants";

const Stats = () => (
      <div className="flex gap-x-10">
      {stats.map((stat, index) => (
        <div key={index} >
          <h1 className="text-white text-2xl lg:text-4xl font-medium">
            {stat.value}K
            <span className="text-accent">+</span>
          </h1>
          <span className="w-1 flex text-xs lg:text-[.813rem] text-emerald-300">
            {stat.title}
          </span>
        </div>
        ))}
      </div>
);

export default Stats;
