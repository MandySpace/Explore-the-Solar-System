function Jump() {
  return (
    <section className="jump">
      <div className="jump__main-container">
        <div className="jump__result">
          <p className="jump__result__answer big-font">3.2m</p>
        </div>
        <form action="#" className="jump__form">
          <label htmlFor="jump" className="jump__form__input-label">
            How high can you jump?
          </label>

          <input id="jump" type="number" className="jump__form__input" />

          <div className="jump__radio-button-container">
            <input
              type="radio"
              name="jump_unit"
              value="m"
              id="m"
              className="jump__form__radio jump__form__radio-1"
            />
            <label htmlFor="m" className="jump__form__radio-label">
              m
            </label>
            <input
              type="radio"
              name="jump_unit"
              value="ft"
              id="ft"
              className="jump__form__radio jump__form__radio-2"
            />
            <label htmlFor="ft" className="jump__form__radio-label">
              ft
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Jump;
