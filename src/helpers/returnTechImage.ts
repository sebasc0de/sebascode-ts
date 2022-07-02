export const returnTechImage = (techonology: string): string => {
  switch (techonology) {
    case "typescript":
      return "bg-blue-600";

    case "zustand":
      return "bg-orange-300";

    case "react-router-dom":
      return "bg-red-500";

    case "wp":
      return "bg-blue-500";

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
