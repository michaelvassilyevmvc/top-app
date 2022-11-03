import { Button, Htag, P, Rating, Tag } from "../components";
import React, { useEffect, useState } from "react";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h2">Text</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="right">
        Отмена
      </Button>
      <P size="s">Большой</P>
      <P size="m">Средний</P>
      <P size="l">Маленький</P>

      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag color="ghost">Ghost</Tag>
      <Tag color="green" href="http://google.com">
        Green
      </Tag>
      <Tag size="s" color="primary">
        Primary
      </Tag>

      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
