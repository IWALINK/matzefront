import { Helmet } from "react-helmet-async";

const HelmetChanger = ({ title }) => {
  return (
    <Helmet>
      <title>Restaurant La Matze à Genève</title>
    </Helmet>
  );
};

export default HelmetChanger;
