export type Props = {
  heading: string;
  paragraph?: string;
  list: {
    question: string;
    answer: string;
  }[];
  index?: number;
};

export type ListProps = {
  Indicator: JSX.Element;
  list: {
    question: JSX.Element;
    answer: JSX.Element;
  }[];
};
