import Navbar from "../components/Navbar";

interface MainLayourProps {
  content: React.ReactNode;
}
const mainLayout = ({ content }: MainLayourProps) => {
  return (
    <>
      <div className="container-fluid">
        <Navbar />

        <div>{content}</div>
      </div>
    </>
  );
};

export default mainLayout;
