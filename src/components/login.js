export const Login = ({ setter, handler }) => {
  return (
    // to update value use a form
    <form onSubmit={handler}>
      {/* need onSubmit within the form tag to stop it rerendering */}
      {/* onChange will change the input while it is being interacted with and placeholer will populate placeholder with required text ie username etc*/}
      <input placeholder='username' onChange={(e) => setter(e.target.value)} />
    </form>
  );
};
