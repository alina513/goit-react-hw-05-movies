import css from "./Form.module.css"
export const Form = ({ submit }) => {
  return (
    <div>
      <form onSubmit={submit} className={css.form}>
        <input name="text" type="text" autoComplete="off" autoFocus className={css.input} />
        <button type="submit" className={css.button}>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};
