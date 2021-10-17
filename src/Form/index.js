import "./style.css"; 

const Form = () => (
  <form className="form">
    <label className="form__label">
      <input className="form__input" type="text" placeholder="Co jest do zrobienia?" required />
      <button className ="form__button">Dodaj zadanie</button>
    </label>
  </form>
);

export default Form;