import TicketCard from "../components/TicketCard";

const Dashboard = () => {
  const tickets = [
    {
      category: "Q1 2022",
      color: "red",
      title: "Something cool",
      owner: "Rey",
      avatar:
        "https://avatars.githubusercontent.com/u/6840524?v=4",
      status: "done",
      priority: 1,
      progress: 20,
      description: "Something nice",
      timestamp: "27-08-2022",
    },
    {
      category: "Q1 2022",
      color: "red",
      title: "Sadge but cool",
      owner: "Rey",
      avatar:
        "https://avatars.githubusercontent.com/u/6840524?v=4",
      status: "working on it",
      priority: 2,
      progress: 40,
      description: "Something sad",
      timestamp: "27-08-2022",
    },
    {
      category: "Q2 2022",
      color: "blue",
      title: "Cool but cool",
      owner: "Anna",
      avatar:
        "https://avatars.githubusercontent.com/u/6840524?v=4",
      status: "stuck",
      priority: 3,
      progress: 80,
      description: "Something wow",
      timestamp: "30-08-2022",
    },
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  console.log(uniqueCategories);

   return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={filteredTicket.color}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  )
};

export default Dashboard;
