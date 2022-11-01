
const Table = ({ data }) => {
    return (
      <table>
        <div className="tables">
          {data.map((item) => (
            <tr key={item.id}>
              <img src={item.img}></img>
              <text>{item.first_name}</text>
            </tr>
          ))}
          
        </div>
      </table>
    );
  };
  
  export default Table;