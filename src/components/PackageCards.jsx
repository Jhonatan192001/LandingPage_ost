import Card from './Card';
import PropTypes from 'prop-types';

const PackageCards = 
({ cards = [
    {
        id: 1,
        title: "Titulo",
        description: "Aenean non arcu scelerisque, mattis tellus quis, dignissim nisi. Nunc dignissim et nibh a molestie. In laoreet convallis dui, vel sodales enim laoreet quis. Phasellus eu risus molestie, finibus sapien sit amet, laoreet magna. Quisque pellentesque, dui ut rutrum posuere, nunc felis congue massa, ut venenatis ipsum nisi nec mi. Nulla pellentesque sem eget lacus tristique, ac consequat nunc bibendum. Nunc venenatis lacus eu eleifend mattis. Pellentesque placerat ornare ante nec finibus. Aenean lobortis augue lobortis felis posuere vestibulum. Maecenas finibus justo dolor, et tristique arcu suscipit eget. Quisque ut sollicitudin nibh. Fusce imperdiet dui at venenatis tristique. Morbi luctus lectus ornare justo imperdiet, a commodo purus pretium. Vestibulum condimentum posuere viverra. Morbi eget dui metus. Phasellus sapien ipsum, consectetur luctus facilisis commodo, efficitur in neque.",
        imageUrl: "",
      },
      {
        id: 2,
        title: "Titulo",
        description: "Ut a accumsan mi. Donec pellentesque ultricies fringilla. Vestibulum sagittis vestibulum velit molestie eleifend. Integer vestibulum posuere commodo. In hac habitasse platea dictumst. Proin porttitor orci nibh, a auctor ipsum ultrices ut. Donec pharetra dignissim mauris ut ullamcorper. Sed ac semper leo. Ut eros lacus, faucibus nec iaculis et, consequat sit amet lorem. Ut bibendum elementum nunc nec euismod. Aliquam metus lectus, dignissim sed enim ac, rhoncus euismod nisi.",
        imageUrl: "",
      },
      {
        id: 3,
        title: "Titulo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non nunc libero. Proin nec posuere orci, a ullamcorper metus. Quisque ut mollis augue. Nulla ac vestibulum risus. Ut volutpat sollicitudin tortor ut vehicula. Etiam tincidunt lacus in feugiat pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam id justo sit amet magna maximus consectetur at id nunc. Ut dignissim mi arcu, quis ornare justo efficitur sit amet. Quisque eget mollis nisi. Vestibulum nibh nibh, cursus vitae ligula eget, volutpat finibus enim. Aenean luctus, neque eu vestibulum mollis, velit odio varius nisl, ac lacinia metus leo ut lectus. Sed sed placerat est.",
        imageUrl: "",
      },
      {
        id: 4,
        title: "Titulo",
        description: "Integer neque libero, pharetra vitae pretium in, porttitor id mauris. Curabitur ultricies tristique libero, id efficitur odio rutrum eget. Morbi eleifend facilisis mauris ac malesuada. Etiam sapien massa, congue nec aliquet eu, venenatis eget justo. Nulla sodales mauris ipsum, id sodales eros laoreet ac. Etiam egestas fringilla sem id sollicitudin. Integer eu ultricies augue, a venenatis ex.",
        imageUrl: "",
      },
] }) => {
  if (cards.length === 0) {
    return <div className="text-center text-gray-500">No hay tarjetas disponibles.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

PackageCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
    })
  ),
};

export default PackageCards;