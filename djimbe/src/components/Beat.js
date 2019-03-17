import React from "react";
import { CardContainer, BeatContainer, Card } from "../styled/Components";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

const SortableItem = SortableElement(({ value }) => <Card>{value}</Card>);

const helperContainer = document.getElementsByClassName("beat_container")[0];
const SortableList = SortableContainer(({ cards }) => {
  return (
    <CardContainer className="beat_container">
      {cards.map((value, index) => (
        <SortableItem key={`card-${index}`} index={index} value={value} />
      ))}
    </CardContainer>
  );
});

const Beat = props => {
  const [cards, setCards] = React.useState(["Shekere", "Drum", "Tubano"]);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setCards(arrayMove(cards, oldIndex, newIndex));
  };
  return (
    <SortableList
      cards={cards}
      onSortEnd={onSortEnd}
      axis="x"
      helperContainer={helperContainer}
    />
  );
};

export default Beat;
