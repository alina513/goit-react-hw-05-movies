export const Form = ({ submit }) => {
  return (
    <div>
      <form onSubmit={submit}>
        <input name="text" type="text" autoComplete="off" autoFocus />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};
