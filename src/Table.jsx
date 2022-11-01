
const Table = ({ data }) => {
    return (
      <div className="tabless">
        <div className="tables">
          {data.map((item) => (
            <div className="tr" key={item.id}>
              <img src={item.img}></img>
              <text>{item.first_name}</text>
            </div>
          ))}
          
        </div>
      </div>
    );
  };
  
  export default Table;