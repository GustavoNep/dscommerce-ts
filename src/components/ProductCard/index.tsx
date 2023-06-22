import './styles.css'
import computImg from '../../assets/notbook.png'

export default function ProductCard() {
  return (
    <div className="dsc-card">
      <div className="dsc-catalog-card-top dsc-line-bottom">
        <img src={computImg} alt="Computer" />
      </div>
      <div className="dsc-catalog-card-bottom">
        <h3>R$ 5000,00</h3>
        <h4>Computador Gamer XT</h4>
      </div>
    </div>
  );
}
