import './styles.scss';
type Props = {
  text: string;
  click: () => void;
};

export default function MyButton({ text, click }: Props) {
  return (
    <button className="my-button" onClick={click}>
      {text}
    </button>
  );
}
