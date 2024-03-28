import UseLocalStorage from "../../Hooks/UseLocalStorage";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from 'recharts';

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

const BarCha = () => {
  const { localData } = UseLocalStorage();
  const colors = ['#0085F6', '#00C29C', '#FBB929', '#FC8042', '#FB0100', '#00FFFF','#59C6D2','#23BE0A','#FFAC3326'];
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart data={localData} width={400} height={800}>
          <XAxis dataKey='bookName'></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Bar dataKey="totalPages" shape={<TriangleBar />} label={{ position: 'top' }}>
            {localData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
         
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCha;