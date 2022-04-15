
const Coin = (props) => {
  const styles = {
    color: props.percent < 0 ? 'red' : '#4ee44e',
  }
  return (
    <div className="coin">
      <div className="content">
          <span>
            <img className="coin-img" src={props.img} alt="" />{props.coin}
          </span>
          <span>Rs.{props.rs}</span>
          <span style={styles}>{props.percent}</span>
          <span className="m-cap">Mkt Cap:<p>{props.mcap}</p></span>
          
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default Coin;
