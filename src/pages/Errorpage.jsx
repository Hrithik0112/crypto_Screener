import { useRouteError } from "react-router-dom";

const errorimg = "https://agentestudio.com/uploads/post/image/69/main_how_to_design_404_page.png";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img src={errorimg} alt="error image" />
    </div>
  );
}
