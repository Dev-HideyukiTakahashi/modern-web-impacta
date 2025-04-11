import { HTMLInputTypeAttribute } from 'react';
import './styles.scss';

type Props = {
  label: string;
  value: string;
  change: (value: string) => void;
  type?: HTMLInputTypeAttribute;
};

export default function MyInput(props: Props) {
  return (
    <div className="my-input">
      <div>{props.label}:</div>
      <input
        type={props.type ? props.type : 'text'}
        value={props.value}
        onChange={(e) => props.change(e.target.value)}
      />
    </div>
  );
}
