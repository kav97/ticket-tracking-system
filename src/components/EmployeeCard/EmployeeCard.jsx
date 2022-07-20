import "./EmployeeCard.scss";
import Ticket from "../Ticket/Ticket";

const EmployeeCard = ({ name, role }) => {
  return (
    <>
      <section className="card">
        <div className="card__employee">
          <div className="employee">
            <p className="employee__name">{name}</p>            
            <p className="employee__role">{role}</p>
          </div>
        </div>
        <Ticket />
      </section>
    </>
  );
};

export default EmployeeCard;