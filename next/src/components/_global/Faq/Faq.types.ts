export type Props = {
  heading: string;
  subheading: string;
  list: {
    question: string;
    answer: string;
  }[];
};

export type ListProps = {
  list: {
    question: React.ReactNode;
    answer: React.ReactNode;
  }[];
};
