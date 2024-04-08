import GridLoader from "react-spinners/GridLoader";
import css from "./Loader.module.css";

export default function Loader({ loading }) {
  return (
    <div className={css.loader}>
      <GridLoader color={"#d83338"} loading={loading} size={15} />
    </div>
  );
}
