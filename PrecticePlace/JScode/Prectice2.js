const propertyName = "birth";
const getJob = () => "job";

const a = {
  ["topic" + "name"]: "Modern JavaScript",
  [propertyName]: 2017,
  [getJob()]: "프로그래밍 강사",
};

console.log(a);
