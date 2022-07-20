import "./CardContainer.scss";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const CardContainer = ({team}) => {
  const teamCards = team.map((employee) => (
    <EmployeeCard name={employee.name} role={employee.role} key={employee.id} />
  ));

  return <section className="card-container">{teamCards}</section>;
};

export default CardContainer;