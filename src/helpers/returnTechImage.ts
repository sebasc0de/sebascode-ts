export const returnTechImage = (techonology: string): string => {
  switch (techonology) {
    case "typescript":
      return "bg-blue-600";

    case "mongodb":
      return "./logos/mongodb.png";

    case "react-router-dom":
      return "bg-red-500";

    case "nodejs":
      return "./logos/nodejs.png";

    case "html":
      return "bg-red-500";

    case "php":
      return "bg-cyan-500";

    case "bootstrap":
      return "./logos/bootstrap.png";

    case "reactjs":
      return "./logos/react.png";

    case "firebase":
      return "./logos/firebase.png";

    case "redux":
      return "./logos/redux.png";

    case "commercejs":
      return "bg-green-500";

    default:
      return "";
  }
};
