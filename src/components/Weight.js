function Weight() {
  return (
    <section className="weight">
      <div className="weight__main-container">
        <form action="#" className="weight__form">
          <label htmlFor="weight" className="weight__form__input-label">
            Enter your weight
          </label>

          <input id="weight" type="number" className="weight__form__input" />

          <div className="weight__radio-button-container">
            <input
              type="radio"
              name="weight_unit"
              value="kg"
              id="kg"
              className="weight__form__radio weight__form__radio-1"
            />
            <label htmlFor="kg" className="weight__form__radio-label">
              Kg
            </label>
            <input
              type="radio"
              name="weight_unit"
              value="lb"
              id="lb"
              className="weight__form__radio weight__form__radio-2"
            />
            <label htmlFor="lb" className="weight__form__radio-label">
              Lb
            </label>
          </div>
        </form>
        <div className="weight__result">
          <p className="weight__result__answer big-font">69Kilos</p>
        </div>
      </div>
    </section>
  );
}

export default Weight;
