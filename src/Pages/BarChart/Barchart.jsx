// import { getPath } from "recharts/types/shape/Curve";
import UseLocalStorage from "../../Hooks/UseLocalStorage";
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 2} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);

const TriangleBar = (props) => {
  const {
    fill, x, y, width, height,
  } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Barchart = () => {
  const {localData} = UseLocalStorage();
  console.log(localData);
  return (
    <div>
      <BarChart width={1200} height={400} data={localData}>
        <XAxis dataKey='bookName'></XAxis>
        <YAxis dataKey='totalPages'></YAxis>
      <Bar dataKey="totalPages" fill="red"
      shape={<TriangleBar />} />
      
   
  </BarChart>
     
    </div>
  );
};

export default Barchart;